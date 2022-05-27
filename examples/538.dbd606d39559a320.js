"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[538],{2701:(S,d,i)=>{i.r(d),i.d(d,{Pillar:()=>B,Plane:()=>Z,RaycastVehicleComponent:()=>Q,RaycastVehicleComponentModule:()=>Ze,World:()=>V});var o=i(2806),l=i(7017),u=i(280),f=i(8649),T=i(5936),x=i(1412),b=i(258),A=i(2610),O=i(6352),g=i(8427),L=i(6608),w=i(2761),e=i(1858),p=i(752),m=i(8187),F=i(4271),D=i(5959);const J=["ref",""],R=function(s){return[0,s,0]},K=function(){return["material","transparent"]},N=function(){return["material","color"]};function W(s,a){if(1&s&&(e.ynx(0),e.TgZ(1,"ngt-mesh",1)(2,"ngt-group",2),e._UZ(3,"ngt-mesh",3)(4,"ngt-mesh",3)(5,"ngt-mesh",3)(6,"ngt-mesh",3)(7,"ngt-mesh",3)(8,"ngt-mesh",3)(9,"ngt-mesh",3)(10,"ngt-mesh",3),e.TgZ(11,"ngt-mesh",3),e._UZ(12,"ngt-value",4)(13,"ngt-value",5),e.qZA(),e._UZ(14,"ngt-mesh",3)(15,"ngt-mesh",3)(16,"ngt-mesh",3)(17,"ngt-mesh",3)(18,"ngt-mesh",3)(19,"ngt-mesh",3)(20,"ngt-mesh",3),e.qZA()(),e.BQk()),2&s){const t=a.ngIf,n=e.oxw();e.xp6(1),e.Q6J("ref",n.ref)("position",n.position)("rotation",n.rotation),e.xp6(1),e.Q6J("position",e.VKq(39,R,-.6)),e.xp6(1),e.Q6J("material",t.materials["Black paint"])("geometry",t.nodes.chassis_1.geometry),e.xp6(1),e.Q6J("material",t.materials.Rubber)("geometry",t.nodes.chassis_2.geometry),e.xp6(1),e.Q6J("material",t.materials.Paint)("geometry",t.nodes.chassis_3.geometry),e.xp6(1),e.Q6J("material",t.materials.Underbody)("geometry",t.nodes.chassis_4.geometry),e.xp6(1),e.Q6J("material",t.materials.Chrom)("geometry",t.nodes.chassis_5.geometry),e.xp6(1),e.Q6J("material",t.materials["Interior (dark)"])("geometry",t.nodes.chassis_6.geometry),e.xp6(1),e.Q6J("material",t.materials["Interior (light)"])("geometry",t.nodes.chassis_7.geometry),e.xp6(1),e.Q6J("material",t.materials.Reflector)("geometry",t.nodes.chassis_8.geometry),e.xp6(1),e.Q6J("material",t.materials.Glass)("geometry",t.nodes.chassis_9.geometry),e.xp6(1),e.Q6J("attach",e.DdM(41,K))("value",!0),e.xp6(1),e.Q6J("attach",e.DdM(42,N)),e.xp6(1),e.Q6J("material",t.materials.Steel)("geometry",t.nodes.chassis_10.geometry),e.xp6(1),e.Q6J("material",t.materials["Black plastic"])("geometry",t.nodes.chassis_11.geometry),e.xp6(1),e.Q6J("material",t.materials.Headlight)("geometry",t.nodes.chassis_12.geometry),e.xp6(1),e.Q6J("material",t.materials["Reverse lights"])("geometry",t.nodes.chassis_13.geometry),e.xp6(1),e.Q6J("material",t.materials["Orange plastic"])("geometry",t.nodes.chassis_14.geometry),e.xp6(1),e.Q6J("material",t.materials["Tail lights"])("geometry",t.nodes.chassis_15.geometry),e.xp6(1),e.Q6J("material",t.materials["License Plate"])("geometry",t.nodes.chassis_16.geometry)}}const k=function(s){return[0,0,s]};function Y(s,a){if(1&s&&(e.ynx(0),e.TgZ(1,"ngt-group",1)(2,"ngt-group",2),e.ALo(3,"radian"),e._UZ(4,"ngt-mesh",3)(5,"ngt-mesh",3)(6,"ngt-mesh",3),e.qZA()(),e.BQk()),2&s){const t=a.ngIf,n=e.oxw();e.xp6(1),e.Q6J("ref",n.ref),e.xp6(1),e.Q6J("rotation",e.VKq(10,k,e.lcZ(3,8,n.leftSide?90:-90))),e.xp6(2),e.Q6J("material",t.materials.Rubber)("geometry",t.nodes.wheel_1.geometry),e.xp6(1),e.Q6J("material",t.materials.Steel)("geometry",t.nodes.wheel_2.geometry),e.xp6(1),e.Q6J("material",t.materials.Chrom)("geometry",t.nodes.wheel_3.geometry)}}function j(s,a){if(1&s&&e._UZ(0,"sandbox-wheel",3),2&s){const t=a.$implicit,n=a.even,c=e.oxw();e.Q6J("ref",t)("radius",c.radius)("leftSide",n)}}let H=(()=>{class s{constructor(t){this.gltfLoader=t,this.beetle$=this.gltfLoader.load("assets/Beetle.glb")}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(w.iY))},s.\u0275cmp=e.Xpm({type:s,selectors:[["sandbox-chassis","ref",""]],inputs:{ref:"ref",position:"position",rotation:"rotation"},attrs:J,decls:2,vars:3,consts:[[4,"ngIf"],[3,"ref","position","rotation"],[3,"position"],["castShadow","",3,"material","geometry"],[3,"attach","value"],["value","black",3,"attach"]],template:function(t,n){1&t&&(e.YNc(0,W,21,43,"ng-container",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,n.beetle$))},directives:[g.O5,p.o,m.U,F.m],pipes:[g.Ov],encapsulation:2,changeDetection:0}),s})(),X=(()=>{class s{constructor(t,n){this.gltfLoader=t,this.physicBody=n,this.radius=.7,this.leftSide=!1,this.wheel$=this.gltfLoader.load("assets/wheel.glb")}ngOnInit(){this.physicBody.useCompoundBody(()=>({collisionFilterGroup:0,mass:1,material:"wheel",shapes:[{args:[this.radius,this.radius,.5,16],rotation:[0,0,-Math.PI/2],type:"Cylinder"}],type:"Kinematic"}),!0,this.ref)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(w.iY),e.Y36(o.CN))},s.\u0275cmp=e.Xpm({type:s,selectors:[["sandbox-wheel","ref",""]],inputs:{ref:"ref",radius:"radius",leftSide:"leftSide"},features:[e._Bn([o.CN])],attrs:J,decls:2,vars:3,consts:[[4,"ngIf"],[3,"ref"],[3,"rotation"],[3,"material","geometry"]],template:function(t,n){1&t&&(e.YNc(0,Y,7,12,"ng-container",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,n.wheel$))},directives:[g.O5,m.U,p.o],pipes:[g.Ov,D.j],encapsulation:2,changeDetection:0}),s})();const v={" ":"brake",ArrowDown:"backward",ArrowLeft:"left",ArrowRight:"right",ArrowUp:"forward",r:"reset"},$=Object.keys(v),C=s=>$.includes(s);let E=(()=>{class s{constructor(t,n){this.physicBody=t,this.physicRaycastVehicle=n,this.back=-1.15,this.force=1500,this.front=1.3,this.height=-.04,this.maxBrake=50,this.steer=.5,this.width=1.2,this.radius=.7,this.backward=!1,this.brake=!1,this.forward=!1,this.left=!1,this.reset=!1,this.right=!1,this.wheelInfo={axleLocal:[-1,0,0],customSlidingRotationalSpeed:-30,dampingCompression:4.4,dampingRelaxation:10,directionLocal:[0,-1,0],frictionSlip:2,maxSuspensionForce:1e4,maxSuspensionTravel:.3,radius:this.radius,suspensionRestLength:.3,suspensionStiffness:30,useCustomSlidingRotationalSpeed:!0},this.wheelInfo1=Object.assign(Object.assign({},this.wheelInfo),{chassisConnectionPointLocal:[-this.width/2,this.height,this.front],isFrontWheel:!0}),this.wheelInfo2=Object.assign(Object.assign({},this.wheelInfo),{chassisConnectionPointLocal:[this.width/2,this.height,this.front],isFrontWheel:!0}),this.wheelInfo3=Object.assign(Object.assign({},this.wheelInfo),{chassisConnectionPointLocal:[-this.width/2,this.height,this.back],isFrontWheel:!1}),this.wheelInfo4=Object.assign(Object.assign({},this.wheelInfo),{chassisConnectionPointLocal:[this.width/2,this.height,this.back],isFrontWheel:!1}),this.wheels=[new l.Rl,new l.Rl,new l.Rl,new l.Rl],this.chassisRef=this.physicBody.useBox(()=>({allowSleep:!1,angularVelocity:this.angularVelocity,args:[1.7,1,4],mass:500,onCollide:c=>console.log("bonk",c.body.userData),position:this.position,rotation:this.rotation})),this.raycastVehicleRef=this.physicRaycastVehicle.useRaycastVehicle(()=>({chassisBody:this.chassisRef.ref,wheelInfos:[this.wheelInfo1,this.wheelInfo2,this.wheelInfo3,this.wheelInfo4],wheels:this.wheels}))}onKeyUp(t){!C(t.key)||(this[v[t.key]]=!1)}onKeyDown(t){!C(t.key)||(this[v[t.key]]=!0)}onBeforeRender(){const{forward:t,backward:n,force:c,chassisRef:h,raycastVehicleRef:y,left:I,right:U,steer:Be,brake:Ie,maxBrake:Ue,position:_,angularVelocity:M,rotation:P,reset:_e}=this;if(y.ref.value&&h.ref.value&&this.wheels.every(r=>r.value)){for(let r=2;r<4;r++)y.api.applyEngineForce(t||n?c*(t&&!n?-1:1):0,2);for(let r=0;r<2;r++)y.api.setSteeringValue(I||U?Be*(I&&!U?1:-1):0,r);for(let r=2;r<4;r++)y.api.setBrake(Ie?Ue:0,r);_e&&_&&P&&M&&(h.api.position.set(..._),h.api.velocity.set(0,0,0),h.api.angularVelocity.set(...M),h.api.rotation.set(...P))}}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(o.CN),e.Y36(o.oP))},s.\u0275cmp=e.Xpm({type:s,selectors:[["sandbox-vehicle"]],hostBindings:function(t,n){1&t&&e.NdJ("keyup",function(h){return n.onKeyUp(h)},!1,e.Jf7)("keydown",function(h){return n.onKeyDown(h)},!1,e.Jf7)},inputs:{position:"position",rotation:"rotation",angularVelocity:"angularVelocity"},features:[e._Bn([o.CN,o.oP])],decls:3,vars:6,consts:[[3,"ref","position","beforeRender"],[3,"ref"],[3,"ref","radius","leftSide",4,"ngFor","ngForOf"],[3,"ref","radius","leftSide"]],template:function(t,n){1&t&&(e.TgZ(0,"ngt-group",0),e.NdJ("beforeRender",function(){return n.onBeforeRender()}),e._UZ(1,"sandbox-chassis",1),e.YNc(2,j,1,3,"sandbox-wheel",2),e.qZA()),2&t&&(e.Q6J("ref",n.raycastVehicleRef.ref)("position",e.VKq(4,R,-.4)),e.xp6(1),e.Q6J("ref",n.chassisRef.ref),e.xp6(1),e.Q6J("ngForOf",n.wheels))},directives:[m.U,H,g.sg,X],encapsulation:2,changeDetection:0}),s})();var z=i(5632),G=i(4657),q=i(4446),ee=i(5520),te=i(475),se=i(1556),ne=i(868),ae=i(9445),ie=i(5413),oe=i(8780),re=i(4650),le=i(4412);function ce(s,a){1&s&&e._UZ(0,"sandbox-world")}function he(s,a){1&s&&(e.TgZ(0,"ngt-cannon-debug"),e._UZ(1,"sandbox-world"),e.qZA())}const ue=function(){return[0,5,15]},ge=function(s){return{fov:50,position:s}},fe=function(){return["#171720",10,50]},de=function(){return[10,10,10]},pe=function(){return{contactEquationRelaxation:4,friction:.001}},me=function(s){return[s,0,0]},ye=function(){return{id:"floor"}},ve=function(){return[0,2,0]},xe=function(s){return[0,s,0]},be=function(){return[0,.5,0]},we=function(s,a){return[s,2.5,a]},De=function(){return{id:"pillar-1"}},Je=function(s){return[0,2.5,s]},Re=function(){return{id:"pillar-2"}},Ce=function(s){return[5,2.5,s]},Qe=function(){return{id:"pillar-3"}},Ve=function(){return[100,100]};let Q=(()=>{class s{constructor(){this.isDebugDisabled=!0}onKeyDown(t){"?"===t.key&&(this.isDebugDisabled=!this.isDebugDisabled)}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["sandbox-raycast-vehicle"]],hostBindings:function(t,n){1&t&&e.NdJ("keyup",function(h){return n.onKeyDown(h)},!1,e.Jf7)},decls:17,vars:12,consts:[["initialLog","","shadows","",3,"camera"],["attach","fog",3,"fog"],["attach","background","color","#171720"],["intensity","0.1"],["castShadow","","angle","0.5","intensity","1","penumbra","1",3,"position"],["broadphase","SAP","allowSleep","",3,"defaultContactMaterial"],[4,"ngIf","ngIfElse"],["debugEnabled",""],["preset","night"],[1,"instruction"]],template:function(t,n){if(1&t&&(e.TgZ(0,"ngt-canvas",0),e._UZ(1,"ngt-fog",1)(2,"ngt-color",2)(3,"ngt-ambient-light",3)(4,"ngt-spot-light",4),e.TgZ(5,"ngt-physics",5),e.YNc(6,ce,1,0,"sandbox-world",6),e.YNc(7,he,2,0,"ng-template",null,7,e.W1O),e.qZA(),e._UZ(9,"ngt-soba-environment",8),e.qZA(),e.TgZ(10,"div",9)(11,"pre"),e._uU(12,"* \u2191\u2190\u2193\u2192 to drive, space to brake\n        "),e._UZ(13,"br"),e._uU(14,"r to reset\n        "),e._UZ(15,"br"),e._uU(16,"? to debug\n      "),e.qZA()()),2&t){const c=e.MAs(8);e.Q6J("camera",e.VKq(7,ge,e.DdM(6,ue))),e.xp6(1),e.Q6J("fog",e.DdM(9,fe)),e.xp6(3),e.Q6J("position",e.DdM(10,de)),e.xp6(1),e.Q6J("defaultContactMaterial",e.DdM(11,pe)),e.xp6(1),e.Q6J("ngIf",n.isDebugDisabled)("ngIfElse",c)}},directives:function(){return[z.B3,G.m,q.r,ee.w,te.K,se.r,g.O5,V,ne.w,ae.$5]},styles:[".instruction[_ngcontent-%COMP%]{color:#fff;font-size:1.2em;left:50px;position:absolute;top:20px}"],changeDetection:0}),s})(),V=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["sandbox-world"]],decls:7,vars:32,consts:[[3,"rotation","userData"],[3,"position","rotation","angularVelocity"],[3,"position","userData"]],template:function(t,n){1&t&&(e._UZ(0,"sandbox-plane",0),e.ALo(1,"radian"),e._UZ(2,"sandbox-vehicle",1),e.ALo(3,"radian"),e._UZ(4,"sandbox-pillar",2)(5,"sandbox-pillar",2)(6,"sandbox-pillar",2)),2&t&&(e.Q6J("rotation",e.VKq(15,me,e.lcZ(1,11,-90)))("userData",e.DdM(17,ye)),e.xp6(2),e.Q6J("position",e.DdM(18,ve))("rotation",e.VKq(19,xe,e.lcZ(3,13,-45)))("angularVelocity",e.DdM(21,be)),e.xp6(2),e.Q6J("position",e.WLB(22,we,-5,-5))("userData",e.DdM(25,De)),e.xp6(1),e.Q6J("position",e.VKq(26,Je,-5))("userData",e.DdM(28,Re)),e.xp6(1),e.Q6J("position",e.VKq(29,Ce,-5))("userData",e.DdM(31,Qe)))},directives:function(){return[Z,E,B]},pipes:function(){return[D.j]},encapsulation:2,changeDetection:0}),s})(),Z=(()=>{class s{constructor(t){this.physicBody=t,this.userData={},this.planeRef=this.physicBody.usePlane(()=>({material:"ground",rotation:this.rotation,type:"Static",userData:this.userData,args:[100,100]}))}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(o.CN))},s.\u0275cmp=e.Xpm({type:s,selectors:[["sandbox-plane"]],inputs:{rotation:"rotation",userData:"userData"},features:[e._Bn([o.CN])],decls:4,vars:5,consts:[[3,"ref","rotation","userData"],["receiveShadow",""],[3,"args"],["color","#303030"]],template:function(t,n){1&t&&(e.TgZ(0,"ngt-group",0)(1,"ngt-mesh",1),e._UZ(2,"ngt-plane-geometry",2)(3,"ngt-mesh-standard-material",3),e.qZA()()),2&t&&(e.Q6J("ref",n.planeRef.ref)("rotation",n.rotation)("userData",n.userData),e.xp6(2),e.Q6J("args",e.DdM(4,Ve)))},directives:[m.U,p.o,ie.U,oe.h],encapsulation:2,changeDetection:0}),s})(),B=(()=>{class s{constructor(t){this.physicBody=t,this.userData={},this.args=[.7,.7,5,16],this.pillarRef=this.physicBody.useCylinder(()=>({args:this.args,mass:10,position:this.position,userData:this.userData}))}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(o.CN))},s.\u0275cmp=e.Xpm({type:s,selectors:[["sandbox-pillar"]],inputs:{position:"position",userData:"userData"},features:[e._Bn([o.CN])],decls:3,vars:4,consts:[[3,"ref","position","userData"],[3,"args"]],template:function(t,n){1&t&&(e.TgZ(0,"ngt-mesh",0),e._UZ(1,"ngt-cylinder-geometry",1)(2,"ngt-mesh-normal-material"),e.qZA()),2&t&&(e.Q6J("ref",n.pillarRef.ref)("position",n.position)("userData",n.userData),e.xp6(1),e.Q6J("args",n.args))},directives:[p.o,re.o,le.R],encapsulation:2,changeDetection:0}),s})(),Ze=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[L.Bz.forChild([{path:"",component:Q}]),g.ez,l.DX,u.vc,u.bg,x.EQ,x.Hk,o.M1,o.B$,T.I,A.M$,f.cM,b.To,l.kZ,f.eP,b.F8,O.wj,u.pk]]}),s})()},3080:(S,d,i)=>{function o(l,u,f){return u in l?Object.defineProperty(l,u,{value:f,enumerable:!0,configurable:!0,writable:!0}):l[u]=f,l}i.d(d,{Z:()=>o})}}]);