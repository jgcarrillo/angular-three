// GENERATED
import {
    AnyFunction,
    makeVector3,
    NGT_INSTANCE_FACTORY,
    NgtInstance,
    NgtStore,
    provideInstanceFactory,
    NgtVector3,
} from '@angular-three/core';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    NgModule,
    NgZone,
    Optional,
    SkipSelf,
} from '@angular/core';
import * as THREE from 'three';

@Component({
    selector: 'ngt-vector3[vector3]',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideInstanceFactory<THREE.Vector3>(NgtVector3Attribute)],
})
export class NgtVector3Attribute extends NgtInstance<THREE.Vector3> {
    @Input() set vector3(vector3: NgtVector3) {
        this.zone.runOutsideAngular(() => {
            const instance = this.prepareInstance(makeVector3(vector3));
            this.set({ instance });
        });
    }

    constructor(
        zone: NgZone,
        store: NgtStore,
        @Optional()
        @SkipSelf()
        @Inject(NGT_INSTANCE_FACTORY)
        parentInstanceFactory: AnyFunction
    ) {
        super({ zone, store, parentInstanceFactory });
    }
}

@NgModule({
    declarations: [NgtVector3Attribute],
    exports: [NgtVector3Attribute],
})
export class NgtVector3AttributeModule {}
