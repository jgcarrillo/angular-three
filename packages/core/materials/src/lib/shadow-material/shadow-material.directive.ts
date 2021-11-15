// GENERATED
import { NgtMaterial } from '@angular-three/core';
import { Directive, Input } from '@angular/core';
import * as THREE from 'three';

@Directive({
  selector: 'ngt-shadow-material',
  exportAs: 'ngtShadowMaterial',
  providers: [
    {
      provide: NgtMaterial,
      useExisting: NgtShadowMaterial,
    },
  ],
})
export class NgtShadowMaterial extends NgtMaterial<
  THREE.ShadowMaterial,
  THREE.ShadowMaterialParameters
> {
  static ngAcceptInputType_parameters:
    | THREE.ShadowMaterialParameters
    | undefined;

  materialType = THREE.ShadowMaterial;
}
