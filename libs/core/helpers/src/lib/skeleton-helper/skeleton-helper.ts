// GENERATED
import { AnyConstructor, NgtCommonObjectHelper, provideCommonObjectHelperRef, Tail } from '@angular-three/core';
import { Directive, Input, NgModule } from '@angular/core';
import * as THREE from 'three';

@Directive({
  selector: '[ngtSkeletonHelper]',
  exportAs: 'ngtSkeletonHelper',
  providers: [provideCommonObjectHelperRef(NgtSkeletonHelper)],
})
export class NgtSkeletonHelper extends NgtCommonObjectHelper<THREE.SkeletonHelper> {
  static ngAcceptInputType_ngtSkeletonHelper: Tail<ConstructorParameters<typeof THREE.SkeletonHelper>> | '' | undefined;

  @Input() set ngtSkeletonHelper(v: Tail<ConstructorParameters<typeof THREE.SkeletonHelper>> | '') {
    if (v) {
      this.instanceArgs = v;
    }
  }

  override get objectHelperType(): AnyConstructor<THREE.SkeletonHelper> {
    return THREE.SkeletonHelper;
  }
}

@NgModule({
  declarations: [NgtSkeletonHelper],
  exports: [NgtSkeletonHelper],
})
export class NgtSkeletonHelperModule {}
