import { Directive, Inject, Input, NgZone, Optional, SkipSelf } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import * as THREE from 'three';
import { Plane } from 'three/src/math/Plane';
import type { NgtInstanceState } from '../abstracts/instance';
import { NgtInstance } from '../abstracts/instance';
import { Ref } from '../ref';
import { startWithUndefined, tapEffect } from '../stores/component-store';
import { NgtStore } from '../stores/store';
import { NGT_OBJECT_HOST_REF, NGT_OBJECT_REF } from '../tokens';
import type { AnyConstructor, AnyFunction, BooleanInput, NumberInput, UnknownRecord } from '../types';
import { checkNeedsUpdate } from '../utils/check-needs-update';
import { coerceBooleanProperty, coerceNumberProperty } from '../utils/coercion';

export interface NgtCommonMaterialState<
  TMaterialParameters extends THREE.MaterialParameters = THREE.MaterialParameters,
  TMaterial extends THREE.Material = THREE.Material
> extends NgtInstanceState<TMaterial> {
  materialParameters: TMaterialParameters;
  alphaTest?: number;
  alphaToCoverage?: boolean;
  blendDst?: THREE.BlendingDstFactor;
  blendDstAlpha?: number;
  blendEquation?: THREE.BlendingEquation;
  blendEquationAlpha?: number;
  blending?: THREE.Blending;
  blendSrc?: THREE.BlendingSrcFactor | THREE.BlendingDstFactor;
  blendSrcAlpha?: number;
  clipIntersection?: boolean;
  clippingPlanes?: Plane[];
  clipShadows?: boolean;
  colorWrite?: boolean;
  defines?: any;
  depthFunc?: THREE.DepthModes;
  depthTest?: boolean;
  depthWrite?: boolean;
  name?: string;
  opacity?: number;
  polygonOffset?: boolean;
  polygonOffsetFactor?: number;
  polygonOffsetUnits?: number;
  precision?: 'highp' | 'mediump' | 'lowp' | null;
  premultipliedAlpha?: boolean;
  dithering?: boolean;
  side?: THREE.Side;
  shadowSide?: THREE.Side;
  toneMapped?: boolean;
  transparent?: boolean;
  vertexColors?: boolean;
  visible?: boolean;
  format?: THREE.PixelFormat;
  stencilWrite?: boolean;
  stencilFunc?: THREE.StencilFunc;
  stencilRef?: number;
  stencilWriteMask?: number;
  stencilFuncMask?: number;
  stencilFail?: THREE.StencilOp;
  stencilZFail?: THREE.StencilOp;
  stencilZPass?: THREE.StencilOp;
  userData?: any;
}

@Directive()
export abstract class NgtCommonMaterial<
  TMaterialParameters extends THREE.MaterialParameters = THREE.MaterialParameters,
  TMaterial extends THREE.Material = THREE.Material
