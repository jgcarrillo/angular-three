"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[776],{2776:(Y,i,e)=>{e.r(i),e.d(i,{Bust:()=>m,LevelOfDetailComponent:()=>d,LevelOfDetailComponentModule:()=>Q,Scene:()=>u});var g=e(7017),M=e(280),l=e(1412),E=e(2610),D=e(3845),r=e(2761),h=e(1348),f=e(6352),_=e(8427),O=e(6608),t=e(1858),v=e(5632),P=e(8123),b=e(5505),L=e(3704),C=e(475),T=e(9445),c=e(5703),B=e(752),U=e(4271);const A=function(){return[1,2]},I=function(){return[0,0,40]},K=function(n){return{position:n}};function W(n,s){if(1&n&&t._UZ(0,"sandbox-bust",5),2&n){const o=s.$implicit;t.Q6J("position",o.position)("rotation",o.rotation)}}const R=function(){return[0,0,0]},y=function(){return[50,50,50]},x=function(){return["material","envMapIntensity"]};function S(n,s){if(1&n&&(t.TgZ(0,"ngt-mesh",3),t._UZ(1,"ngt-value",4),t.qZA()),2&n){const o=s.$implicit;t.Q6J("geometry",o.nodes.Mesh_0001.geometry)("material",o.materials.default),t.xp6(1),t.Q6J("attach",t.DdM(4,x))("value",.25)}}function Z(n,s){if(1&n&&(t.YNc(0,S,2,5,"ngt-mesh",2),t.ALo(1,"async")),2&n){const o=t.oxw();t.Q6J("ngForOf",t.lcZ(1,1,o.levels$))}}const J=function(){return[15,25,35,100]},F=[...Array(800)].map(()=>({position:[40-80*Math.random(),40-80*Math.random(),40-80*Math.random()],rotation:[Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2]}));let d=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["sandbox-level-of-detail"]],decls:3,vars:6,consts:[["shadows","","frameloop","demand",3,"dpr","camera","created"]],template:function(o,a){1&o&&(t.TgZ(0,"ngt-canvas",0),t.NdJ("created",function(p){return p.gl.shadowMap.autoUpdate=!1,p.gl.shadowMap.needsUpdate=!0}),t._UZ(1,"sandbox-scene"),t.qZA(),t._UZ(2,"ngt-soba-loader")),2&o&&t.Q6J("dpr",t.DdM(2,A))("camera",t.VKq(4,K,t.DdM(3,I)))},directives:function(){return[v.B3,u,P.i]},encapsulation:2,changeDetection:0}),n})(),u=(()=>{class n{constructor(){this.positions=F}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["sandbox-scene"]],decls:5,vars:5,consts:[[3,"position","rotation",4,"ngFor","ngForOf"],["zoomSpeed","0.075"],["intensity","0.5",3,"position"],["intensity","2.5","castShadow","",3,"position"],["preset","city"],[3,"position","rotation"]],template:function(o,a){1&o&&(t.YNc(0,W,1,2,"sandbox-bust",0),t._UZ(1,"ngt-soba-orbit-controls",1)(2,"ngt-point-light",2)(3,"ngt-spot-light",3)(4,"ngt-soba-environment",4)),2&o&&(t.Q6J("ngForOf",a.positions),t.xp6(2),t.Q6J("position",t.DdM(3,R)),t.xp6(1),t.Q6J("position",t.DdM(4,y)))},directives:function(){return[_.sg,m,b.S,L.H,C.K,T.$5]},encapsulation:2,changeDetection:0}),n})(),m=(()=>{class n{constructor(o){this.gltfLoader=o,this.levels$=this.gltfLoader.load(["assets/bust-1-d.glb","assets/bust-2-d.glb","assets/bust-3-d.glb","assets/bust-4-d.glb"])}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r.iY))},n.\u0275cmp=t.Xpm({type:n,selectors:[["sandbox-bust"]],inputs:{position:"position",rotation:"rotation"},decls:2,vars:4,consts:[[3,"distances","position","rotation"],["ngt-soba-detailed-content",""],["receiveShadow","","castShadow","",3,"geometry","material",4,"ngFor","ngForOf"],["receiveShadow","","castShadow","",3,"geometry","material"],[3,"attach","value"]],template:function(o,a){1&o&&(t.TgZ(0,"ngt-soba-detailed",0),t.YNc(1,Z,2,3,"ng-template",1),t.qZA()),2&o&&t.Q6J("distances",t.DdM(3,J))("position",a.position)("rotation",a.rotation)},directives:[c.E7,c.Wb,_.sg,B.o,U.m],pipes:[_.Ov],encapsulation:2,changeDetection:0}),n})(),Q=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[_.ez,O.Bz.forChild([{path:"",component:d}]),h.eL,E.M$,M.pk,g.DX,r.Ts,D.Li,l.GK,l.Hk,f.wj]]}),n})()}}]);