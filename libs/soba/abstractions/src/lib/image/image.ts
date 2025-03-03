import {
  AnyFunction,
  BooleanInput,
  coerceBooleanProperty,
  coerceNumberProperty,
  NgtObjectInputs,
  NgtObjectInputsState,
  NgtObjectPassThroughModule,
  NgtRenderState,
  NgtStore,
  NGT_INSTANCE_HOST_REF,
  NGT_INSTANCE_REF,
  NumberInput,
  provideObjectHostRef,
  Ref,
  startWithUndefined,
} from '@angular-three/core';
import { NgtPlaneGeometryModule } from '@angular-three/core/geometries';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { NgtSobaImageShaderMaterialModule } from '@angular-three/soba/shaders';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  SkipSelf,
  TemplateRef,
} from '@angular/core';
import { catchError, EMPTY, Observable, switchMap, tap } from 'rxjs';
import * as THREE from 'three';

@Directive({
  selector: 'ng-template[ngt-soba-image-content]',
})
export class NgtSobaImageContent {
  constructor(public templateRef: TemplateRef<{ image: Ref<THREE.Mesh> }>) {}

  static ngTemplateContextGuard(dir: NgtSobaImageContent, ctx: any): ctx is { image: Ref<THREE.Mesh> } {
    return true;
  }
}

export interface NgtSobaImageState extends NgtObjectInputsState<THREE.Mesh> {
  url: string;
  segments?: number;
  zoom?: number;
  grayscale?: number;
  toneMapped?: boolean;
  texture: THREE.Texture;
}

@Component({
  selector: 'ngt-soba-image[url]',
  template: `
    <ng-container *ngIf="imageViewModel$ | async as imageViewModel">
      <ngt-plane-geometry
        noAttach
        #ngtPlane
        [args]="[1, 1, imageViewModel.segments, imageViewModel.segments]"
      ></ngt-plane-geometry>

      <ngt-soba-image-shader-material
        #ngtMaterial
        [color]="color!"
        [map]="imageViewModel.texture"
        [zoom]="imageViewModel.zoom!"
        [grayscale]="imageViewModel.grayscale!"
        [scale]="imageViewModel.planeBounds"
        [imageBounds]="imageViewModel.imageBounds"
        [toneMapped]="imageViewModel.toneMapped!"
      ></ngt-soba-image-shader-material>

      <ngt-mesh
        (beforeRender)="beforeRender.emit($event)"
        [material]="$any(ngtMaterial.instance)"
        [geometry]="$any(ngtPlane.instance)"
        [ngtObjectInputs]="this"
        [ngtObjectOutputs]="this"
      >
        <ng-container
          *ngIf="content"
          [ngTemplateOutlet]="content.templateRef"
          [ngTemplateOutletContext]="{ image: instance }"
        ></ng-container>
      </ngt-mesh>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtTextureLoader, provideObjectHostRef(NgtSobaImage)],
})
export class NgtSobaImage extends NgtObjectInputs<THREE.Mesh, NgtSobaImageState> {
  @Output() beforeRender = new EventEmitter<{
    state: NgtRenderState;
    object: THREE.Mesh;
  }>();

  @Input() set url(url: string) {
    this.set({ url });
  }

  @Input() set segments(segments: NumberInput) {
    this.set({ segments: coerceNumberProperty(segments) });
  }

  @Input() set zoom(zoom: NumberInput) {
    this.set({ zoom: coerceNumberProperty(zoom) });
  }

  @Input() set grayscale(grayscale: NumberInput) {
    this.set({ grayscale: coerceNumberProperty(grayscale) });
  }

  @Input() set toneMapped(toneMapped: BooleanInput) {
    this.set({ toneMapped: coerceBooleanProperty(toneMapped) });
  }

  @ContentChild(NgtSobaImageContent) content?: NgtSobaImageContent;

  texture$!: Observable<THREE.Texture>;
  imageBounds!: [number, number];
  planeBounds: [number, number] = [1, 1];

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
    private textureLoader: NgtTextureLoader
  ) {
    super(zone, store, parentRef, parentHostRef);
  }

  readonly imageViewModel$ = this.select(
    this.select((s) => s.texture),
    this.select((s) => s.zoom),
    this.select((s) => s.color),
    this.select((s) => s.segments),
    this.select((s) => s.scale),
    this.select((s) => s.grayscale),
    this.select((s) => s.toneMapped).pipe(startWithUndefined()),
    (texture, zoom, color, segments, scale, grayscale, toneMapped) => ({
      texture,
      zoom,
      color,
      segments,
      grayscale,
      toneMapped,
      planeBounds: [scale.x, scale.y],
      imageBounds: [texture.image.width, texture.image.height],
    })
  );

  protected override preInit() {
    this.set((state) => ({
      segments: state.segments ?? 1,
      zoom: state.zoom ?? 1,
      grayscale: state.grayscale ?? 0,
    }));
  }

  override ngOnInit() {
    super.ngOnInit();
    this.zone.runOutsideAngular(() => {
      this.onCanvasReady(this.store.ready$, () => {
        this.setTexture(this.select((s) => s.url));
      });
    });
  }

  private readonly setTexture = this.effect<string>(
    switchMap((url) =>
      this.textureLoader.load(url).pipe(
        tap((texture) => {
          const gl = this.store.get((s) => s.gl);
          texture.encoding = gl.outputEncoding;
          this.set({ texture });
        }),
        catchError(() => EMPTY)
      )
    )
  );
}

@NgModule({
  declarations: [NgtSobaImage, NgtSobaImageContent],
  exports: [NgtSobaImage, NgtSobaImageContent],
  imports: [
    NgtMeshModule,
    NgtPlaneGeometryModule,
    NgtSobaImageShaderMaterialModule,
    CommonModule,
    NgtObjectPassThroughModule,
  ],
})
export class NgtSobaImageModule {}
