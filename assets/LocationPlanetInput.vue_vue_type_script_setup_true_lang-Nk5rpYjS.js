import{d as u,u as d,s as c,n as y,z as V,h as g,b as p,F as m,e as l,i as v,c as x,q as I,j as o,y as f,w as k,E as D,a as N,o as i,t as T,x as h}from"./index-bpuBg-5R.js";const w=["aria-invalid"],b=u({__name:"CoordinateInput",setup(a){const e=d(),{coordinates:t,isValidCoords:n}=c(e),s=y(!0),u=()=>s.value=n.value;return V((()=>u())),g((()=>t.value.isValid=n.value)),(a,e)=>(i(),p(m,null,[e[2]||(e[2]=l("label",{class:"required",for:"coordInput"},"Planetary Coordinates",-1)),v(l("input",{"aria-invalid":!s.value||void 0,id:"coordInput",placeholder:"+0.00, -0.00",type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>o(t).value=a),onChange:u},null,40,w),[[f,o(t).value]]),s.value?I("",!0):(i(),x(D,{key:0},{default:k((()=>e[1]||(e[1]=[N("Invalid coordinate format")]))),_:1}))],64))}}),B={class:"required",for:"locInput"},q=u({__name:"LocationPlanetInput",props:{locationType:{default:"planet"}},setup(a){const e=d(),{locationName:t}=c(e);return(a,e)=>(i(),p(m,null,[l("label",B,T(o(h)(a.locationType))+" Name",1),v(l("input",{type:"text",id:"locInput","onUpdate:modelValue":e[0]||(e[0]=a=>o(t).value=a)},null,512),[[f,o(t).value]])],64))}});export{q as _,b as a};