> extends NgtInstance<TMaterial, NgtCommonMaterialState<TMaterialParameters, TMaterial>> {
  @Input() set alphaTest(alphaTest: NumberInput) {
    this.set({ alphaTest: coerceNumberProperty(alphaTest) });
  }

  @Input() set alphaToCoverage(alphaToCoverage: BooleanInput) {
    this.set({ alphaToCoverage: coerceBooleanProperty(alphaToCoverage) });
  }

  @Input() set blendDst(blendDst: THREE.BlendingDstFactor) {
    this.set({ blendDst });
  }

  @Input() set blendDstAlpha(blendDstAlpha: NumberInput) {
    this.set({ blendDstAlpha: coerceNumberProperty(blendDstAlpha) });
  }

  @Input() set blendEquation(blendEquation: THREE.BlendingEquation) {
    this.set({ blendEquation });
  }

  @Input() set blendEquationAlpha(blendEquationAlpha: NumberInput) {
    this.set({
      blendEquationAlpha: coerceNumberProperty(blendEquationAlpha),
    });
  }

  @Input() set blending(blending: THREE.Blending) {
    this.set({ blending });
  }

  @Input() set blendSrc(blendSrc: THREE.BlendingSrcFactor | THREE.BlendingDstFactor) {
    this.set({ blendSrc });
  }

  @Input() set blendSrcAlpha(blendSrcAlpha: NumberInput) {
    this.set({ blendSrcAlpha: coerceNumberProperty(blendSrcAlpha) });
  }

  @Input() set clipIntersection(clipIntersection: BooleanInput) {
    this.set({ clipIntersection: coerceBooleanProperty(clipIntersection) });
  }

  @Input() set clippingPlanes(clippingPlanes: Plane[]) {
    this.set({ clippingPlanes });
  }

  @Input() set clipShadows(clipShadows: BooleanInput) {
    this.set({ clipShadows: coerceBooleanProperty(clipShadows) });
  }

  @Input() set colorWrite(colorWrite: BooleanInput) {
    this.set({ colorWrite: coerceBooleanProperty(colorWrite) });
  }

  @Input() set defines(defines: any) {
    this.set({ defines });
  }

  @Input() set depthFunc(depthFunc: THREE.DepthModes) {
    this.set({ depthFunc });
  }

  @Input() set depthTest(depthTest: BooleanInput) {
    this.set({ depthTest: coerceBooleanProperty(depthTest) });
  }

  @Input() set depthWrite(depthWrite: BooleanInput) {
    this.set({ depthWrite: coerceBooleanProperty(depthWrite) });
  }

  @Input() set name(name: string) {
    this.set({ name });
  }

  @Input() set opacity(opacity: NumberInput) {
    this.set({ opacity: coerceNumberProperty(opacity) });
  }

  @Input() set polygonOffset(polygonOffset: BooleanInput) {
    this.set({ polygonOffset: coerceBooleanProperty(polygonOffset) });
  }

  @Input() set polygonOffsetFactor(polygonOffsetFactor: NumberInput) {
    this.set({
      polygonOffsetFactor: coerceNumberProperty(polygonOffsetFactor),
    });
  }

  @Input() set polygonOffsetUnits(polygonOffsetUnits: NumberInput) {
    this.set({
      polygonOffsetUnits: coerceNumberProperty(polygonOffsetUnits),
    });
  }

  @Input() set precision(precision: 'highp' | 'mediump' | 'lowp' | null) {
    this.set({ precision });
  }

  @Input() set premultipliedAlpha(premultipliedAlpha: BooleanInput) {
    this.set({
      premultipliedAlpha: coerceBooleanProperty(premultipliedAlpha),
    });
  }

  @Input() set dithering(dithering: BooleanInput) {
    this.set({ dithering: coerceBooleanProperty(dithering) });
  }

  @Input() set side(side: THREE.Side) {
    this.set({ side });
  }

  @Input() set shadowSide(shadowSide: THREE.Side) {
    this.set({ shadowSide });
  }

  @Input() set toneMapped(toneMapped: BooleanInput) {
    this.set({ toneMapped: coerceBooleanProperty(toneMapped) });
  }

  @Input() set transparent(transparent: BooleanInput) {
    this.set({ transparent: coerceBooleanProperty(transparent) });
  }

  @Input() set vertexColors(vertexColors: BooleanInput) {
    this.set({ vertexColors: coerceBooleanProperty(vertexColors) });
  }

  @Input() set visible(visible: BooleanInput) {
    this.set({ visible: coerceBooleanProperty(visible) });
  }

  @Input() set format(format: THREE.PixelFormat) {
    this.set({ format });
  }

  @Input() set stencilWrite(stencilWrite: BooleanInput) {
    this.set({ stencilWrite: coerceBooleanProperty(stencilWrite) });
  }

  @Input() set stencilFunc(stencilFunc: THREE.StencilFunc) {
    this.set({ stencilFunc });
  }

  @Input() set stencilRef(stencilRef: NumberInput) {
    this.set({ stencilRef: coerceNumberProperty(stencilRef) });
  }

  @Input() set stencilWriteMask(stencilWriteMask: NumberInput) {
    this.set({ stencilWriteMask: coerceNumberProperty(stencilWriteMask) });
  }

  @Input() set stencilFuncMask(stencilFuncMask: NumberInput) {
    this.set({ stencilFuncMask: coerceNumberProperty(stencilFuncMask) });
  }

  @Input() set stencilFail(stencilFail: THREE.StencilOp) {
    this.set({ stencilFail });
  }

  @Input() set stencilZFail(stencilZFail: THREE.StencilOp) {
    this.set({ stencilZFail });
  }

  @Input() set stencilZPass(stencilZPass: THREE.StencilOp) {
    this.set({ stencilZPass });
  }

  @Input() set userData(userData: any) {
    this.set({ userData });
  }

  /**
   * @deprecated Use individual inputs instead. Notice: Do not mix [parameters] and individual inputs, they will not be merged. Will be removed in next major version
   */
  @Input() set parameters(v: TMaterialParameters | undefined) {
    this.set({ materialParameters: v });
  }

  get parameters(): TMaterialParameters | undefined {
    return this.get((s) => s.materialParameters);
  }

  abstract get materialType(): AnyConstructor<TMaterial>;

  constructor(
    zone: NgZone,
    store: NgtStore,
    @Optional()
    @SkipSelf()
    @Inject(NGT_OBJECT_REF)
    parentRef: AnyFunction<Ref<THREE.Object3D>>,
    @Optional()
    @SkipSelf()
    @Inject(NGT_OBJECT_HOST_REF)
    parentHostRef: AnyFunction<Ref<THREE.Object3D>>
  ) {
    super(zone, store, parentRef, parentHostRef);
  }

  protected override preInit() {
    this.set((state) => ({
      attach: state.attach.length ? state.attach : ['material'],
      materialParameters: state.materialParameters || ({} as TMaterialParameters),
    }));
  }

  override ngOnInit() {
    super.ngOnInit();
    this.zone.runOutsideAngular(() => {
      this.onCanvasReady(this.store.ready$, () => {
        this.init(this.ctorParams$);
        this.postInit();
        this.setParameters(
          this.select(
            this.instance$,
            this.select((s) => s.materialParameters),
            this.parameters$,
            this.subParameters$,
            (material, materialParameters, parameters, subParameters) => ({
              material,
              parameters: Object.keys(materialParameters).length
                ? (materialParameters as UnknownRecord)
                : { ...parameters, ...subParameters },
            })
          )
        );
      });
    });
  }

  private readonly init = this.effect<{}>(
    tapEffect(() => {
      const material = this.prepareInstance(new this.materialType());
      return () => {
        material.dispose();
      };
    })
  );

  private readonly setParameters = this.effect<{
    material: TMaterial;
    parameters: UnknownRecord;
  }>(
    tap(({ parameters, material }) => {
      material.setValues(
        Object.assign(
          Object.entries(parameters).reduce((result, [key, value]) => {
            if (value !== undefined) {
              result[key as keyof typeof result] = value;
            }
            return result;
          }, {} as THREE.MaterialParameters),
          'uniforms' in material && 'uniforms' in parameters
            ? {
                uniforms: {
                  ...(material as unknown as THREE.ShaderMaterial).uniforms,
                  ...(parameters as unknown as THREE.ShaderMaterialParameters).uniforms,
                },
              }
            : {}
        )
      );
      checkNeedsUpdate(material);
    })
  );

  // TODO: put these back after [parameters] is removed. Right now, Material needs to handle their own update options logic
  // protected override get optionFields(): Record<string, boolean> {
  //     return { ...super.optionFields,
  //         alphaTest: true,
  //         alphaToCoverage: true,
  //         blendDst: true,
  //         blendDstAlpha: true,
  //         blendEquation: true,
  //         blendEquationAlpha: true,
  //         blending: true,
  //         blendSrc: true,
  //         blendSrcAlpha: true,
  //         clipIntersection: true,
  //         clippingPlanes: true,
  //         clipShadows: true,
  //         colorWrite: true,
  //         defines: true,
  //         depthFunc: true,
  //         depthTest: true,
  //         depthWrite: true,
  //         fog: true,
  //         name: true,
  //         opacity: true,
  //         polygonOffset: true,
  //         polygonOffsetFactor: true,
  //         polygonOffsetUnits: true,
  //         precision: true,
  //         premultipliedAlpha: true,
  //         dithering: true,
  //         side: true,
  //         shadowSide: true,
  //         toneMapped: true,
  //         transparent: true,
  //         vertexColors: true,
  //         visible: true,
  //         format: true,
  //         stencilWrite: true,
  //         stencilFunc: true,
  //         stencilRef: true,
  //         stencilWriteMask: true,
  //         stencilFuncMask: true,
  //         stencilFail: true,
  //         stencilZFail: true,
  //         stencilZPass: true,
  //         userData: true,
  //     };
  // }

  // TODO: remove when [parameters] is removed
  private get subParameters$(): Observable<UnknownRecord> {
    const optionFieldEntries = Object.entries(this.optionFields);
    if (optionFieldEntries.length === 0) return of({});
    return this.select(
      ...optionFieldEntries.map(([inputKey, shouldStartWithUndefined]) => {
        const option$ = this.select((s) => (s as unknown as UnknownRecord)[inputKey]);
        if (shouldStartWithUndefined) return option$.pipe(startWithUndefined());
        return option$;
      }),
      (...args: any[]) =>
        args.reduce((record, arg, index) => {
          record[optionFieldEntries[index][0]] = arg;
          return record;
        }, {} as UnknownRecord)
    );
  }

  // TODO: remove when [parameters] is removed
  protected readonly parameters$ = this.select(
    this.select((s) => s.alphaTest).pipe(startWithUndefined()),
    this.select((s) => s.alphaToCoverage).pipe(startWithUndefined()),
    this.select((s) => s.blendDst).pipe(startWithUndefined()),
    this.select((s) => s.blendDstAlpha).pipe(startWithUndefined()),
    this.select((s) => s.blendEquation).pipe(startWithUndefined()),
    this.select((s) => s.blendEquationAlpha).pipe(startWithUndefined()),
    this.select((s) => s.blending).pipe(startWithUndefined()),
    this.select((s) => s.blendSrc).pipe(startWithUndefined()),
    this.select((s) => s.blendSrcAlpha).pipe(startWithUndefined()),
    this.select((s) => s.clipIntersection).pipe(startWithUndefined()),
    this.select((s) => s.clippingPlanes).pipe(startWithUndefined()),
    this.select((s) => s.clipShadows).pipe(startWithUndefined()),
    this.select((s) => s.colorWrite).pipe(startWithUndefined()),
    this.select((s) => s.defines).pipe(startWithUndefined()),
    this.select((s) => s.depthFunc).pipe(startWithUndefined()),
    this.select((s) => s.depthTest).pipe(startWithUndefined()),
    this.select((s) => s.depthWrite).pipe(startWithUndefined()),
    this.select((s) => s.name).pipe(startWithUndefined()),
    this.select((s) => s.opacity).pipe(startWithUndefined()),
    this.select((s) => s.polygonOffset).pipe(startWithUndefined()),
    this.select((s) => s.polygonOffsetFactor).pipe(startWithUndefined()),
    this.select((s) => s.polygonOffsetUnits).pipe(startWithUndefined()),
    this.select((s) => s.precision).pipe(startWithUndefined()),
    this.select((s) => s.premultipliedAlpha).pipe(startWithUndefined()),
    this.select((s) => s.dithering).pipe(startWithUndefined()),
    this.select((s) => s.side).pipe(startWithUndefined()),
    this.select((s) => s.shadowSide).pipe(startWithUndefined()),
    this.select((s) => s.toneMapped).pipe(startWithUndefined()),
    this.select((s) => s.transparent).pipe(startWithUndefined()),
    this.select((s) => s.vertexColors).pipe(startWithUndefined()),
    this.select((s) => s.visible).pipe(startWithUndefined()),
    this.select((s) => s.format).pipe(startWithUndefined()),
    this.select((s) => s.stencilWrite).pipe(startWithUndefined()),
    this.select((s) => s.stencilFunc).pipe(startWithUndefined()),
    this.select((s) => s.stencilRef).pipe(startWithUndefined()),
    this.select((s) => s.stencilWriteMask).pipe(startWithUndefined()),
    this.select((s) => s.stencilFuncMask).pipe(startWithUndefined()),
    this.select((s) => s.stencilFail).pipe(startWithUndefined()),
    this.select((s) => s.stencilZFail).pipe(startWithUndefined()),
    this.select((s) => s.stencilZPass).pipe(startWithUndefined()),
    this.select((s) => s.userData).pipe(startWithUndefined()),
    (
      alphaTest,
      alphaToCoverage,
      blendDst,
      blendDstAlpha,
      blendEquation,
      blendEquationAlpha,
      blending,
      blendSrc,
      blendSrcAlpha,
      clipIntersection,
      clippingPlanes,
      clipShadows,
      colorWrite,
      defines,
      depthFunc,
      depthTest,
      depthWrite,
      name,
      opacity,
      polygonOffset,
      polygonOffsetFactor,
      polygonOffsetUnits,
      precision,
      premultipliedAlpha,
      dithering,
      side,
      shadowSide,
      toneMapped,
      transparent,
      vertexColors,
      visible,
      format,
      stencilWrite,
      stencilFunc,
      stencilRef,
      stencilWriteMask,
      stencilFuncMask,
      stencilFail,
      stencilZFail,
      stencilZPass,
      userData
    ) => ({
      alphaTest,
      alphaToCoverage,
      blendDst,
      blendDstAlpha,
      blendEquation,
      blendEquationAlpha,
      blending,
      blendSrc,
      blendSrcAlpha,
      clipIntersection,
      clippingPlanes,
      clipShadows,
      colorWrite,
      defines,
      depthFunc,
      depthTest,
      depthWrite,
      name,
      opacity,
      polygonOffset,
      polygonOffsetFactor,
      polygonOffsetUnits,
      precision,
      premultipliedAlpha,
      dithering,
      side,
      shadowSide,
      toneMapped,
      transparent,
      vertexColors,
      visible,
      format,
      stencilWrite,
      stencilFunc,
      stencilRef,
      stencilWriteMask,
      stencilFuncMask,
      stencilFail,
      stencilZFail,
      stencilZPass,
      userData,
    })
  );
}
