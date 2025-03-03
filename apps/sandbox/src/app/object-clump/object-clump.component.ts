import { NgtCannonDebugModule, NgtPhysicBody, NgtPhysicsModule } from '@angular-three/cannon';
import { NgtCanvasModule, NgtComponentStore, NgtRenderState, NgtStore } from '@angular-three/core';
import { NgtValueAttributeModule, NgtVector2AttributeModule } from '@angular-three/core/attributes';
import { NgtSphereGeometryModule } from '@angular-three/core/geometries';
import { NgtAmbientLightModule, NgtDirectionalLightModule, NgtSpotLightModule } from '@angular-three/core/lights';
import { NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
import { NgtInstancedMeshModule } from '@angular-three/core/meshes';
import { NgtEffectComposerModule } from '@angular-three/postprocessing';
import { NgtBloomEffectModule } from '@angular-three/postprocessing/effects';
import { NgtTextureLoader } from '@angular-three/soba/loaders';
import { NgtSobaEnvironmentModule, NgtSobaSkyModule } from '@angular-three/soba/staging';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, NgModule, NgZone, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KernelSize } from 'postprocessing';
import * as THREE from 'three';

@Component({
  selector: 'sandbox-object-clump',
  template: `
    <ngt-canvas shadows [dpr]="[1, 2]" [camera]="{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }" initialLog>
      <sandbox-scene></sandbox-scene>
    </ngt-canvas>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectClumpComponent {
  readonly kernelSize = KernelSize.VERY_LARGE;
}

@Component({
  selector: 'sandbox-scene',
  template: `
    <ngt-ambient-light intensity="0.25"></ngt-ambient-light>
    <ngt-spot-light [position]="[30, 30, 30]" intensity="1" angle="0.2" penumbra="1" castShadow>
      <ngt-vector2 [attach]="['shadow', 'mapSize']" [vector2]="[512, 512]"></ngt-vector2>
    </ngt-spot-light>
    <ngt-directional-light [position]="[-10, -10, -10]" intensity="5" color="purple"></ngt-directional-light>

    <ngt-physics [gravity]="[0, 2, 0]" iterations="10">
      <sandbox-pointer></sandbox-pointer>
      <sandbox-clump></sandbox-clump>
    </ngt-physics>

    <ngt-soba-environment files="assets/adamsbridge.hdr"></ngt-soba-environment>

    <ngt-effect-composer>
      <ng-template ngt-effect-composer-content>
        <ngt-bloom-effect></ngt-bloom-effect>
      </ng-template>
    </ngt-effect-composer>

    <ngt-soba-sky></ngt-soba-sky>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Scene {}

@Directive({
  selector: 'sandbox-pointer',
  providers: [NgtPhysicBody],
})
export class Pointer extends NgtComponentStore implements OnInit {
  readonly pointerRef = this.physicBody.useSphere(
    () => ({
      type: 'Kinematic',
      args: [3],
      position: [0, 0, 0],
    }),
    false
  );

  constructor(private physicBody: NgtPhysicBody, private store: NgtStore, private zone: NgZone) {
    super();
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.onCanvasReady(
        this.store.ready$,
        () =>
          this.store.registerBeforeRender({
            callback: ({ pointer, viewport }) => {
              this.pointerRef.api.position.set((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0);
            },
          }),
        true
      );
    });
  }
}

const mat = new THREE.Matrix4();
const vec = new THREE.Vector3();

@Component({
  selector: 'sandbox-clump',
  template: `
    <ngt-instanced-mesh
      [ref]="sphereRef.ref"
      [count]="count"
      castShadow
      receiveShadow
      (beforeRender)="onBeforeRender($event)"
    >
      <ngt-sphere-geometry [args]="[1, 32, 32]"></ngt-sphere-geometry>
      <ngt-mesh-standard-material
        color="red"
        roughness="0"
        envMapIntensity="0.2"
        emissive="#370037"
        [map]="(texture$ | async)!"
      ></ngt-mesh-standard-material>
    </ngt-instanced-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtTextureLoader, NgtPhysicBody],
})
export class Clump {
  readonly count = 40;
  readonly texture$ = this.textureLoader.load('assets/cross.jpg');

  readonly sphereRef = this.physicBody.useSphere<THREE.InstancedMesh>(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [
      THREE.MathUtils.randFloatSpread(20),
      THREE.MathUtils.randFloatSpread(20),
      THREE.MathUtils.randFloatSpread(20),
    ],
  }));

  constructor(private textureLoader: NgtTextureLoader, private physicBody: NgtPhysicBody) {}

  onBeforeRender($event: { state: NgtRenderState; object: THREE.InstancedMesh }) {
    for (let i = 0; i < this.count; i++) {
      // Get current whereabouts of the instanced sphere
      $event.object.getMatrixAt(i, mat);
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      this.sphereRef.api
        .at(i)
        .applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-50).toArray(), [0, 0, 0]);
    }
  }
}

@NgModule({
  declarations: [ObjectClumpComponent, Scene, Pointer, Clump],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ObjectClumpComponent }]),
    NgtEffectComposerModule,
    NgtInstancedMeshModule,
    NgtSphereGeometryModule,
    NgtMeshStandardMaterialModule,
    NgtCanvasModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
    NgtVector2AttributeModule,
    NgtDirectionalLightModule,
    NgtPhysicsModule,
    NgtSobaEnvironmentModule,
    NgtSobaSkyModule,
    NgtBloomEffectModule,
    NgtValueAttributeModule,
    NgtCannonDebugModule,
  ],
  exports: [Pointer],
})
export class ObjectClumpComponentModule {}
