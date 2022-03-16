import{r as V,D as J,w as G,a as Q,P as D,o as u,c as d,b as a,d as C,u as s,k as U,F,e as L,f as x,v as E,g as X,h as g,t as S,n as Y,p as Z,i as ee,j as R,l as W,m as te,q as se,s as oe}from"./vendor.918b318e.js";const le=function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))_(i);new MutationObserver(i=>{for(const m of i)if(m.type==="childList")for(const h of m.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&_(h)}).observe(document,{childList:!0,subtree:!0});function o(i){const m={};return i.integrity&&(m.integrity=i.integrity),i.referrerpolicy&&(m.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?m.credentials="include":i.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function _(i){if(i.ep)return;i.ep=!0;const m=o(i);fetch(i.href,m)}};le();var ae=(v,w)=>{const o=v.__vccOpts||v;for(const[_,i]of w)o[_]=i;return o};const f=v=>(Z("data-v-24b89756"),v=v(),ee(),v),ne={id:"window"},re={id:"sidebar"},ie=f(()=>a("h3",null,"Collection",-1)),ce={class:"filter-group collections"},ue=f(()=>a("h3",null,"Colours",-1)),de={class:"filter-group colours"},me=["data-colour"],pe=["value","id"],fe=["for"],_e=f(()=>a("h3",null,"Rarity",-1)),he={class:"filter-group rarities"},ye=["data-rarity"],ge=["onUpdate:modelValue","value","id"],ve=["for"],we=f(()=>a("h3",null,"Name",-1)),be={class:"filter-group"},ke=f(()=>a("h3",null,"Mana Cost",-1)),Ce={class:"filter-group mana"},xe=f(()=>a("h3",null,"Keywords",-1)),Te={class:"filter-group"},Ve=f(()=>a("h3",null,"Types",-1)),Ue={class:"filter-group"},Se=f(()=>a("h3",null,"Card text",-1)),Me={class:"filter-group"},Ne=f(()=>a("h3",null,"Set",-1)),Ee={class:"filter-group"},De={id:"main"},Fe={key:0,class:"upload"},Le=f(()=>a("span",null,"+",-1)),Oe=[Le],Pe={class:"form"},Ae=f(()=>a("h3",null,"Name",-1)),Be=f(()=>a("h3",null,"Format",-1)),Ge={key:1,class:"button",for:"file-input"},Re=["disabled"],We={key:3,class:"buttons"},je={key:4,class:"progress"},Ie={key:1,class:"cards"},$e=["src"],Ke=["src"],qe=["src"],ze={class:"name"},He={setup(v){const w="https://api.scryfall.com/cards/collection",o=V({show:!1,name:null,file:null,text:null,encoding:null,format:null,active:!1,progress:0,count:0,total:0}),_=new J("mtg");_.version(1).stores({collections:"&name"});const i={Red:"R",Green:"G",Black:"B",Blue:"U",White:"W",Colourless:"C"},m=["mythic","rare","uncommon","common"],h=V({tribes:[],keywords:[],sets:[]}),c=V({colours:[],rarity:[],keywords:[],tribes:[],name:"",cardText:"",sets:[],mana:[0,20]}),O=async(n,t)=>new Promise(e=>{let r=n;if(r.sort((l,p)=>l.prices.eur?parseFloat(l.prices.eur)<parseFloat(p.prices.eur):!0),t.cardText&&t.cardText!==""){const l=new te(r,{ignoreLocation:!0,threshold:.5,findAllMatches:!0,keys:["oracle_text","card_faces.oracle_text"]});r=[],l.search(t.cardText).forEach(p=>{r.push(p.item)})}r=r.filter(l=>{if(!(!t.name||!t.name!=""||l.name.toLowerCase().includes(t.name.toLowerCase()))||!t.colours.every(b=>b==="C"?l.color_identity.length===0:(l.color_identity||[]).includes(b))||!t.keywords.every(b=>(l.keywords||[]).includes(b))||!t.tribes.every(b=>(l.type_line.toLowerCase()||"").includes(b.toLowerCase()))||!(t.rarity.length>0?[...t.rarity].includes(l.rarity):!0))return!1;let B=!0;return t.sets.length>0&&(B=t.sets.some(b=>l.set===b)),!(!B||!(l.cmc>=t.mana[0]&&l.cmc<=t.mana[1]))}),e(r.slice(0,200))});let M=[];const y=V({collections:[],value:[]});let k=V({value:""});const j=async n=>{if(n==="")return;M=(await _.collections.get({name:n})).cards,y.value=await O(M,c);const e=new Set,r=[];M.forEach(l=>{l.keywords.forEach(p=>{e.add(p)}),r[l.set]=l.set_name}),h.keywords=[...e],h.sets=Object.keys(r).map(l=>({set:l,setName:r[l]}))},I=async n=>{await _.collections.delete(n),y.collections.pop(n),k.value=y.collections.length>0?y.collections[0]:""};G(k,n=>j(n.value));let P=null;G(c,async n=>{clearTimeout(P),P=setTimeout(async()=>{y.value=await O(M,n)},500)}),_.collections.toCollection().primaryKeys().then(n=>{n.length!==0&&(y.collections=n,k.value=n[0])}),caches.open("cardDataCache").then(async n=>{const t=new Request("https://api.scryfall.com/catalog/creature-types");let e=await n.match(t);e||(await n.add(t),e=await n.match(t));const r=await e.json();h.tribes=r.data});async function $(n="",t={}){return(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}const K=async n=>{let t=await n.arrayBuffer(),e=new Uint8Array(t.slice(0,10));return e[0].toString(16)=="ff"&&e[1].toString(16)=="fe"?"UTF-16LE":e[0].toString(16)=="fe"&&e[1].toString(16)=="ff"?"UTF-16BE":e[1]==0&&e[3]==0&&e[5]==0?"UTF-16LE":"UTF-8"},q=async n=>{o.active=!0,o.progress=0;let t={};if(o.format==="MTGA"){const e=/([0-9]+) (.+) \((.+)\) ([0-9]+)/g,r=o.text.matchAll(e);for(const l of r)console.log(l),t[l[2]]={count:l[1],set:l[3],number:l[4]}}else if(o.format==="MTGO"){const e=/([0-9]+) (.+)/g,r=o.text.matchAll(e);for(const l of r)console.log(l),t[l[2]]={count:l[1],set:"",number:""}}A(t)},N=Q(null),z=async n=>{if(N.value.files.length===0)return;let t=N.value.files[0];const e=new FileReader;o.active=!0,o.progress=0;let r=null;o.format==="DragonShield Web"&&(r=H),e.onload=async()=>{let p=await r(e.result);A(p)};let l=await K(t);console.log(l),e.readAsText(t,l)};D.parsePromise=n=>new Promise((t,e)=>{D.parse(n,{header:!0,worker:!0,skipEmptyLines:!0,dynamicTyping:!0,complete:t,error:e})});const H=async n=>{n=n.replace('"sep=,"',"");let t=await D.parsePromise(n),e={};return t.data.forEach(r=>{e[r["Card Name"]]={count:0,set:r["Set Code"],number:r["Card Number"]}}),e},A=async n=>{const t=[];try{Object.keys(n).forEach(l=>{let p=n[l],T={name:l};p.set!==""&&(T.set=p.set),t.push(T)});let e=[];o.total=t.length;for(let l=0;l<t.length;l+=75){const p=await $(w,{identifiers:t.slice(l,l+75)});e=e.concat(p.data),o.count=l,o.progress=l/t.length*100,await new Promise(T=>setTimeout(T,100))}o.progress=100;let r=o.name;_.collections.put({name:r,cards:e}),y.collections.includes(r)||y.collections.push(r),k.value=r}catch{}finally{o.active=!1,o.progress=0,o.total=0,o.show=!1}};return(n,t)=>(u(),d("div",ne,[a("div",re,[ie,a("div",ce,[C(s(U),{modelValue:s(k).value,"onUpdate:modelValue":t[0]||(t[0]=e=>s(k).value=e),options:s(y).collections,mode:"single",canClear:!1},null,8,["modelValue","options"]),a("button",{class:"small add",onClick:t[1]||(t[1]=e=>s(o).show=!0)},"+"),a("button",{class:"small remove",onClick:t[2]||(t[2]=e=>I(s(k).value))},"-")]),ue,a("div",de,[(u(),d(F,null,L(i,e=>a("div",{class:R(["input-group colour",s(c).colours.includes(e)?"selected":""]),"data-colour":e,key:e},[x(a("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=r=>s(c).colours=r),value:e,id:e},null,8,pe),[[W,s(c).colours]]),a("label",{for:e,class:R("icon icon-"+e)},null,10,fe)],10,me)),64))]),_e,a("div",he,[(u(),d(F,null,L(m,e=>a("div",{class:"input-group rarity","data-rarity":e,key:e},[x(a("input",{type:"checkbox","onUpdate:modelValue":r=>s(c).rarity=r,value:e,id:e},null,8,ge),[[W,s(c).rarity]]),a("label",{for:e,class:"icon icon-logo"},null,8,ve)],8,ye)),64))]),we,a("div",be,[x(a("input",{type:"search","onUpdate:modelValue":t[4]||(t[4]=e=>s(c).name=e)},null,512),[[E,s(c).name]])]),ke,a("div",Ce,[C(s(X),{modelValue:s(c).mana,"onUpdate:modelValue":t[5]||(t[5]=e=>s(c).mana=e),min:0,max:20},null,8,["modelValue"])]),xe,a("div",Te,[C(s(U),{modelValue:s(c).keywords,"onUpdate:modelValue":t[6]||(t[6]=e=>s(c).keywords=e),options:s(h).keywords,searchable:!0,mode:"tags"},null,8,["modelValue","options"])]),Ve,a("div",Ue,[C(s(U),{modelValue:s(c).tribes,"onUpdate:modelValue":t[7]||(t[7]=e=>s(c).tribes=e),options:s(h).tribes,searchable:!0,mode:"tags","create-option":!0},null,8,["modelValue","options"])]),Se,a("div",Me,[x(a("input",{type:"search","onUpdate:modelValue":t[8]||(t[8]=e=>s(c).cardText=e)},null,512),[[E,s(c).cardText]])]),Ne,a("div",Ee,[C(s(U),{modelValue:s(c).sets,"onUpdate:modelValue":t[9]||(t[9]=e=>s(c).sets=e),options:s(h).sets,label:"setName",valueProp:"set",searchable:!0,mode:"tags"},null,8,["modelValue","options"])])]),a("div",De,[s(o).show?(u(),d("div",Fe,[a("button",{class:"small close",onClick:t[10]||(t[10]=e=>s(o).show=!1)},Oe),a("div",Pe,[Ae,x(a("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=e=>s(o).name=e)},null,512),[[E,s(o).name]]),Be,C(s(U),{modelValue:s(o).format,"onUpdate:modelValue":t[12]||(t[12]=e=>s(o).format=e),options:["DragonShield Web","DragonShield Mobile","MTGA","MTGO"],canClear:!1},null,8,["modelValue"]),["MTGA","MTGO"].includes(s(o).format)?x((u(),d("textarea",{key:0,"onUpdate:modelValue":t[13]||(t[13]=e=>s(o).text=e)},null,512)),[[E,s(o).text]]):g("",!0),["DragonShield Web","DragonShield Mobile"].includes(s(o).format)?(u(),d("label",Ge,"Choose file")):g("",!0),s(o).format==="DragonShield Web"?(u(),d("input",{key:2,id:"file-input",ref_key:"fileElem",ref:N,type:"file",disabled:s(o).active},null,8,Re)):g("",!0),!s(o).active&&s(o).format&&(s(o).text||N.value)?(u(),d("div",We,[a("button",{onClick:t[14]||(t[14]=e=>["MTGA","MTGO"].includes(s(o).format)?q():z())},"Upload")])):g("",!0),s(o).active?(u(),d("div",je,[a("span",null,"Processing cards: "+S(s(o).count)+" / "+S(s(o).total),1),a("div",{class:"bar",style:Y({width:s(o).progress+"%"})},null,4)])):g("",!0)])])):g("",!0),s(o).show?g("",!0):(u(),d("div",Ie,[(u(!0),d(F,null,L(s(y).value,e=>(u(),d("div",{class:"card",key:e.id+e.foil},[e.image_uris?(u(),d("img",{key:0,src:e.image_uris.normal},null,8,$e)):g("",!0),e.card_faces&&e.card_faces[0].image_uris?(u(),d("img",{key:1,class:"flip front",src:e.card_faces[0].image_uris.normal},null,8,Ke)):g("",!0),e.card_faces&&e.card_faces[0].image_uris?(u(),d("img",{key:2,class:"flip back",src:e.card_faces[1].image_uris.normal},null,8,qe)):g("",!0),a("p",ze,S(e.name),1),a("p",null,S(e.set_name),1),a("p",null,S(new Intl.NumberFormat("en-GB",{style:"currency",currency:"EUR"}).format(e.prices.eur)),1)]))),128))]))])]))}};var Je=ae(He,[["__scopeId","data-v-24b89756"]]);const Qe={setup(v){return(w,o)=>(u(),se(Je))}},Xe=oe(Qe);Xe.mount("#app");
