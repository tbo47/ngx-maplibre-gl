import{a as F,c as B,e as H,g as wt,h as Et,k as Ot}from"./chunk-G4RW4JTX.js";import{C as T,D as bt,a as R,e as yt,g as D,h as j,i as mt,l as I,m as f}from"./chunk-DENQVAXS.js";import{A as Q,Ea as lt,U as tt,V as et,Xa as O,Z as m,Za as at,_ as it,_a as ct,a as w,aa as st,ca as d,cb as S,da as Y,eb as dt,f as y,fb as _t,gb as ft,hc as ut,ia as ot,ja as X,jb as pt,ma as nt,oa as rt,oc as k,qc as gt,va as ht,vc as b,xa as x,xc as vt,ya as E,z as J}from"./chunk-26DMSOO7.js";import{a as P,b as U}from"./chunk-ZQQCSEKW.js";var St=yt(),V=class{constructor(t,s){this._viewportRuler=t,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=s}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=f(-this._previousScrollPosition.left),t.style.top=f(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,s=this._document.body,e=t.style,i=s.style,o=e.scrollBehavior||"",r=i.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),St&&(e.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),St&&(e.scrollBehavior=o,i.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let s=this._document.body,e=this._viewportRuler.getViewportSize();return s.scrollHeight>e.height||s.scrollWidth>e.width}};var N=class{constructor(t,s,e,i){this._scrollDispatcher=t,this._ngZone=s,this._viewportRuler=e,this._config=i,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(Q(s=>!s||!this._overlayRef.overlayElement.contains(s.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let s=this._viewportRuler.getViewportScrollPosition().top;Math.abs(s-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},L=class{enable(){}disable(){}attach(){}};function W(n,t){return t.some(s=>{let e=n.bottom<s.top,i=n.top>s.bottom,o=n.right<s.left,r=n.left>s.right;return e||i||o||r})}function kt(n,t){return t.some(s=>{let e=n.top<s.top,i=n.bottom>s.bottom,o=n.left<s.left,r=n.right>s.right;return e||i||o||r})}var z=class{constructor(t,s,e,i){this._scrollDispatcher=t,this._viewportRuler=s,this._ngZone=e,this._config=i,this._scrollSubscription=null}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let s=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:i}=this._viewportRuler.getViewportSize();W(s,[{width:e,height:i,bottom:i,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Yt=(()=>{let t=class t{constructor(e,i,o,r){this._scrollDispatcher=e,this._viewportRuler=i,this._ngZone=o,this.noop=()=>new L,this.close=h=>new N(this._scrollDispatcher,this._ngZone,this._viewportRuler,h),this.block=()=>new V(this._viewportRuler,this._document),this.reposition=h=>new z(this._scrollDispatcher,this._viewportRuler,this._ngZone,h),this._document=r}};t.\u0275fac=function(i){return new(i||t)(d(F),d(B),d(S),d(b))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),M=class{constructor(t){if(this.scrollStrategy=new L,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,t){let s=Object.keys(t);for(let e of s)t[e]!==void 0&&(this[e]=t[e])}}};var Z=class{constructor(t,s){this.connectionPair=t,this.scrollableViewProperties=s}};var Bt=(()=>{let t=class t{constructor(e){this._attachedOverlays=[],this._document=e}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}};t.\u0275fac=function(i){return new(i||t)(d(b))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),Xt=(()=>{let t=class t extends Bt{constructor(e,i){super(e),this._ngZone=i,this._keydownListener=o=>{let r=this._attachedOverlays;for(let h=r.length-1;h>-1;h--)if(r[h]._keydownEvents.observers.length>0){let a=r[h]._keydownEvents;this._ngZone?this._ngZone.run(()=>a.next(o)):a.next(o);break}}}add(e){super.add(e),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}};t.\u0275fac=function(i){return new(i||t)(d(b),d(S,8))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),jt=(()=>{let t=class t extends Bt{constructor(e,i,o){super(e),this._platform=i,this._ngZone=o,this._cursorStyleIsSet=!1,this._pointerDownListener=r=>{this._pointerDownEventTarget=D(r)},this._clickListener=r=>{let h=D(r),a=r.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:h;this._pointerDownEventTarget=null;let c=this._attachedOverlays.slice();for(let l=c.length-1;l>-1;l--){let _=c[l];if(_._outsidePointerEvents.observers.length<1||!_.hasAttached())continue;if(_.overlayElement.contains(h)||_.overlayElement.contains(a))break;let p=_._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>p.next(r)):p.next(r)}}}add(e){if(super.add(e),!this._isAttached){let i=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(i)):this._addEventListeners(i),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){let e=this._document.body;e.removeEventListener("pointerdown",this._pointerDownListener,!0),e.removeEventListener("click",this._clickListener,!0),e.removeEventListener("auxclick",this._clickListener,!0),e.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(e.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(e){e.addEventListener("pointerdown",this._pointerDownListener,!0),e.addEventListener("click",this._clickListener,!0),e.addEventListener("auxclick",this._clickListener,!0),e.addEventListener("contextmenu",this._clickListener,!0)}};t.\u0275fac=function(i){return new(i||t)(d(b),d(R),d(S,8))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),Lt=(()=>{let t=class t{constructor(e,i){this._platform=i,this._document=e}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||j()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let i=this._document.createElement("div");i.classList.add(e),j()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}};t.\u0275fac=function(i){return new(i||t)(d(b),d(R))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),$=class{constructor(t,s,e,i,o,r,h,a,c,l=!1,_){this._portalOutlet=t,this._host=s,this._pane=e,this._config=i,this._ngZone=o,this._keyboardDispatcher=r,this._document=h,this._location=a,this._outsideClickDispatcher=c,this._animationsDisabled=l,this._injector=_,this._backdropElement=null,this._backdropClick=new y,this._attachments=new y,this._detachments=new y,this._locationChanges=w.EMPTY,this._backdropClickHandler=p=>this._backdropClick.next(p),this._backdropTransitionendHandler=p=>{this._disposeBackdrop(p.target)},this._keydownEvents=new y,this._outsidePointerEvents=new y,this._renders=new y,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy,this._afterRenderRef=gt(()=>dt(()=>{this._renders.next()},{injector:this._injector}))}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(t){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);let s=this._portalOutlet.attach(t);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),_t(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof s?.onDestroy=="function"&&s.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),s}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._previousHostParent=this._pane=this._host=null,t&&this._detachments.next(),this._detachments.complete(),this._afterRenderRef.destroy(),this._renders.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=P(P({},this._config),t),this._updateElementSize()}setDirection(t){this._config=U(P({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=f(this._config.width),t.height=f(this._config.height),t.minWidth=f(this._config.minWidth),t.minHeight=f(this._config.minHeight),t.maxWidth=f(this._config.maxWidth),t.maxHeight=f(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(t)})}):this._backdropElement.classList.add(t)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){let t=this._backdropElement;if(t){if(this._animationsDisabled){this._disposeBackdrop(t);return}t.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{t.addEventListener("transitionend",this._backdropTransitionendHandler)}),t.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(t)},500))}}_toggleClasses(t,s,e){let i=I(s||[]).filter(o=>!!o);i.length&&(e?t.classList.add(...i):t.classList.remove(...i))}_detachContentWhenEmpty(){this._ngZone.runOutsideAngular(()=>{let t=this._renders.pipe(tt(J(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),t.unsubscribe())})})}_disposeScrollStrategy(){let t=this._scrollStrategy;t&&(t.disable(),t.detach&&t.detach())}_disposeBackdrop(t){t&&(t.removeEventListener("click",this._backdropClickHandler),t.removeEventListener("transitionend",this._backdropTransitionendHandler),t.remove(),this._backdropElement===t&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}},Ct="cdk-overlay-connected-position-bounding-box",It=/([A-Za-z%]+)$/,K=class{get positions(){return this._preferredPositions}constructor(t,s,e,i,o){this._viewportRuler=s,this._document=e,this._platform=i,this._overlayContainer=o,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new y,this._resizeSubscription=w.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(Ct),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let t=this._originRect,s=this._overlayRect,e=this._viewportRect,i=this._containerRect,o=[],r;for(let h of this._preferredPositions){let a=this._getOriginPoint(t,i,h),c=this._getOverlayPoint(a,s,h),l=this._getOverlayFit(c,s,e,h);if(l.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(h,a);return}if(this._canFitWithFlexibleDimensions(l,c,e)){o.push({position:h,origin:a,overlayRect:s,boundingBoxRect:this._calculateBoundingBoxRect(a,h)});continue}(!r||r.overlayFit.visibleArea<l.visibleArea)&&(r={overlayFit:l,overlayPoint:c,originPoint:a,position:h,overlayRect:s})}if(o.length){let h=null,a=-1;for(let c of o){let l=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);l>a&&(a=l,h=c)}this._isPushed=!1,this._applyPosition(h.position,h.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&C(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ct),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;if(t){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let s=this._getOriginPoint(this._originRect,this._containerRect,t);this._applyPosition(t,s)}else this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}_getOriginPoint(t,s,e){let i;if(e.originX=="center")i=t.left+t.width/2;else{let r=this._isRtl()?t.right:t.left,h=this._isRtl()?t.left:t.right;i=e.originX=="start"?r:h}s.left<0&&(i-=s.left);let o;return e.originY=="center"?o=t.top+t.height/2:o=e.originY=="top"?t.top:t.bottom,s.top<0&&(o-=s.top),{x:i,y:o}}_getOverlayPoint(t,s,e){let i;e.overlayX=="center"?i=-s.width/2:e.overlayX==="start"?i=this._isRtl()?-s.width:0:i=this._isRtl()?0:-s.width;let o;return e.overlayY=="center"?o=-s.height/2:o=e.overlayY=="top"?0:-s.height,{x:t.x+i,y:t.y+o}}_getOverlayFit(t,s,e,i){let o=Pt(s),{x:r,y:h}=t,a=this._getOffset(i,"x"),c=this._getOffset(i,"y");a&&(r+=a),c&&(h+=c);let l=0-r,_=r+o.width-e.width,p=0-h,g=h+o.height-e.height,u=this._subtractOverflows(o.width,l,_),v=this._subtractOverflows(o.height,p,g),G=u*v;return{visibleArea:G,isCompletelyWithinViewport:o.width*o.height===G,fitsInViewportVertically:v===o.height,fitsInViewportHorizontally:u==o.width}}_canFitWithFlexibleDimensions(t,s,e){if(this._hasFlexibleDimensions){let i=e.bottom-s.y,o=e.right-s.x,r=xt(this._overlayRef.getConfig().minHeight),h=xt(this._overlayRef.getConfig().minWidth),a=t.fitsInViewportVertically||r!=null&&r<=i,c=t.fitsInViewportHorizontally||h!=null&&h<=o;return a&&c}return!1}_pushOverlayOnScreen(t,s,e){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let i=Pt(s),o=this._viewportRect,r=Math.max(t.x+i.width-o.width,0),h=Math.max(t.y+i.height-o.height,0),a=Math.max(o.top-e.top-t.y,0),c=Math.max(o.left-e.left-t.x,0),l=0,_=0;return i.width<=o.width?l=c||-r:l=t.x<this._viewportMargin?o.left-e.left-t.x:0,i.height<=o.height?_=a||-h:_=t.y<this._viewportMargin?o.top-e.top-t.y:0,this._previousPushAmount={x:l,y:_},{x:t.x+l,y:t.y+_}}_applyPosition(t,s){if(this._setTransformOrigin(t),this._setOverlayElementStyles(s,t),this._setBoundingBoxStyles(s,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!Tt(this._lastScrollVisibility,e)){let i=new Z(t,e);this._positionChanges.next(i)}this._lastScrollVisibility=e}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let s=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,i=t.overlayY;t.overlayX==="center"?e="center":this._isRtl()?e=t.overlayX==="start"?"right":"left":e=t.overlayX==="start"?"left":"right";for(let o=0;o<s.length;o++)s[o].style.transformOrigin=`${e} ${i}`}_calculateBoundingBoxRect(t,s){let e=this._viewportRect,i=this._isRtl(),o,r,h;if(s.overlayY==="top")r=t.y,o=e.height-r+this._viewportMargin;else if(s.overlayY==="bottom")h=e.height-t.y+this._viewportMargin*2,o=e.height-h+this._viewportMargin;else{let g=Math.min(e.bottom-t.y+e.top,t.y),u=this._lastBoundingBoxSize.height;o=g*2,r=t.y-g,o>u&&!this._isInitialRender&&!this._growAfterOpen&&(r=t.y-u/2)}let a=s.overlayX==="start"&&!i||s.overlayX==="end"&&i,c=s.overlayX==="end"&&!i||s.overlayX==="start"&&i,l,_,p;if(c)p=e.width-t.x+this._viewportMargin*2,l=t.x-this._viewportMargin;else if(a)_=t.x,l=e.right-t.x;else{let g=Math.min(e.right-t.x+e.left,t.x),u=this._lastBoundingBoxSize.width;l=g*2,_=t.x-g,l>u&&!this._isInitialRender&&!this._growAfterOpen&&(_=t.x-u/2)}return{top:r,left:_,bottom:h,right:p,width:l,height:o}}_setBoundingBoxStyles(t,s){let e=this._calculateBoundingBoxRect(t,s);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right=i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;i.height=f(e.height),i.top=f(e.top),i.bottom=f(e.bottom),i.width=f(e.width),i.left=f(e.left),i.right=f(e.right),s.overlayX==="center"?i.alignItems="center":i.alignItems=s.overlayX==="end"?"flex-end":"flex-start",s.overlayY==="center"?i.justifyContent="center":i.justifyContent=s.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=f(o)),r&&(i.maxWidth=f(r))}this._lastBoundingBoxSize=e,C(this._boundingBox.style,i)}_resetBoundingBoxStyles(){C(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){C(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,s){let e={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(i){let l=this._viewportRuler.getViewportScrollPosition();C(e,this._getExactOverlayY(s,t,l)),C(e,this._getExactOverlayX(s,t,l))}else e.position="static";let h="",a=this._getOffset(s,"x"),c=this._getOffset(s,"y");a&&(h+=`translateX(${a}px) `),c&&(h+=`translateY(${c}px)`),e.transform=h.trim(),r.maxHeight&&(i?e.maxHeight=f(r.maxHeight):o&&(e.maxHeight="")),r.maxWidth&&(i?e.maxWidth=f(r.maxWidth):o&&(e.maxWidth="")),C(this._pane.style,e)}_getExactOverlayY(t,s,e){let i={top:"",bottom:""},o=this._getOverlayPoint(s,this._overlayRect,t);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e)),t.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;i.bottom=`${r-(o.y+this._overlayRect.height)}px`}else i.top=f(o.y);return i}_getExactOverlayX(t,s,e){let i={left:"",right:""},o=this._getOverlayPoint(s,this._overlayRect,t);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e));let r;if(this._isRtl()?r=t.overlayX==="end"?"left":"right":r=t.overlayX==="end"?"right":"left",r==="right"){let h=this._document.documentElement.clientWidth;i.right=`${h-(o.x+this._overlayRect.width)}px`}else i.left=f(o.x);return i}_getScrollVisibility(){let t=this._getOriginRect(),s=this._pane.getBoundingClientRect(),e=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:kt(t,e),isOriginOutsideView:W(t,e),isOverlayClipped:kt(s,e),isOverlayOutsideView:W(s,e)}}_subtractOverflows(t,...s){return s.reduce((e,i)=>e-Math.max(i,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,s=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._viewportMargin,left:e.left+this._viewportMargin,right:e.left+t-this._viewportMargin,bottom:e.top+s-this._viewportMargin,width:t-2*this._viewportMargin,height:s-2*this._viewportMargin}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,s){return s==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&I(t).forEach(s=>{s!==""&&this._appliedPanelClasses.indexOf(s)===-1&&(this._appliedPanelClasses.push(s),this._pane.classList.add(s))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getOriginRect(){let t=this._origin;if(t instanceof x)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let s=t.width||0,e=t.height||0;return{top:t.y,bottom:t.y+e,left:t.x,right:t.x+s,height:e,width:s}}};function C(n,t){for(let s in t)t.hasOwnProperty(s)&&(n[s]=t[s]);return n}function xt(n){if(typeof n!="number"&&n!=null){let[t,s]=n.split(It);return!s||s==="px"?parseFloat(t):null}return n||null}function Pt(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Tt(n,t){return n===t?!0:n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}var Rt="cdk-global-overlay-wrapper",q=class{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(t){let s=t.getConfig();this._overlayRef=t,this._width&&!s.width&&t.updateSize({width:this._width}),this._height&&!s.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(Rt),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,s=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:i,height:o,maxWidth:r,maxHeight:h}=e,a=(i==="100%"||i==="100vw")&&(!r||r==="100%"||r==="100vw"),c=(o==="100%"||o==="100vh")&&(!h||h==="100%"||h==="100vh"),l=this._xPosition,_=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",g="",u="",v="";a?v="flex-start":l==="center"?(v="center",p?u=_:g=_):p?l==="left"||l==="end"?(v="flex-end",g=_):(l==="right"||l==="start")&&(v="flex-start",u=_):l==="left"||l==="start"?(v="flex-start",g=_):(l==="right"||l==="end")&&(v="flex-end",u=_),t.position=this._cssPosition,t.marginLeft=a?"0":g,t.marginTop=c?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=a?"0":u,s.justifyContent=v,s.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,s=this._overlayRef.hostElement,e=s.style;s.classList.remove(Rt),e.justifyContent=e.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}},Ft=(()=>{let t=class t{constructor(e,i,o,r){this._viewportRuler=e,this._document=i,this._platform=o,this._overlayContainer=r}global(){return new q}flexibleConnectedTo(e){return new K(e,this._viewportRuler,this._document,this._platform,this._overlayContainer)}};t.\u0275fac=function(i){return new(i||t)(d(B),d(b),d(R),d(Lt))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),Ht=0,A=(()=>{let t=class t{constructor(e,i,o,r,h,a,c,l,_,p,g,u){this.scrollStrategies=e,this._overlayContainer=i,this._componentFactoryResolver=o,this._positionBuilder=r,this._keyboardDispatcher=h,this._injector=a,this._ngZone=c,this._document=l,this._directionality=_,this._location=p,this._outsideClickDispatcher=g,this._animationsModuleType=u}create(e){let i=this._createHostElement(),o=this._createPaneElement(i),r=this._createPortalOutlet(o),h=new M(e);return h.direction=h.direction||this._directionality.value,new $(r,i,o,h,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,this._animationsModuleType==="NoopAnimations",this._injector.get(nt))}position(){return this._positionBuilder}_createPaneElement(e){let i=this._document.createElement("div");return i.id=`cdk-overlay-${Ht++}`,i.classList.add("cdk-overlay-pane"),e.appendChild(i),i}_createHostElement(){let e=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(e),e}_createPortalOutlet(e){return this._appRef||(this._appRef=this._injector.get(ut)),new Et(e,this._componentFactoryResolver,this._appRef,this._injector,this._document)}};t.\u0275fac=function(i){return new(i||t)(d(Yt),d(Lt),d(ct),d(Ft),d(Xt),d(ht),d(S),d(b),d(T),d(vt),d(jt),d(lt,8))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),Vt=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Mt=new st("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=Y(A);return()=>n.scrollStrategies.reposition()}}),Dt=(()=>{let t=class t{constructor(e){this.elementRef=e}};t.\u0275fac=function(i){return new(i||t)(O(x))},t.\u0275dir=X({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"],standalone:!0});let n=t;return n})(),pe=(()=>{let t=class t{get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}get disposeOnNavigation(){return this._disposeOnNavigation}set disposeOnNavigation(e){this._disposeOnNavigation=e}constructor(e,i,o,r,h){this._overlay=e,this._dir=h,this._backdropSubscription=w.EMPTY,this._attachSubscription=w.EMPTY,this._detachSubscription=w.EMPTY,this._positionSubscription=w.EMPTY,this._disposeOnNavigation=!1,this._ngZone=Y(S),this.viewportMargin=0,this.open=!1,this.disableClose=!1,this.hasBackdrop=!1,this.lockPosition=!1,this.flexibleDimensions=!1,this.growAfterOpen=!1,this.push=!1,this.backdropClick=new E,this.positionChange=new E,this.attach=new E,this.detach=new E,this.overlayKeydown=new E,this.overlayOutsideClick=new E,this._templatePortal=new wt(i,o),this._scrollStrategyFactory=r,this.scrollStrategy=this._scrollStrategyFactory()}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef&&this._overlayRef.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef.updateSize({width:this.width,minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this._attachOverlay():this._detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Vt);let e=this._overlayRef=this._overlay.create(this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!mt(i)&&(i.preventDefault(),this._detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let o=this._getOriginElement(),r=D(i);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new M({direction:this._dir,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation});return(this.width||this.width===0)&&(i.width=this.width),(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector)}_createPositionStrategy(){let e=this._overlay.position().flexibleConnectedTo(this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Dt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Dt?this.origin.elementRef.nativeElement:this.origin instanceof x?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_attachOverlay(){this._overlayRef?this._overlayRef.getConfig().hasBackdrop=this.hasBackdrop:this._createOverlay(),this._overlayRef.hasAttached()||this._overlayRef.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=this._overlayRef.backdropClick().subscribe(e=>{this.backdropClick.emit(e)}):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(et(()=>this.positionChange.observers.length>0)).subscribe(e=>{this._ngZone.run(()=>this.positionChange.emit(e)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()}))}_detachOverlay(){this._overlayRef&&this._overlayRef.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)(O(A),O(at),O(ft),O(Mt),O(T,8))},t.\u0275dir=X({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",k],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",k],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",k],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",k],push:[2,"cdkConnectedOverlayPush","push",k],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",k]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],standalone:!0,features:[pt,rt]});let n=t;return n})();function Nt(n){return()=>n.scrollStrategies.reposition()}var Wt={provide:Mt,deps:[A],useFactory:Nt},ue=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=ot({type:t}),t.\u0275inj=it({providers:[A,Wt],imports:[bt,Ot,H,H]});let n=t;return n})();export{M as a,A as b,Dt as c,pe as d,ue as e};
//# sourceMappingURL=chunk-QLLWA3R6.js.map
