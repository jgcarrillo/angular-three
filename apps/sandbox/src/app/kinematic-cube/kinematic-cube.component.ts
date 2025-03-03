import { NgtPhysicBody, NgtPhysicsModule } from '@angular-three/cannon';
import {
  NgtCanvasModule,
  NgtEuler,
  NgtRenderState,
  NgtTriple,
  NgtVector3,
  NgtVectorPipeModule,
} from '@angular-three/core';
import { NgtInstancedBufferAttributeModule, NgtVector2AttributeModule } from '@angular-three/core/attributes';
import { NgtBoxGeometryModule, NgtPlaneGeometryModule, NgtSphereGeometryModule } from '@angular-three/core/geometries';
import { NgtHemisphereLightModule, NgtPointLightModule, NgtSpotLightModule } from '@angular-three/core/lights';
import { NgtMeshLambertMaterialModule, NgtMeshPhongMaterialModule } from '@angular-three/core/materials';
import { NgtInstancedMeshModule, NgtMeshModule } from '@angular-three/core/meshes';
import { NgtStatsModule } from '@angular-three/core/stats';
import { ChangeDetectionStrategy, Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
// @ts-ignore
import niceColors from 'nice-color-palettes';
import * as THREE from 'three';

const niceColor = niceColors[Math.floor(Math.random() * niceColors.length)];

@Component({
  selector: 'sandbox-kinematic-cube',
  template: `
    <ngt-canvas shadows [gl]="{ alpha: false }" [camera]="{ position: [0, -12, 16] }">
      <sandbox-scene></sandbox-scene>
    </ngt-canvas>
    <ngt-stats></ngt-stats>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KinematicCubeComponent {}

@Component({
  selector: 'sandbox-scene',
  template: `
    <ngt-hemisphere-light intensity="0.35"></ngt-hemisphere-light>
    <ngt-spot-light [position]="[30, 0, 30]" intensity="2" angle="0.3" penumbra="1" castShadow>
      <ngt-vector2 [attach]="['shadow', 'mapSize']" [vector2]="256"></ngt-vector2>
    </ngt-spot-light>
    <ngt-point-light [position]="[-30, 0, -30]" intensity="0.5"></ngt-point-light>

    <ngt-physics [gravity]="[0, 0, -30]">
      <sandbox-plane [color]="niceColor[4]"></sandbox-plane>
      <sandbox-plane [color]="niceColor[1]" [position]="[-6, 0, 0]" [rotation]="[0, 0.9, 0]"></sandbox-plane>
      <sandbox-plane [color]="niceColor[2]" [position]="[6, 0, 0]" [rotation]="[0, -0.9, 0]"></sandbox-plane>
      <sandbox-plane [color]="niceColor[3]" [position]="[0, 6, 0]" [rotation]="[0.9, 0, 0]"></sandbox-plane>
      <sandbox-plane [color]="niceColor[0]" [position]="[0, -6, 0]" [rotation]="[-0.9, 0, 0]"></sandbox-plane>

      <sandbox-box></sandbox-box>
      <sandbox-spheres [number]="100"></sandbox-spheres>
    </ngt-physics>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Scene {
  readonly niceColor = niceColor;
}

@Component({
  selector: 'sandbox-plane',
  template: `
    <ngt-mesh [ref]="planeRef.ref" [rotation]="rotation" [position]="position" receiveShadow>
      <ngt-plane-geometry [args]="[1000, 1000]"></ngt-plane-geometry>
      <ngt-mesh-phong-material [color]="color!"></ngt-mesh-phong-material>
    </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtPhysicBody],
})
export class Plane {
  @Input() color?: THREE.ColorRepresentation;
  @Input() position?: NgtVector3;
  @Input() rotation?: NgtEuler;

  readonly planeRef = this.physicBody.usePlane<THREE.Mesh>(() => ({
    position: this.position as NgtTriple,
    rotation: this.rotation as NgtTriple,
  }));

  constructor(private physicBody: NgtPhysicBody) {}
}

@Component({
  selector: 'sandbox-box',
  template: `
    <ngt-mesh
      [ref]="boxRef.ref"
      [castShadow]="true"
      [receiveShadow]="true"
      (beforeRender)="onBoxBeforeRender($event.state)"
    >
      <ngt-box-geometry [args]="boxSize"></ngt-box-geometry>
      <ngt-mesh-lambert-material></ngt-mesh-lambert-material>
    </ngt-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtPhysicBody],
})
export class Box {
  readonly boxSize: NgtTriple = [4, 4, 4];

  readonly boxRef = this.physicBody.useBox<THREE.Mesh>(() => ({
    mass: 1,
    type: 'Kinematic',
    args: this.boxSize,
  }));

  constructor(private physicBody: NgtPhysicBody) {}

  onBoxBeforeRender({ clock }: NgtRenderState) {
    const t = clock.getElapsedTime();
    this.boxRef.api.position.set(Math.sin(t * 2) * 5, Math.cos(t * 2) * 5, 3);
    this.boxRef.api.rotation.set(Math.sin(t * 6), Math.cos(t * 6), 0);
  }
}

@Component({
  selector: 'sandbox-spheres',
  template: `
    <ngt-instanced-mesh [ref]="sphereRef.ref" [count]="number" castShadow receiveShadow>
      <ngt-sphere-geometry [args]="[1, 16, 16]">
        <ngt-instanced-buffer-attribute
          [attach]="['attributes', 'color']"
          [args]="[colors, 3]"
        ></ngt-instanced-buffer-attribute>
      </ngt-sphere-geometry>
      <ngt-mesh-phong-material vertexColors></ngt-mesh-phong-material>
    </ngt-instanced-mesh>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtPhysicBody],
})
export class InstancedSpheres implements OnInit {
  @Input() number = 100;

  colors!: Float32Array;

  readonly sphereRef = this.physicBody.useSphere<THREE.InstancedMesh>((index) => ({
    args: [1],
    mass: 1,
    position: [Math.random() - 0.5, Math.random() - 0.5, index * 2],
  }));

  constructor(private physicBody: NgtPhysicBody) {}

  ngOnInit() {
    this.colors = new Float32Array(this.number * 3);
    const color = new THREE.Color();

    for (let i = 0; i < this.number; i++) {
      color
        .set(niceColor[Math.floor(Math.random() * 5)])
        .convertSRGBToLinear()
        .toArray(this.colors, i * 3);
    }
  }
}

@NgModule({
  declarations: [KinematicCubeComponent, Scene, Plane, Box, InstancedSpheres],
  imports: [
    RouterModule.forChild([{ path: '', component: KinematicCubeComponent }]),
    NgtCanvasModule,
    NgtStatsModule,
    NgtHemisphereLightModule,
    NgtSpotLightModule,
    NgtVectorPipeModule,
    NgtPointLightModule,
    NgtPlaneGeometryModule,
    NgtMeshPhongMaterialModule,
    NgtBoxGeometryModule,
    NgtMeshLambertMaterialModule,
    NgtMeshModule,
    NgtInstancedMeshModule,
    NgtSphereGeometryModule,
    NgtInstancedBufferAttributeModule,
    NgtPhysicsModule,
    NgtVector2AttributeModule,
  ],
  exports: [InstancedSpheres, Plane],
})
export class KinematicCubeComponentModule {}
