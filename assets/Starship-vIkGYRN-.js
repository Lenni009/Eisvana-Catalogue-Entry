import{d as A,u as C,s as I,h as c,i as u,b,e,j as t,v as k,k as a,l as o,m as w,f as v,o as E,p as y,g as L,n as V,_ as N}from"./index-enPHvSLa.js";import{_ as $}from"./EconomySelect.vue_vue_type_script_setup_true_lang-loyyKVVv.js";import{_ as B,a as D}from"./LocationPlanetInput.vue_vue_type_script_setup_true_lang-R64a1SAx.js";import{_ as T}from"./ClassSelect.vue_vue_type_script_setup_true_lang-ibuJNFQF.js";const g=e=>(y("data-v-3e2e08e7"),e=e(),L(),e),F={class:"input-group"},H=g((()=>e("label",{class:"required"},"Ship Type",-1))),M=V('<option value="Fighter" data-v-3e2e08e7>Fighter</option><option value="Explorer" data-v-3e2e08e7>Explorer</option><option value="Hauler" data-v-3e2e08e7>Hauler</option><option value="Shuttle" data-v-3e2e08e7>Shuttle</option><option value="Exotic" data-v-3e2e08e7>Exotic</option><option value="Solar" data-v-3e2e08e7>Solar</option><option value="Living Ship" data-v-3e2e08e7>Living Ship</option><option value="Interceptor" data-v-3e2e08e7>Interceptor</option>',8),U=[M],j={class:"checkbox-wrapper"},q=g((()=>e("label",{for:"crashed"},"Crashed",-1))),R=A({__name:"Starship",setup(i){const l=C(),{shipType:s,isCrashed:p,economy:n,coordinates:r,locationName:d,tier:_}=I(l),h=c((()=>["Interceptor","Living Ship"].includes(s.value.value))),m=c((()=>h.value||p.value.value)),g=c((()=>"Living Ship"===s.value.value));return u((()=>n.value.isActive=!g.value)),u((()=>{r.value.isActive=m.value,d.value.isActive=m.value})),u((()=>_.value.isActive=p.value.value&&!g.value)),(i,l)=>(E(),b("div",F,[e("div",null,[H,t(e("select",{"onUpdate:modelValue":l[0]||(l[0]=e=>a(s).value=e)},U,512),[[k,a(s).value]])]),t(e("div",j,[q,t(e("input",{id:"crashed",type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=e=>a(p).value=e)},null,512),[[w,a(p).value]])],512),[[o,!h.value]]),t(e("div",null,[v($)],512),[[o,a(n).isActive]]),t(e("div",null,[v(B)],512),[[o,a(d).isActive]]),t(e("div",null,[v(D)],512),[[o,a(r).isActive]]),t(e("div",null,[v(T)],512),[[o,a(_).isActive]])]))}}),P=N(R,[["__scopeId","data-v-3e2e08e7"]]);export{P as default};
