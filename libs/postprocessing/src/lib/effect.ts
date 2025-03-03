import {
  AnyConstructor,
  AnyFunction,
  coerceNumberProperty,
  NGT_INSTANCE_HOST_REF,
  NGT_INSTANCE_REF,
  NgtInstance,
  NgtStore,
  NgtUnknownInstance,
  NumberInput,
  provideInstanceRef,
  Ref,
  startWithUndefined,
  tapEffect,
  UnknownRecord,
} from '@angular-three/core';
import { Directive, Inject, InjectionToken, Input, NgZone, Optional, Provider, SkipSelf } from '@angular/core';
import { BlendFunction, Effect } from 'postprocessing';
import { tap } from 'rxjs';
import * as THREE from 'three';
import { NgtEffectComposer } from './effect-composer';

export const NGT_COMMON_EFFECT_REF = new InjectionToken('NgtCommonEffect ref');

export function provideCommonEffectRef<TType extends AnyConstructor<any>>(
  subEffect: TType,
  factory?: (instance: InstanceType<TType>) => Ref
): Provider {
  return [
    provideInstanceRef(subEffect, factory),
    { provide: NgtCommonEffect, useExisting: subEffect },
    {
      provide: NGT_COMMON_EFFECT_REF,
      useFactory: (instance: InstanceType<TType>) => {
        return () => factory?.(instance) || instance.instance;
      },
      deps: [subEffect],
    },
  ];
}

@Directive()
export abstract class NgtCommonEffect<TEffect extends Effect = Effect> extends NgtInstance<TEffect> {
  @Input() set opacity(opacity: NumberInput) {
    this.set({ opacity: coerceNumberProperty(opacity) });
  }

  @Input() set blendFunction(blendFunction: BlendFunction) {
    this.set({ blendFunction });
  }

  abstract get effectType(): AnyConstructor<TEffect>;

  protected get defaultBlendMode(): BlendFunction {
    return BlendFunction.NORMAL;
  }

  protected readonly effectOptions$ = this.select(
    this.select((s) => s['opacity']).pipe(startWithUndefined()),
    this.select((s) => s['blendFunction']),
    this.instance$
  );

  constructor(
    zone: NgZone,
    store: NgtStore,
    @Optional()
    @SkipSelf()
    @Inject(NGT_INSTANCE_REF)
    parentRef: AnyFunction<Ref>,
    @Optional()
    @SkipSelf()
    @Inject(NGT_INSTANCE_HOST_REF)
    parentHostRef: AnyFunction<Ref>,
    @Optional()
    protected effectComposer: NgtEffectComposer
  ) {
    if (!effectComposer) {
      throw new Error(`Effects can only be used within <ngt-effect-composer>`);
    }

    super(zone, store, parentRef, parentHostRef);
  }

  protected override preInit() {
    this.set((state) => ({
      blendFunction: state['blendFunction'] || this.defaultBlendMode,
    }));
  }

  protected get effectOptionsFields(): Record<string, boolean> {
    return { blendFunction: false };
  }

  override ngOnInit() {
    super.ngOnInit();
    this.zone.runOutsideAngular(() => {
      this.onCanvasReady(this.store.ready$, () => {
        this.init(
          this.select(
            this.optionsFieldsToOptions(this.effectOptionsFields, true),
            this.ctorParams$,
            (effectOptions) => effectOptions
          )
        );
        if (!this.skipConfigureBlendMode) {
          this.configureBlendMode(
            this.select(
              this.select((s) => s['opacity']).pipe(startWithUndefined()),
              this.select((s) => s['blendMode']),
              this.instance$
            )
          );
        }
        this.postInit();
      });
    });
  }

  /**
   * Sub-classes can choose to skip default effect options effect
   */
  protected get skipConfigureBlendMode() {
    return false;
  }

  private readonly configureBlendMode = this.effect<{}>(
    tap(() => {
      const { instance: effect, blendFunction, opacity } = this.get();
      const invalidate = this.store.get((s) => s.invalidate);
      if (effect.value) {
        effect.value.blendMode.blendFunction =
          !blendFunction && blendFunction !== 0 ? this.defaultBlendMode : blendFunction;

        if (opacity !== undefined) {
          effect.value.blendMode.opacity.value = opacity;
        }
      }
      invalidate();
    })
  );

  private readonly init = this.effect<UnknownRecord>(
    tapEffect((effectOptions) => {
      const effectCtorParams = this.adjustCtorParams([effectOptions]);
      const effect = this.prepareInstance(new this.effectType(...effectCtorParams));

      return () => {
        const parent = effect.__ngt__.parent?.value;
        // remove effect ref from parent effect composer
        if (parent && (parent as unknown as THREE.Group).isGroup) {
          (parent as NgtUnknownInstance).__ngt__.objects.set((refs) => refs.filter((ref) => ref.value !== effect));
        }
        effect.dispose();
      };
    })
  );
}
