import{i as L,m as T,n as q,q as D,r as I}from"./chunk-ZQSDTL6R.js";import{Ab as c,Rb as F,Tb as k,Xa as o,Yb as b,Zb as h,_b as w,ia as S,mb as $,nb as m,ob as a,rb as P,sa as v,wc as x,yb as u,yc as O,zb as f}from"./chunk-L2OPCR2R.js";import"./chunk-SFFPZX3Y.js";var E=i=>({font:i}),j=i=>({fill:i});function A(i,r){if(i&1&&(v(),c(0,"path",4)),i&2){let g=r.$implicit;a("ngStyle",w(2,j,g.fill)),m("d",g.d)}}var B=()=>[.3],G=()=>[0,20],z=()=>["!=","cluster",!0];function N(i,r){if(i&1&&c(0,"showcase-cluster-point",6),i&2){let g=r.$implicit;a("properties",g.properties)}}var R=(()=>{let r=class r{ngOnInit(){let n=[],e=[this.properties.mag1,this.properties.mag2,this.properties.mag3,this.properties.mag4,this.properties.mag5],t=0;for(let s=0;s<e.length;s++)n.push(t),t+=e[s];let l=t>=1e3?22:t>=100?20:t>=10?18:16;this.font=`${l}px sans-serif`,this.r=t>=1e3?50:t>=100?32:t>=10?24:18,this.r0=Math.round(this.r*.6),this.w=this.r*2,this.viewbox=`0 0 ${this.w} ${this.w}`,this.textTransform=`translate(${this.r}, ${this.r})`,this.segments=[];for(let s=0;s<e.length;s++)this.segments.push(this.donutSegment(n[s]/t,(n[s]+e[s])/t,p[s]));this.totalString=t.toLocaleString()}donutSegment(n,e,t){e-n===1&&(e-=1e-5);let l=2*Math.PI*(n-.25),s=2*Math.PI*(e-.25),d=Math.cos(l),y=Math.sin(l),M=Math.cos(s),_=Math.sin(s),C=e-n>.5?1:0;return{d:`M ${this.r+this.r0*d} ${this.r+this.r0*y} L ${this.r+this.r*d} ${this.r+this.r*y} A ${this.r} ${this.r} 0 ${C} 1 ${this.r+this.r*M} ${this.r+this.r*_} L ${this.r+this.r0*M} ${this.r+this.r0*_} A ${this.r0} ${this.r0} 0 ${C} 0 ${this.r+this.r0*d} ${this.r+this.r0*y}`,fill:t}}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=S({type:r,selectors:[["showcase-cluster-point"]],inputs:{properties:"properties"},standalone:!0,features:[b],decls:5,vars:12,consts:[["text-anchor","middle",3,"ngStyle"],[3,"ngStyle",4,"ngFor","ngForOf"],["fill","white"],["dominant-baseline","central"],[3,"ngStyle"]],template:function(e,t){e&1&&(v(),u(0,"svg",0),$(1,A,1,4,"path",1),c(2,"circle",2),u(3,"text",3),F(4),f()()),e&2&&(a("ngStyle",w(10,E,t.font)),m("width",t.w)("height",t.w)("viewbox",t.viewbox),o(),a("ngForOf",t.segments),o(),m("cx",t.r)("cy",t.r)("r",t.r0),o(),m("transform",t.textTransform),o(),k(" ",t.totalString," "))},dependencies:[O,x],encapsulation:2});let i=r;return i})(),p=["#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c"],J=(()=>{let r=class r{constructor(){let n=["<",["get","mag"],2],e=["all",[">=",["get","mag"],2],["<",["get","mag"],3]],t=["all",[">=",["get","mag"],3],["<",["get","mag"],4]],l=["all",[">=",["get","mag"],4],["<",["get","mag"],5]],s=[">=",["get","mag"],5];this.clusterProperties={mag1:["+",["case",n,1,0]],mag2:["+",["case",e,1,0]],mag3:["+",["case",t,1,0]],mag4:["+",["case",l,1,0]],mag5:["+",["case",s,1,0]]},this.circlePaint={"circle-color":["case",n,p[0],e,p[1],t,p[2],l,p[3],p[4]],"circle-opacity":.6,"circle-radius":12},this.labelLayout={"text-field":["number-format",["get","mag"],{"min-fraction-digits":1,"max-fraction-digits":1}],"text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-size":10},this.labelPaint={"text-color":["case",["<",["get","mag"],3],"black","white"]}}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=S({type:r,selectors:[["showcase-demo"]],standalone:!0,features:[b],decls:6,vars:17,consts:[[3,"zoom","center","preserveDrawingBuffer"],["id","earthquakes","data","https://maplibre.org/maplibre-gl-js/docs/assets/earthquakes.geojson",3,"cluster","clusterRadius","clusterProperties"],["source","earthquakes"],["mglClusterPoint",""],["id","earthquake_circle","type","circle","source","earthquakes",3,"filter","paint"],["id","earthquake_label","type","symbol","source","earthquakes",3,"filter","layout","paint"],[3,"properties"]],template:function(e,t){e&1&&(u(0,"mgl-map",0),c(1,"mgl-geojson-source",1),u(2,"mgl-markers-for-clusters",2),$(3,N,1,1,"ng-template",3),f(),c(4,"mgl-layer",4)(5,"mgl-layer",5),f()),e&2&&(P("https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL"),a("zoom",h(13,B))("center",h(14,G))("preserveDrawingBuffer",!0),o(),a("cluster",!0)("clusterRadius",80)("clusterProperties",t.clusterProperties),o(3),a("filter",h(15,z))("paint",t.circlePaint),o(),a("filter",h(16,z))("layout",t.labelLayout)("paint",t.labelPaint))},dependencies:[q,L,I,D,R,T],styles:[`[_nghost-%COMP%]{display:flex;flex:1}mgl-map[_ngcontent-%COMP%]{height:100%;width:100%}
/*# sourceMappingURL=examples-UPBTEGPO.css.map */`]});let i=r;return i})();export{J as ClusterHtmlComponent,R as ClusterPointComponent};
//# sourceMappingURL=chunk-4AMPPHN2.js.map
