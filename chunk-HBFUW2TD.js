import"./chunk-V5RSJHXJ.js";import"./chunk-HEWDLXJU.js";import{A as K,E as M,J,K as X,L as tt}from"./chunk-DENQVAXS.js";import{m as et,n as ot,v as at}from"./chunk-Z6CEOD7T.js";import{Ab as g,Bb as u,Fb as j,Ib as b,Kb as S,Lb as z,Mb as H,Ob as Q,Pb as W,Qb as q,Rb as Z,Sb as I,Wa as r,Xa as d,Zb as m,_ as R,_b as _,aa as k,ac as $,ha as h,ia as E,jb as V,lc as Y,nb as N,ob as T,oc as f,pa as A,pb as i,qa as F,rb as P,sb as U,ua as O,vb as x,xa as D,ya as L,zb as s}from"./chunk-26DMSOO7.js";import{a as B,b as G}from"./chunk-ZQQCSEKW.js";var lt=["button"],rt=["*"];function st(n,o){if(n&1&&u(0,"mat-pseudo-checkbox",3),n&2){let p=S();i("disabled",p.disabled)}}function ct(n,o){if(n&1&&u(0,"mat-pseudo-checkbox",3),n&2){let p=S();i("disabled",p.disabled)}}var dt=new k("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:gt});function gt(){return{hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1}}var ut=new k("MatButtonToggleGroup");var bt=0,C=class{constructor(o,p){this.source=o,this.value=p}};var w=(()=>{let o=class o{get buttonId(){return`${this.id}-button`}get tabIndex(){return this._tabIndex}set tabIndex(e){this._tabIndex=e,this._markForCheck()}get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}constructor(e,a,t,l,c,v){this._changeDetectorRef=a,this._elementRef=t,this._focusMonitor=l,this._checked=!1,this.ariaLabelledby=null,this._disabled=!1,this.change=new L;let y=Number(c);this.tabIndex=y||y===0?y:null,this.buttonToggleGroup=e,this.appearance=v&&v.appearance?v.appearance:"standard"}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||`mat-button-toggle-${bt++}`,e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(t=>t.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new C(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}};o.\u0275fac=function(a){return new(a||o)(d(ut,8),d(Y),d(D),d(K),O("tabindex"),d(dt,8))},o.\u0275cmp=h({type:o,selectors:[["mat-button-toggle"]],viewQuery:function(a,t){if(a&1&&Q(lt,5),a&2){let l;W(l=q())&&(t._buttonElement=l.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:12,hostBindings:function(a,t){a&1&&b("focus",function(){return t.focus()}),a&2&&(T("aria-label",null)("aria-labelledby",null)("id",t.id)("name",null),P("mat-button-toggle-standalone",!t.buttonToggleGroup)("mat-button-toggle-checked",t.checked)("mat-button-toggle-disabled",t.disabled)("mat-button-toggle-appearance-standard",t.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",f],appearance:"appearance",checked:[2,"checked","checked",f],disabled:[2,"disabled","disabled",f]},outputs:{change:"change"},exportAs:["matButtonToggle"],standalone:!0,features:[V,m],ngContentSelectors:rt,decls:8,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-label-content"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(a,t){if(a&1){let l=j();z(),s(0,"button",1,0),b("click",function(){return A(l),F(t._onButtonClick())}),s(2,"span",2),N(3,st,1,1,"mat-pseudo-checkbox",3)(4,ct,1,1,"mat-pseudo-checkbox",3),H(5),g()(),u(6,"span",4)(7,"span",5)}if(a&2){let l=Z(1);i("id",t.buttonId)("disabled",t.disabled||null),T("role",t.isSingleSelector()?"radio":"button")("tabindex",t.disabled?-1:t.tabIndex)("aria-pressed",t.isSingleSelector()?null:t.checked)("aria-checked",t.isSingleSelector()?t.checked:null)("name",t._getButtonName())("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby),r(3),x(t.buttonToggleGroup&&t.checked&&!t.buttonToggleGroup.multiple&&!t.buttonToggleGroup.hideSingleSelectionIndicator?3:-1),r(),x(t.buttonToggleGroup&&t.checked&&t.buttonToggleGroup.multiple&&!t.buttonToggleGroup.hideMultipleSelectionIndicator?4:-1),r(3),i("matRippleTrigger",l)("matRippleDisabled",t.disableRipple||t.disabled)}},dependencies:[J,tt],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape);border:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-standard-button-toggle-selected-state-text-color )}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-legacy-button-toggle-selected-state-text-color )}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-legacy-button-toggle-disabled-state-text-color )}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color);background-color:var(--mat-standard-button-toggle-background-color);font-family:var(--mat-standard-button-toggle-label-text-font);font-size:var(--mat-standard-button-toggle-label-text-size);line-height:var(--mat-standard-button-toggle-label-text-line-height);font-weight:var(--mat-standard-button-toggle-label-text-weight);letter-spacing:var(--mat-standard-button-toggle-label-text-tracking)}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color);background-color:var(--mat-standard-button-toggle-selected-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-standard-button-toggle-disabled-selected-state-text-color )}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color)}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity)}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity)}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape);border-bottom-right-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape);border-bottom-left-radius:var(--mat-standard-button-toggle-shape)}"],encapsulation:2,changeDetection:0});let n=o;return n})(),nt=(()=>{let o=class o{};o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=E({type:o}),o.\u0275inj=R({imports:[M,X,w,M]});let n=o;return n})();var ht=()=>[3],mt=(n,o)=>[n,o],_t=()=>["https://demotiles.maplibre.org/tiles/{z}/{x}/{y}.pbf"],ft=()=>({"line-color":"blue"}),Pt=(()=>{let o=class o{constructor(){this.layouts={countries:{visibility:"none"},names:{visibility:"none","text-field":"{name:latin}","text-size":30}}}toggleLayer(e){this.layouts[e.value]=G(B({},this.layouts[e.value]),{visibility:this.layouts[e.value].visibility==="visible"?"none":"visible"})}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=h({type:o,selectors:[["showcase-demo"]],standalone:!0,features:[m],decls:12,vars:17,consts:[[3,"zoom","center","preserveDrawingBuffer"],["id","countries",3,"tiles"],["id","everything","url","https://api.maptiler.com/tiles/v3/tiles.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL"],["id","countries-layer","type","line","source","countries","sourceLayer","countries",3,"layout","paint"],["id","names","type","symbol","source","everything","sourceLayer","place",3,"layout"],[1,"menu"],["value","names",3,"change","checked"],["data-cy","countries-toggle-button"],["value","countries",3,"change","checked"],["data-cy","countries-toggle-borders"]],template:function(a,t){a&1&&(s(0,"mgl-map",0),u(1,"mgl-vector-source",1)(2,"mgl-vector-source",2)(3,"mgl-layer",3)(4,"mgl-layer",4),g(),s(5,"div",5)(6,"mat-button-toggle",6),b("change",function(c){return t.toggleLayer(c)}),s(7,"span",7),I(8,"countries names"),g()(),s(9,"mat-button-toggle",8),b("change",function(c){return t.toggleLayer(c)}),s(10,"span",9),I(11,"countries border"),g()()()),a&2&&(U("https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL"),i("zoom",_(11,ht))("center",$(12,mt,-71.97722138410576,-13.517379300798098))("preserveDrawingBuffer",!0),r(),i("tiles",_(15,_t)),r(2),i("layout",t.layouts.countries)("paint",_(16,ft)),r(),i("layout",t.layouts.names),r(2),i("checked",!0),r(3),i("checked",!0))},dependencies:[ot,at,et,nt,w],styles:[`[_nghost-%COMP%]{display:flex;flex:1}mgl-map[_ngcontent-%COMP%]{height:100%;width:100%}
/*# sourceMappingURL=examples-UPBTEGPO.css.map */`,`.menu[_ngcontent-%COMP%]{position:absolute;padding:8px}
/*# sourceMappingURL=toggle-layers.component-BENKCT2Y.css.map */`]});let n=o;return n})();export{Pt as ToggleLayersComponent};
//# sourceMappingURL=chunk-HBFUW2TD.js.map
