"use strict";(self.webpackChunkshowcase=self.webpackChunkshowcase||[]).push([[5233],{5233:(F,y,c)=>{c.r(y),c.d(y,{AddImageMissingGeneratedComponent:()=>w});var l=c(8027),f=c(6814),e=c(9212);function M(t,r){if(1&t&&e._UZ(0,"mgl-image",3),2&t){const a=r.$implicit;e.Q6J("id",a.id)("data",a)}}const D=()=>[0,0],d=t=>({type:"Point",coordinates:t}),h=()=>({color:"255,0,0"}),_=(t,r)=>({type:"Feature",geometry:t,properties:r}),I=()=>[50,0],C=()=>({color:"255,209,28"}),B=t=>[t,0],O=()=>({color:"242,127,32"}),T=(t,r,a)=>[t,r,a],A=t=>({type:"FeatureCollection",features:t}),E=t=>({type:"geojson",data:t}),K=()=>["get","color"],P=t=>["concat","square-rgb-",t],v=t=>({"icon-image":t});let w=(()=>{class t{constructor(){this.imagesData=[]}generateImage({id:a}){const s="square-rgb-";if(0!==a.indexOf(s))return;const o=a.replace(s,"").split(",").map(Number),i=new Uint8Array(16384);for(let p=0;p<64;p++)for(let u=0;u<64;u++){const m=4*(64*u+p);i[m+0]=o[0],i[m+1]=o[1],i[m+2]=o[2],i[m+3]=255}this.imagesData=[...this.imagesData,{id:a,width:64,height:64,data:i}]}trackByImage(a,s){return s.id}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["showcase-demo"]],standalone:!0,features:[e.jDz],decls:3,vars:42,consts:[[3,"preserveDrawingBuffer","styleImageMissing"],[3,"id","data",4,"ngFor","ngForOf","ngForTrackBy"],["id","points","type","symbol",3,"source","layout"],[3,"id","data"]],template:function(s,o){1&s&&(e.TgZ(0,"mgl-map",0),e.NdJ("styleImageMissing",function(g){return o.generateImage(g)}),e.YNc(1,M,1,2,"mgl-image",1),e._UZ(2,"mgl-layer",2),e.qZA()),2&s&&(e.Akn("https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL"),e.Q6J("preserveDrawingBuffer",!0),e.xp6(1),e.Q6J("ngForOf",o.imagesData)("ngForTrackBy",o.trackByImage),e.xp6(1),e.Q6J("source",e.VKq(35,E,e.VKq(33,A,e.kEZ(29,T,e.WLB(11,_,e.VKq(8,d,e.DdM(7,D)),e.DdM(10,h)),e.WLB(18,_,e.VKq(15,d,e.DdM(14,I)),e.DdM(17,C)),e.WLB(26,_,e.VKq(23,d,e.VKq(21,B,-50)),e.DdM(25,O))))))("layout",e.VKq(40,v,e.VKq(38,P,e.DdM(37,K)))))},dependencies:[l.Gd,f.ax,l.cu,l.TT],styles:["[_nghost-%COMP%]{display:flex;flex:1}mgl-map[_ngcontent-%COMP%]{height:100%;width:100%}"]})}return t})()}}]);