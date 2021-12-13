// GENERATED
import {
  Controller,
  createControllerProviderFactory,
} from '@angular-three/core';
import { Directive, Input, NgModule, NgZone, OnInit } from '@angular/core';
import * as THREE from 'three';
import { BodyProps } from '../models/body';
import { GetByIndex } from '../models/types';
import { NgtPhysicBodyStore } from './body.store';

@Directive({
  selector: `
    [ngtPhysicBox],
    [ngtPhysicPlane],
    [ngtPhysicCylinder],
    [ngtPhysicHeightfield],
    [ngtPhysicParticle],
    [ngtPhysicSphere],
    [ngtPhysicTrimesh],
    [ngtPhysicConvexPolyhedron],
    [ngtPhysicCompound]
  `,
  exportAs: 'ngtPhysicBody',
  providers: [NgtPhysicBodyStore],
})
export class NgtPhysicBodyController extends Controller implements OnInit {
  @Input() set getPhysicProps(fn: GetByIndex<BodyProps> | undefined) {
    this.physicBodyStore.set({ getPhysicProps: fn });
  }

  constructor(private physicBodyStore: NgtPhysicBodyStore, ngZone: NgZone) {
    super(ngZone);
  }

  ngOnInit() {
    super.ngOnInit();
    this.ngZone.runOutsideAngular(() => {
      this.physicBodyStore.init();
    });
  }

  get object3d(): THREE.Object3D {
    return this.physicBodyStore.get('object3d') as THREE.Object3D;
  }

  get api() {
    return this.physicBodyStore.api;
  }

  get controller(): Controller | undefined {
    return undefined;
  }

  get props(): string[] {
    return [];
  }
}

@NgModule({
  declarations: [NgtPhysicBodyController],
  exports: [NgtPhysicBodyController],
})
export class NgtPhysicBodyControllerModule {}

export const [
  NGT_PHYSIC_BODY_WATCHED_CONTROLLER,
  NGT_PHYSIC_BODY_CONTROLLER_PROVIDER,
] = createControllerProviderFactory({
  watchedControllerTokenName: 'Watched PhysicBodyController',
  controller: NgtPhysicBodyController,
});
