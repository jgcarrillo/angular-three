"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[472],{8472:(_,m,s)=>{s.r(m),s.d(m,{AutoplayVideoDirective:()=>g,HomeComponent:()=>y,HomeComponentModule:()=>I});var t=s(1858),c=s(8427);let d;try{d="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(e){d=!1}let v=(()=>{class e{constructor(o){this._platformId=o,this.isBrowser=this._platformId?(0,c.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!d)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(t.Lbi))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),x=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({}),e})();var h=s(6608),E=s(2022);function A(e,n){if(1&e&&t._UZ(0,"source",20),2&e){const o=n.$implicit,r=t.oxw().$implicit;t.Q6J("src",r.asset+"."+o,t.LSH)("type","video/"+o)}}const S=function(){return["webm","mp4"]};function T(e,n){if(1&e&&(t.TgZ(0,"li",9)(1,"div",10)(2,"video",11),t.YNc(3,A,1,2,"source",12),t._UZ(4,"img",13),t.qZA(),t.TgZ(5,"div",14)(6,"div",15)(7,"h3",16)(8,"a",17),t._uU(9),t.qZA()(),t.TgZ(10,"p",18),t._uU(11),t.qZA(),t.TgZ(12,"a",19),t._uU(13," Source "),t.qZA()()()()()),2&e){const o=n.$implicit,r=t.oxw();t.ekj("hidden",o.hidden),t.xp6(2),t.Q6J("poster",r.platform.IOS?o.asset+".gif":"",t.LSH),t.xp6(1),t.Q6J("ngForOf",t.DdM(10,S)),t.xp6(1),t.Q6J("src",o.asset+".gif",t.LSH)("alt",o.description),t.xp6(4),t.Q6J("routerLink",o.link),t.xp6(1),t.hij(" ",o.title," "),t.xp6(2),t.hij(" ",o.description," "),t.xp6(1),t.Q6J("href",o.source,t.LSH)}}let g=(()=>{class e{constructor(o){this.videoElementRef=o}onMouseOver(){this.videoElementRef.nativeElement.play().catch(()=>{})}onMouseOut(){this.videoElementRef.nativeElement.pause(),this.videoElementRef.nativeElement.currentTime=0}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.SBq))},e.\u0275dir=t.lG2({type:e,selectors:[["video","sandboxAutoplay",""]],hostBindings:function(o,r){1&o&&t.NdJ("mouseover",function(){return r.onMouseOver()})("mouseout",function(){return r.onMouseOut()})}}),e})(),y=(()=>{class e{constructor(o){this.platform=o,this.examples=E._.filter(r=>!!r.data).map(r=>r.data)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["sandbox-home"]],decls:12,vars:1,consts:[[1,"absolute","right-4","font-xs","italic"],[1,"header-background","bg-white"],[1,"mx-auto","py-12","px-4","max-w-7xl","sm:px-6","lg:px-8","lg:py-24"],[1,"space-y-12"],[1,"space-y-5","sm:space-y-4","md:max-w-xl","lg:max-w-3xl","xl:max-w-none"],[1,"text-3xl","font-extrabold","text-gray-800","tracking-tight","sm:text-4xl"],[1,"text-xl","text-gray-600"],["role","list",1,"space-y-4","sm:grid","sm:grid-cols-2","sm:gap-6","sm:space-y-0","lg:grid-cols-3","lg:gap-8"],["class","bg-gray-50 rounded-xl overflow-hidden xl:text-left",3,"hidden",4,"ngFor","ngForOf"],[1,"bg-gray-50","rounded-xl","overflow-hidden","xl:text-left"],[1,"space-y-6","xl:space-y-10","relative"],["sandboxAutoplay","","muted","","playsinline","",1,"w-full","h-full","max-h-48","object-cover","cursor-pointer",3,"poster"],[3,"src","type",4,"ngFor","ngForOf"],[1,"w-full","h-full","max-h-48","object-cover","cursor-pointer",3,"src","alt"],[1,"p-6","pt-0","space-y-2","xl:flex","xl:items-center","xl:justify-between"],[1,"font-medium","text-lg","leading-6","space-y-3"],[1,"text-gray-500","hover:underline"],[3,"routerLink"],[1,"text-gray-400"],["target","_blank","rel","noreferrer noopener",1,"block","text-blue-400","hover:text-blue-500",3,"href"],[3,"src","type"]],template:function(o,r){1&o&&(t.TgZ(0,"small",0),t._uU(1," * Interact (click anywhere) on the page to enable example play on hover "),t.qZA(),t.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h2",5),t._uU(7,"Angular Three Examples"),t.qZA(),t.TgZ(8,"p",6),t._uU(9,"Here are some example of things you can do with AngularThree!"),t.qZA()(),t.TgZ(10,"ul",7),t.YNc(11,T,14,11,"li",8),t.qZA()()()()),2&o&&(t.xp6(11),t.Q6J("ngForOf",r.examples))},directives:[c.sg,g,h.yS],styles:[".header-background[_ngcontent-%COMP%]{background-image:url(header-background.76ade9f5d14b7b99.svg);background-size:1200px 600px;background-repeat:repeat}"],changeDetection:0}),e})(),I=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,h.Bz.forChild([{path:"",component:y}]),x]]}),e})()}}]);