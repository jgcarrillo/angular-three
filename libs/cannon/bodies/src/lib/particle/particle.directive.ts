// GENERATED
import { ParticleProps, GetByIndex } from '@angular-three/cannon';
import { Directive, Inject, NgModule } from '@angular/core';
import {
    NGT_CANNON_BODY_ARGS_FN,
    NGT_CANNON_BODY_CONTROLLER_PROVIDER,
    NGT_CANNON_BODY_TYPE,
    NGT_CANNON_BODY_WATCHED_CONTROLLER,
    NgtCannonBodyController,
    NgtCannonBodyControllerModule,
} from '../body.controller';

@Directive({
    selector: '[ngtPhysicParticle]',
    exportAs: 'ngtPhysicParticle',
    providers: [
        NGT_CANNON_BODY_CONTROLLER_PROVIDER,
        { provide: NGT_CANNON_BODY_TYPE, useValue: 'Particle' },
        { provide: NGT_CANNON_BODY_ARGS_FN, useValue: () => [] },
    ],
})
export class NgtPhysicParticle {
    static ngAcceptInputType_getPhysicProps:
        | GetByIndex<ParticleProps>
        | undefined;

    constructor(
        @Inject(NGT_CANNON_BODY_WATCHED_CONTROLLER)
        private cannonBodyController: NgtCannonBodyController
    ) {}

    get api() {
        return this.cannonBodyController.api;
    }
}

@NgModule({
    declarations: [NgtPhysicParticle],
    exports: [NgtPhysicParticle, NgtCannonBodyControllerModule],
})
export class NgtPhysicParticleModule {}
