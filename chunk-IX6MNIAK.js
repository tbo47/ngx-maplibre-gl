import{A as Ce,Ba as $e,Bc as at,Ca as he,D as je,Da as Ke,Dc as me,Ea as I,Ec as ne,Ga as fe,Ha as ee,Ia as j,Ja as F,K as Fe,Ka as Xe,La as Je,Ma as Ge,Na as We,Oa as qe,Pa as Ze,Qa as Ye,Ra as S,T as Ue,W as _e,Wa as $,X as M,Z as g,aa as T,bb as Qe,c as de,ca as f,da as w,db as He,eb as k,fc as tt,ga as V,gc as pe,hc as nt,kc as rt,l as xe,la as H,lb as et,lc as st,m as Q,ma as Be,na as ze,oa as Ve,oc as ye,pc as ot,qc as it,r as z,rc as E,uc as te,xa as ue}from"./chunk-L2OPCR2R.js";import{a as C,b as ke,c as Le,f as le}from"./chunk-SFFPZX3Y.js";var X=class{},J=class{},b=class t{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(s=>{let n=s.indexOf(":");if(n>0){let r=s.slice(0,n),o=r.toLowerCase(),a=s.slice(n+1).trim();this.maybeSetNormalizedName(r,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((s,n)=>{this.setHeaderEntries(n,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([s,n])=>{this.setHeaderEntries(s,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let s=this.headers.get(e.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,s){return this.clone({name:e,value:s,op:"a"})}set(e,s){return this.clone({name:e,value:s,op:"s"})}delete(e,s){return this.clone({name:e,value:s,op:"d"})}maybeSetNormalizedName(e,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,e)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(s=>{this.headers.set(s,e.headers.get(s)),this.normalizedNames.set(s,e.normalizedNames.get(s))})}clone(e){let s=new t;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([e]),s}applyUpdate(e){let s=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,s);let r=(e.op==="a"?this.headers.get(s):void 0)||[];r.push(...n),this.headers.set(s,r);break;case"d":let o=e.value;if(!o)this.headers.delete(s),this.normalizedNames.delete(s);else{let a=this.headers.get(s);if(!a)return;a=a.filter(i=>o.indexOf(i)===-1),a.length===0?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,a)}break}}setHeaderEntries(e,s){let n=(Array.isArray(s)?s:[s]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>e(this.normalizedNames.get(s),this.headers.get(s)))}};var we=class{encodeKey(e){return ct(e)}encodeValue(e){return ct(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function _t(t,e){let s=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,i]=o==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],l=s.get(a)||[];l.push(i),s.set(a,l)}),s}var Bt=/%(\d[a-f0-9])/gi,zt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ct(t){return encodeURIComponent(t).replace(Bt,(e,s)=>zt[s]??e)}function re(t){return`${t}`}var A=class t{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new we,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=_t(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(s=>{let n=e.fromObject[s],r=Array.isArray(n)?n.map(re):[re(n)];this.map.set(s,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let s=this.map.get(e);return s?s[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,s){return this.clone({param:e,value:s,op:"a"})}appendAll(e){let s=[];return Object.keys(e).forEach(n=>{let r=e[n];Array.isArray(r)?r.forEach(o=>{s.push({param:n,value:o,op:"a"})}):s.push({param:n,value:r,op:"a"})}),this.clone(s)}set(e,s){return this.clone({param:e,value:s,op:"s"})}delete(e,s){return this.clone({param:e,value:s,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let s=this.encoder.encodeKey(e);return this.map.get(e).map(n=>s+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let s=new t({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(e),s}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let s=(e.op==="a"?this.map.get(e.param):void 0)||[];s.push(re(e.value)),this.map.set(e.param,s);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],r=n.indexOf(re(e.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var Ee=class{constructor(){this.map=new Map}set(e,s){return this.map.set(e,s),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Vt(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function lt(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function dt(t){return typeof Blob<"u"&&t instanceof Blob}function ut(t){return typeof FormData<"u"&&t instanceof FormData}function $t(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var K=class t{constructor(e,s,n,r){this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if(Vt(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new b,this.context??=new Ee,!this.params)this.params=new A,this.urlWithParams=s;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=s;else{let i=s.indexOf("?"),l=i===-1?"?":i<s.length-1?"&":"";this.urlWithParams=s+l+a}}}serializeBody(){return this.body===null?null:lt(this.body)||dt(this.body)||ut(this.body)||$t(this.body)||typeof this.body=="string"?this.body:this.body instanceof A?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ut(this.body)?null:dt(this.body)?this.body.type||null:lt(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof A?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let s=e.method||this.method,n=e.url||this.url,r=e.responseType||this.responseType,o=e.body!==void 0?e.body:this.body,a=e.withCredentials!==void 0?e.withCredentials:this.withCredentials,i=e.reportProgress!==void 0?e.reportProgress:this.reportProgress,l=e.headers||this.headers,c=e.params||this.params,u=e.context??this.context;return e.setHeaders!==void 0&&(l=Object.keys(e.setHeaders).reduce((d,y)=>d.set(y,e.setHeaders[y]),l)),e.setParams&&(c=Object.keys(e.setParams).reduce((d,y)=>d.set(y,e.setParams[y]),c)),new t(s,n,o,{params:c,headers:l,context:u,reportProgress:i,responseType:r,withCredentials:a})}},P=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(P||{}),G=class{constructor(e,s=W.Ok,n="OK"){this.headers=e.headers||new b,this.status=e.status!==void 0?e.status:s,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},oe=class t extends G{constructor(e={}){super(e),this.type=P.ResponseHeader}clone(e={}){return new t({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},L=class t extends G{constructor(e={}){super(e),this.type=P.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new t({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},D=class extends G{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},W=function(t){return t[t.Continue=100]="Continue",t[t.SwitchingProtocols=101]="SwitchingProtocols",t[t.Processing=102]="Processing",t[t.EarlyHints=103]="EarlyHints",t[t.Ok=200]="Ok",t[t.Created=201]="Created",t[t.Accepted=202]="Accepted",t[t.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",t[t.NoContent=204]="NoContent",t[t.ResetContent=205]="ResetContent",t[t.PartialContent=206]="PartialContent",t[t.MultiStatus=207]="MultiStatus",t[t.AlreadyReported=208]="AlreadyReported",t[t.ImUsed=226]="ImUsed",t[t.MultipleChoices=300]="MultipleChoices",t[t.MovedPermanently=301]="MovedPermanently",t[t.Found=302]="Found",t[t.SeeOther=303]="SeeOther",t[t.NotModified=304]="NotModified",t[t.UseProxy=305]="UseProxy",t[t.Unused=306]="Unused",t[t.TemporaryRedirect=307]="TemporaryRedirect",t[t.PermanentRedirect=308]="PermanentRedirect",t[t.BadRequest=400]="BadRequest",t[t.Unauthorized=401]="Unauthorized",t[t.PaymentRequired=402]="PaymentRequired",t[t.Forbidden=403]="Forbidden",t[t.NotFound=404]="NotFound",t[t.MethodNotAllowed=405]="MethodNotAllowed",t[t.NotAcceptable=406]="NotAcceptable",t[t.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",t[t.RequestTimeout=408]="RequestTimeout",t[t.Conflict=409]="Conflict",t[t.Gone=410]="Gone",t[t.LengthRequired=411]="LengthRequired",t[t.PreconditionFailed=412]="PreconditionFailed",t[t.PayloadTooLarge=413]="PayloadTooLarge",t[t.UriTooLong=414]="UriTooLong",t[t.UnsupportedMediaType=415]="UnsupportedMediaType",t[t.RangeNotSatisfiable=416]="RangeNotSatisfiable",t[t.ExpectationFailed=417]="ExpectationFailed",t[t.ImATeapot=418]="ImATeapot",t[t.MisdirectedRequest=421]="MisdirectedRequest",t[t.UnprocessableEntity=422]="UnprocessableEntity",t[t.Locked=423]="Locked",t[t.FailedDependency=424]="FailedDependency",t[t.TooEarly=425]="TooEarly",t[t.UpgradeRequired=426]="UpgradeRequired",t[t.PreconditionRequired=428]="PreconditionRequired",t[t.TooManyRequests=429]="TooManyRequests",t[t.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",t[t.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",t[t.InternalServerError=500]="InternalServerError",t[t.NotImplemented=501]="NotImplemented",t[t.BadGateway=502]="BadGateway",t[t.ServiceUnavailable=503]="ServiceUnavailable",t[t.GatewayTimeout=504]="GatewayTimeout",t[t.HttpVersionNotSupported=505]="HttpVersionNotSupported",t[t.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",t[t.InsufficientStorage=507]="InsufficientStorage",t[t.LoopDetected=508]="LoopDetected",t[t.NotExtended=510]="NotExtended",t[t.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",t}(W||{});function ge(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var Kt=(()=>{let e=class e{constructor(n){this.handler=n}request(n,r,o={}){let a;if(n instanceof K)a=n;else{let c;o.headers instanceof b?c=o.headers:c=new b(o.headers);let u;o.params&&(o.params instanceof A?u=o.params:u=new A({fromObject:o.params})),a=new K(n,r,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let i=Q(a).pipe(je(c=>this.handler.handle(c)));if(n instanceof K||o.observe==="events")return i;let l=i.pipe(Ce(c=>c instanceof L));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(z(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe(z(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe(z(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return l.pipe(z(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new A().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,ge(o,r))}post(n,r,o={}){return this.request("POST",n,ge(o,r))}put(n,r,o={}){return this.request("PUT",n,ge(o,r))}};e.\u0275fac=function(r){return new(r||e)(f(X))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Xt=/^\)\]\}',?\n/,Jt="X-Request-URL";function ht(t){if(t.url)return t.url;let e=Jt.toLocaleLowerCase();return t.headers.get(e)}var ve=(()=>{let e=class e{constructor(){this.fetchImpl=w(Te,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=w(k)}handle(n){return new de(r=>{let o=new AbortController;return this.doRequest(n,o.signal,r).then(Re,a=>r.error(new D({error:a}))),()=>o.abort()})}doRequest(n,r,o){return le(this,null,function*(){let a=this.createRequestInit(n),i;try{let v=this.fetchImpl(n.urlWithParams,C({signal:r},a));Gt(v),o.next({type:P.Sent}),i=yield v}catch(v){o.error(new D({error:v,status:v.status??0,statusText:v.statusText,url:n.urlWithParams,headers:v.headers}));return}let l=new b(i.headers),c=i.statusText,u=ht(i)??n.urlWithParams,d=i.status,y=null;if(n.reportProgress&&o.next(new oe({headers:l,status:d,statusText:c,url:u})),i.body){let v=i.headers.get("content-length"),N=[],p=i.body.getReader(),h=0,R,x,m=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>le(this,null,function*(){for(;;){let{done:O,value:B}=yield p.read();if(O)break;if(N.push(B),h+=B.length,n.reportProgress){x=n.responseType==="text"?(x??"")+(R??=new TextDecoder).decode(B,{stream:!0}):void 0;let Se=()=>o.next({type:P.DownloadProgress,total:v?+v:void 0,loaded:h,partialText:x});m?m.run(Se):Se()}}}));let _=this.concatChunks(N,h);try{let O=i.headers.get("Content-Type")??"";y=this.parseBody(n,_,O)}catch(O){o.error(new D({error:O,headers:new b(i.headers),status:i.status,statusText:i.statusText,url:ht(i)??n.urlWithParams}));return}}d===0&&(d=y?W.Ok:0),d>=200&&d<300?(o.next(new L({body:y,headers:l,status:d,statusText:c,url:u})),o.complete()):o.error(new D({error:y,headers:l,status:d,statusText:c,url:u}))})}parseBody(n,r,o){switch(n.responseType){case"json":let a=new TextDecoder().decode(r).replace(Xt,"");return a===""?null:JSON.parse(a);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:o});case"arraybuffer":return r.buffer}}createRequestInit(n){let r={},o=n.withCredentials?"include":void 0;if(n.headers.forEach((a,i)=>r[a]=i.join(",")),r.Accept??="application/json, text/plain, */*",!r["Content-Type"]){let a=n.detectContentTypeHeader();a!==null&&(r["Content-Type"]=a)}return{body:n.serializeBody(),method:n.method,headers:r,credentials:o}}concatChunks(n,r){let o=new Uint8Array(r),a=0;for(let i of n)o.set(i,a),a+=i.length;return o}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Te=class{};function Re(){}function Gt(t){t.then(Re,Re)}function Wt(t,e){return e(t)}function qt(t,e,s){return(n,r)=>Ve(s,()=>e(n,o=>t(o,r)))}var Tt=new T(""),Rt=new T(""),bt=new T("");var ft=(()=>{let e=class e extends X{constructor(n,r){super(),this.backend=n,this.injector=r,this.chain=null,this.pendingTasks=w(et);let o=w(bt,{optional:!0});this.backend=o??n}handle(n){if(this.chain===null){let o=Array.from(new Set([...this.injector.get(Tt),...this.injector.get(Rt,[])]));this.chain=o.reduceRight((a,i)=>qt(a,i,this.injector),Wt)}let r=this.pendingTasks.add();return this.chain(n,o=>this.backend.handle(o)).pipe(Fe(()=>this.pendingTasks.remove(r)))}};e.\u0275fac=function(r){return new(r||e)(f(J),f(ze))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})();var Zt=/^\)\]\}',?\n/;function Yt(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}var pt=(()=>{let e=class e{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new M(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?xe(r.\u0275loadImpl()):Q(null)).pipe(Ue(()=>new de(a=>{let i=r.build();if(i.open(n.method,n.urlWithParams),n.withCredentials&&(i.withCredentials=!0),n.headers.forEach((p,h)=>i.setRequestHeader(p,h.join(","))),n.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let p=n.detectContentTypeHeader();p!==null&&i.setRequestHeader("Content-Type",p)}if(n.responseType){let p=n.responseType.toLowerCase();i.responseType=p!=="json"?p:"text"}let l=n.serializeBody(),c=null,u=()=>{if(c!==null)return c;let p=i.statusText||"OK",h=new b(i.getAllResponseHeaders()),R=Yt(i)||n.url;return c=new oe({headers:h,status:i.status,statusText:p,url:R}),c},d=()=>{let{headers:p,status:h,statusText:R,url:x}=u(),m=null;h!==W.NoContent&&(m=typeof i.response>"u"?i.responseText:i.response),h===0&&(h=m?W.Ok:0);let _=h>=200&&h<300;if(n.responseType==="json"&&typeof m=="string"){let O=m;m=m.replace(Zt,"");try{m=m!==""?JSON.parse(m):null}catch(B){m=O,_&&(_=!1,m={error:B,text:m})}}_?(a.next(new L({body:m,headers:p,status:h,statusText:R,url:x||void 0})),a.complete()):a.error(new D({error:m,headers:p,status:h,statusText:R,url:x||void 0}))},y=p=>{let{url:h}=u(),R=new D({error:p,status:i.status||0,statusText:i.statusText||"Unknown Error",url:h||void 0});a.error(R)},U=!1,v=p=>{U||(a.next(u()),U=!0);let h={type:P.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(h.total=p.total),n.responseType==="text"&&i.responseText&&(h.partialText=i.responseText),a.next(h)},N=p=>{let h={type:P.UploadProgress,loaded:p.loaded};p.lengthComputable&&(h.total=p.total),a.next(h)};return i.addEventListener("load",d),i.addEventListener("error",y),i.addEventListener("timeout",y),i.addEventListener("abort",y),n.reportProgress&&(i.addEventListener("progress",v),l!==null&&i.upload&&i.upload.addEventListener("progress",N)),i.send(l),a.next({type:P.Sent}),()=>{i.removeEventListener("error",y),i.removeEventListener("abort",y),i.removeEventListener("load",d),i.removeEventListener("timeout",y),n.reportProgress&&(i.removeEventListener("progress",v),l!==null&&i.upload&&i.upload.removeEventListener("progress",N)),i.readyState!==i.DONE&&i.abort()}})))}};e.\u0275fac=function(r){return new(r||e)(f(ne))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Mt=new T(""),Qt="XSRF-TOKEN",Ht=new T("",{providedIn:"root",factory:()=>Qt}),en="X-XSRF-TOKEN",tn=new T("",{providedIn:"root",factory:()=>en}),ie=class{},nn=(()=>{let e=class e{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=te(n,this.cookieName),this.lastCookieString=n),this.lastToken}};e.\u0275fac=function(r){return new(r||e)(f(E),f(I),f(Ht))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})();function rn(t,e){let s=t.url.toLowerCase();if(!w(Mt)||t.method==="GET"||t.method==="HEAD"||s.startsWith("http://")||s.startsWith("https://"))return e(t);let n=w(ie).getToken(),r=w(tn);return n!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,n)})),e(t)}var Dt=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(Dt||{});function sn(t,e){return{\u0275kind:t,\u0275providers:e}}function Kn(...t){let e=[Kt,pt,ft,{provide:X,useExisting:ft},{provide:J,useExisting:pt},{provide:Tt,useValue:rn,multi:!0},{provide:Mt,useValue:!0},{provide:ie,useClass:nn}];for(let s of t)e.push(...s.\u0275providers);return H(e)}function Xn(){return sn(Dt.Fetch,[ve,{provide:J,useExisting:ve},{provide:bt,useExisting:ve}])}var yt="b",mt="h",gt="s",vt="st",wt="u",Et="rt",se=new T(""),on=["GET","HEAD"];function an(t,e){let u=w(se),{isCacheActive:s}=u,n=Le(u,["isCacheActive"]),{transferCache:r,method:o}=t;if(!s||o==="POST"&&!n.includePostRequests&&!r||o!=="POST"&&!on.includes(o)||t.headers.has("authorization")||t.headers.has("proxy-authorization")||r===!1||n.filter?.(t)===!1)return e(t);let a=w(ee),i=ln(t),l=a.get(i,null),c=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(c=r.includeHeaders),l){let{[yt]:d,[Et]:y,[mt]:U,[gt]:v,[vt]:N,[wt]:p}=l,h=d;switch(y){case"arraybuffer":h=new TextEncoder().encode(d).buffer;break;case"blob":h=new Blob([d]);break}let R=new b(U);return Q(new L({body:h,headers:R,status:v,statusText:N,url:p}))}return e(t).pipe(_e(d=>{d instanceof L&&a.set(i,{[yt]:d.body,[mt]:cn(d.headers,c),[gt]:d.status,[vt]:d.statusText,[wt]:d.url||"",[Et]:t.responseType})}))}function cn(t,e){if(!e)return{};let s={};for(let n of e){let r=t.getAll(n);r!==null&&(s[n]=r)}return s}function ln(t){let{params:e,method:s,responseType:n,url:r,body:o}=t,a=e.keys().sort().map(u=>`${u}=${e.getAll(u)}`).join("&"),l=[s,n,r,typeof o=="string"?o:"",a].join("|"),c=dn(l);return c}function dn(t){let e=0;for(let s of t)e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function At(t){return[{provide:se,useFactory:()=>(He("NgHttpTransferCache"),C({isCacheActive:!0},t))},{provide:Rt,useValue:an,multi:!0,deps:[ee,se]},{provide:tt,multi:!0,useFactory:()=>{let e=w(pe),s=w(se);return()=>{nt(e).then(()=>{s.isCacheActive=!1})}}}]}var De=class extends it{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Ae=class t extends De{static makeCurrent(){ot(new t)}onAndCancel(e,s,n){return e.addEventListener(s,n),()=>{e.removeEventListener(s,n)}}dispatchEvent(e,s){e.dispatchEvent(s)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,s){return s=s||this.getDefaultDocument(),s.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,s){return s==="window"?window:s==="document"?e:s==="body"?e.body:null}getBaseHref(e){let s=hn();return s==null?null:fn(s)}resetBaseElement(){q=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return te(document.cookie,e)}},q=null;function hn(){return q=q||document.querySelector("base"),q?q.getAttribute("href"):null}function fn(t){return new URL(t,document.baseURI).pathname}var pn=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Pe=new T(""),It=(()=>{let e=class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>{o.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(a=>a.supports(n)),!r)throw new M(5101,!1);return this._eventNameToPlugin.set(n,r),r}};e.\u0275fac=function(r){return new(r||e)(f(Pe),f(k))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),ae=class{constructor(e){this._doc=e}},be="ng-app-id",St=(()=>{let e=class e{constructor(n,r,o,a={}){this.doc=n,this.appId=r,this.nonce=o,this.platformId=a,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=me(a),this.resetHostNodes()}addStyles(n){for(let r of n)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(n){for(let r of n)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let n=this.styleNodesInDOM;n&&(n.forEach(r=>r.remove()),n.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(n){this.hostNodes.add(n);for(let r of this.getAllStyles())this.addStyleToHost(n,r)}removeHost(n){this.hostNodes.delete(n)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(n){for(let r of this.hostNodes)this.addStyleToHost(r,n)}onStyleRemoved(n){let r=this.styleRef;r.get(n)?.elements?.forEach(o=>o.remove()),r.delete(n)}collectServerRenderedStyles(){let n=this.doc.head?.querySelectorAll(`style[${be}="${this.appId}"]`);if(n?.length){let r=new Map;return n.forEach(o=>{o.textContent!=null&&r.set(o.textContent,o)}),r}return null}changeUsageCount(n,r){let o=this.styleRef;if(o.has(n)){let a=o.get(n);return a.usage+=r,a.usage}return o.set(n,{usage:r,elements:[]}),r}getStyleElement(n,r){let o=this.styleNodesInDOM,a=o?.get(r);if(a?.parentNode===n)return o.delete(r),a.removeAttribute(be),a;{let i=this.doc.createElement("style");return this.nonce&&i.setAttribute("nonce",this.nonce),i.textContent=r,this.platformIsServer&&i.setAttribute(be,this.appId),n.appendChild(i),i}}addStyleToHost(n,r){let o=this.getStyleElement(n,r),a=this.styleRef,i=a.get(r)?.elements;i?i.push(o):a.set(r,{elements:[o],usage:1})}resetHostNodes(){let n=this.hostNodes;n.clear(),n.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(f(E),f(he),f(fe,8),f(I))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Me={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Ie=/%COMP%/g,kt="%COMP%",yn=`_nghost-${kt}`,mn=`_ngcontent-${kt}`,gn=!0,vn=new T("",{providedIn:"root",factory:()=>gn});function wn(t){return mn.replace(Ie,t)}function En(t){return yn.replace(Ie,t)}function Lt(t,e){return e.map(s=>s.replace(Ie,t))}var Pt=(()=>{let e=class e{constructor(n,r,o,a,i,l,c,u=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=a,this.doc=i,this.platformId=l,this.ngZone=c,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=me(l),this.defaultRenderer=new Z(n,i,c,this.platformIsServer)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===V.ShadowDom&&(r=ke(C({},r),{encapsulation:V.Emulated}));let o=this.getOrCreateRenderer(n,r);return o instanceof ce?o.applyToHost(n):o instanceof Y&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,a=o.get(r.id);if(!a){let i=this.doc,l=this.ngZone,c=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,y=this.platformIsServer;switch(r.encapsulation){case V.Emulated:a=new ce(c,u,r,this.appId,d,i,l,y);break;case V.ShadowDom:return new Ne(c,u,n,r,i,l,this.nonce,y);default:a=new Y(c,u,r,d,i,l,y);break}o.set(r.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(f(It),f(St),f(he),f(vn),f(E),f(I),f(k),f(fe))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Z=class{constructor(e,s,n,r){this.eventManager=e,this.doc=s,this.ngZone=n,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,s){return s?this.doc.createElementNS(Me[s]||s,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,s){(Nt(e)?e.content:e).appendChild(s)}insertBefore(e,s,n){e&&(Nt(e)?e.content:e).insertBefore(s,n)}removeChild(e,s){e&&e.removeChild(s)}selectRootElement(e,s){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new M(-5104,!1);return s||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,s,n,r){if(r){s=r+":"+s;let o=Me[r];o?e.setAttributeNS(o,s,n):e.setAttribute(s,n)}else e.setAttribute(s,n)}removeAttribute(e,s,n){if(n){let r=Me[n];r?e.removeAttributeNS(r,s):e.removeAttribute(`${n}:${s}`)}else e.removeAttribute(s)}addClass(e,s){e.classList.add(s)}removeClass(e,s){e.classList.remove(s)}setStyle(e,s,n,r){r&($.DashCase|$.Important)?e.style.setProperty(s,n,r&$.Important?"important":""):e.style[s]=n}removeStyle(e,s,n){n&$.DashCase?e.style.removeProperty(s):e.style[s]=""}setProperty(e,s,n){e!=null&&(e[s]=n)}setValue(e,s){e.nodeValue=s}listen(e,s,n){if(typeof e=="string"&&(e=ye().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${s}`);return this.eventManager.addEventListener(e,s,this.decoratePreventDefault(n))}decoratePreventDefault(e){return s=>{if(s==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(s)):e(s))===!1&&s.preventDefault()}}};function Nt(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Ne=class extends Z{constructor(e,s,n,r,o,a,i,l){super(e,o,a,l),this.sharedStylesHost=s,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=Lt(r.id,r.styles);for(let u of c){let d=document.createElement("style");i&&d.setAttribute("nonce",i),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,s){return super.appendChild(this.nodeOrShadowRoot(e),s)}insertBefore(e,s,n){return super.insertBefore(this.nodeOrShadowRoot(e),s,n)}removeChild(e,s){return super.removeChild(this.nodeOrShadowRoot(e),s)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Y=class extends Z{constructor(e,s,n,r,o,a,i,l){super(e,o,a,i),this.sharedStylesHost=s,this.removeStylesOnCompDestroy=r,this.styles=l?Lt(l,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},ce=class extends Y{constructor(e,s,n,r,o,a,i,l){let c=r+"-"+n.id;super(e,s,n,o,a,i,l,c),this.contentAttr=wn(c),this.hostAttr=En(c)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,s){let n=super.createElement(e,s);return super.setAttribute(n,this.contentAttr,""),n}},Tn=(()=>{let e=class e extends ae{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}};e.\u0275fac=function(r){return new(r||e)(f(E))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})(),Ot=["alt","control","meta","shift"],Rn={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},bn={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Mn=(()=>{let e=class e extends ae{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o){let a=e.parseEventName(r),i=e.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ye().onAndCancel(n,a.domEventName,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let a=e._normalizeKey(r.pop()),i="",l=r.indexOf("code");if(l>-1&&(r.splice(l,1),i="code."),Ot.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),i+=u+".")}),i+=a,r.length!=0||a.length===0)return null;let c={};return c.domEventName=o,c.fullKey=i,c}static matchEventFullKeyCode(n,r){let o=Rn[n.key]||n.key,a="";return r.indexOf("code.")>-1&&(o=n.code,a="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Ot.forEach(i=>{if(i!==o){let l=bn[i];l(n)&&(a+=i+".")}}),a+=o,a===r)}static eventCallback(n,r,o){return a=>{e.matchEventFullKeyCode(a,n)&&o.runGuarded(()=>r(a))}}static _normalizeKey(n){return n==="esc"?"escape":n}};e.\u0275fac=function(r){return new(r||e)(f(E))},e.\u0275prov=g({token:e,factory:e.\u0275fac});let t=e;return t})();function yr(t,e){return rt(C({rootComponent:t},Dn(e)))}function Dn(t){return{appProviders:[...In,...t?.providers??[]],platformProviders:On}}function An(){Ae.makeCurrent()}function Pn(){return new ue}function Nn(){return $e(document),document}var On=[{provide:I,useValue:at},{provide:Ke,useValue:An,multi:!0},{provide:E,useFactory:Nn,deps:[]}];var In=[{provide:Be,useValue:"root"},{provide:ue,useFactory:Pn,deps:[]},{provide:Pe,useClass:Tn,multi:!0,deps:[E,k,I]},{provide:Pe,useClass:Mn,multi:!0,deps:[E]},Pt,St,It,{provide:Qe,useExisting:Pt},{provide:ne,useClass:pn,deps:[]},[]];var mr=(()=>{let e=class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}};e.\u0275fac=function(r){return new(r||e)(f(E))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Sn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=g({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=f(kn),o},providedIn:"root"});let t=e;return t})(),kn=(()=>{let e=class e extends Sn{constructor(n){super(),this._doc=n}sanitize(n,r){if(r==null)return null;switch(n){case S.NONE:return r;case S.HTML:return F(r,"HTML")?j(r):Ye(this._doc,String(r)).toString();case S.STYLE:return F(r,"Style")?j(r):r;case S.SCRIPT:if(F(r,"Script"))return j(r);throw new M(5200,!1);case S.URL:return F(r,"URL")?j(r):Ze(String(r));case S.RESOURCE_URL:if(F(r,"ResourceURL"))return j(r);throw new M(5201,!1);default:throw new M(5202,!1)}}bypassSecurityTrustHtml(n){return Xe(n)}bypassSecurityTrustStyle(n){return Je(n)}bypassSecurityTrustScript(n){return Ge(n)}bypassSecurityTrustUrl(n){return We(n)}bypassSecurityTrustResourceUrl(n){return qe(n)}};e.\u0275fac=function(r){return new(r||e)(f(E))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Oe=function(t){return t[t.NoHttpTransferCache=0]="NoHttpTransferCache",t[t.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",t}(Oe||{});function gr(...t){let e=[],s=new Set,n=s.has(Oe.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:o}of t)s.add(o),r.length&&e.push(r);return H([[],st(),s.has(Oe.NoHttpTransferCache)||n?[]:At({}),e])}export{Kt as a,Kn as b,Xn as c,Pt as d,yr as e,mr as f,Sn as g,gr as h};
//# sourceMappingURL=chunk-IX6MNIAK.js.map
