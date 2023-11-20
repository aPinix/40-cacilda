import{j as e,a as E,r as o,u as R,b as v,g as y,C as V,R as M,t as S,_ as N,S as W,B as X,c as Y,d as T,e as Z}from"./vendor-3f8K0l5V.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const x of n.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&i(x)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const Q=({children:a})=>e.jsx(e.Fragment,{children:e.jsx("main",{children:a})}),B=E(!1),$=E(null),H=E(null),A="/40-cacilda",P="lsKeyLoginCode",b={Home:"/",Login:"/login"},u={Adult:"adult",Child0To5:"child-0-5",Child5To10:"child-5-10",Child10Plus:"child-10-plus"},ee={"-5 years":u.Child0To5,"5-10 years":u.Child5To10,"10+ years":u.Child10Plus},se=a=>ee[a]||u.Adult,C=a=>a==="✅",te=a=>{const t=a.split(`
`),r=[];for(let i=1;i<t.length;i++){const s=t[i].split(","),n=s[1],x=s[2];let p=r.find(h=>h.family===n);p||(p={family:n,loginCode:x,people:[]},r.push(p));const g={name:s[0],family:n,type:se(s[10]),attending:{lunch:C(s[4]),kart:C(s[5]),dinner:C(s[6]),party:C(s[7])}};p.people.push(g)}return JSON.stringify(r,null,2)},k=a=>a.replace(/\/+/g,"/"),ae=async()=>{try{const t=await(await fetch(k(`${A}/data.txt`))).text();return JSON.parse(te(t))}catch(a){return console.error("Error fetching CSV data:",a),null}},le=a=>{o.useEffect(()=>{const t=()=>{a(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[a])},L="/40-cacilda/assets/poster-NjAcEZvU.jpg",ne="/40-cacilda/assets/call-me-OEI5LnkK.png",ie="/40-cacilda/assets/me-O6eqBYGr.png",re=()=>{const a=R(),[t]=v(B),[,r]=v($),[i]=v(H),s=o.useRef(null),n=o.useRef(null),x=o.useRef(null),[p,g]=o.useState(!1),[h,w]=o.useState(!0),f=3e3,O={force:.8,duration:f,particleCount:500,width:window.innerWidth};o.useEffect(()=>{ae().then(l=>{r(l),t?i&&(w(!1),D(!1),K(),setTimeout(()=>{I(),J(),D(!0),g(!0),setTimeout(()=>{g(!1)},f)},500)):a(b.Login)})},[r,a,t,i]);const K=()=>{},D=l=>{l?document.body.style.overflow="":document.body.style.overflow="hidden"},J=()=>{var c,d;const l=(c=s.current)==null?void 0:c.getBoundingClientRect(),m=(d=x.current)==null?void 0:d.getBoundingClientRect();if(l&&m){const F=m.height+80;y.set(".ticket-info",{y:-(m.top-l.top-l.height+F-40*2)}),y.timeline({scrollTrigger:{trigger:".ticket-info",pin:!0,start:0,end:F}});const j=Array.from(document.querySelectorAll(".section-inner"));j.map((xe,_)=>{_>0&&(y.set(j[_],{rotationX:-120}),y.timeline({scrollTrigger:{trigger:j[_],scrub:!0,start:"top",end:"+=200"}}).to(j[_],{rotationX:0},0))})}};le(()=>{I()});const I=()=>{var d;const l=window.innerHeight;document.documentElement.style.setProperty("--app-height",`${l}px`);const m=(d=s.current)==null?void 0:d.getBoundingClientRect(),c=n.current;m&&c&&(c.style.width=`${m.width-4}px`,c.style.opacity="1")},G=l=>{switch(l){case u.Child0To5:return"Criança 0-5";case u.Child5To10:return"Criança 5-10";case u.Child10Plus:return"Criança 10+";default:case u.Adult:return"Adulto"}},q=l=>{const m=/\(([^)]+)\)/;return l=l.replace(m,"").trim(),l},U=()=>{const l=k(`${A}/sounds/`),m=".mp3",d=["abasir","abre_los_hojos","agora_demora-te","alimpa-te_saraiva","arghhhh","atao_ha","banzawayyyy","ch_ch_vousen","ehhh_cacilda","ftiiiihhh","grrrrr","na_sossegas_ha","na_te_mexas","o_alcool_da_cozinha","o_socio_deves_ser_filho_de_gente_parva_ou_jovem_mete_nojo","olha_la_pa","pabadacas","pchhhteii","porque_te_chamam_cara_de_cu","sai_de_cima_da_arca_e_da_la_uma_bini","seu_estupido","sim_sim_simmmmm","ta_queeeeto","take_5","tal_nao_e_ha","tirodedo_dai","vai_haver_bolo_pa_todos","yarrrrgggg","yololooo","zomus"].map(j=>`${l}${j}${m}`),z=d[Math.floor(Math.random()*d.length)];new Audio(z).play()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"image-body pointer-events-none z-[9999]",children:p?e.jsx("div",{className:"absolute left-1/2 top-1/4 z-[99999]",children:e.jsx(V,{...O})}):null}),e.jsx("div",{className:"instructions",children:"Scroll"}),e.jsx("div",{className:"section ticket-cover",children:e.jsxs("div",{className:"cover",children:[e.jsx("img",{className:"movie-poster block h-full w-full rounded-xl object-cover",ref:s,src:L,alt:"Poster Image"}),e.jsx("img",{className:"movie-poster-shadow block h-full w-full rounded-xl object-cover",ref:s,src:L,alt:"Poster Image"})]})}),h?null:e.jsx(e.Fragment,{children:e.jsx("div",{className:"section ticket-info",children:e.jsxs("div",{ref:n,className:"movie-info",children:[i?e.jsxs("div",{ref:x,className:"section-inner flex flex-col gap-4 bg-slate-50",children:[e.jsxs("div",{className:"pb-6 text-3xl",children:["Convite",i.people.length>1?"s":""]}),i.people.map((l,m)=>e.jsxs(M.Fragment,{children:[m!==0?e.jsx("hr",{className:"py-2"}):null,e.jsxs("div",{children:[e.jsxs("div",{className:"info mid",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"label",children:"Nome"}),e.jsx("div",{className:"value",children:q(l.name)})]}),e.jsx("div",{className:"time !text-sm !text-slate-400",children:G(l.type)})]}),e.jsx("div",{className:"py-2"}),e.jsx("div",{className:"info info-regular small",children:Object.entries(l.attending).map(([c,d])=>e.jsxs(M.Fragment,{children:[c==="lunch"?e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"label text-xs sm:text-sm",children:"Almoço"}),e.jsx("div",{className:"value flex items-center justify-center",children:e.jsx("div",{className:`inline-flex h-4 w-4 rounded-full border-2 ${d?"border-lime-500 bg-lime-400":"border-slate-300 bg-slate-200"}`})})]}):null,c==="kart"?e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"label text-xs sm:text-sm",children:"Karts"}),e.jsx("div",{className:"value flex items-center justify-center",children:e.jsx("div",{className:`inline-flex h-4 w-4 rounded-full border-2 ${d?"border-lime-500 bg-lime-400":"border-slate-300 bg-slate-200"}`})})]}):null,c==="dinner"?e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"label text-xs sm:text-sm",children:"Jantar"}),e.jsx("div",{className:"value flex items-center justify-center",children:e.jsx("div",{className:`inline-flex h-4 w-4 rounded-full border-2 ${d?"border-lime-500 bg-lime-400":"border-slate-300 bg-slate-200"}`})})]}):null,c==="party"?e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"label text-xs sm:text-sm",children:"Festa"}),e.jsx("div",{className:"value flex items-center justify-center",children:e.jsx("div",{className:`inline-flex h-4 w-4 rounded-full border-2 ${d?"border-lime-500 bg-lime-400":"border-slate-300 bg-slate-200"}`})})]}):null]},c))})]},l.name)]},l.name))]}):null,e.jsxs("div",{className:"section-inner flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2 pb-6",children:[e.jsx("div",{className:"text-3xl",children:"Programação"}),e.jsx("span",{className:"inline-flex items-center justify-center self-start rounded-lg bg-lime-600 px-[6px] py-[3px] text-base font-medium text-slate-50",children:"Dia 25 Nov"})]}),e.jsxs("div",{className:"info mid",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"label",children:"Almoço"}),e.jsx("div",{className:"value",children:'Restaurante "À do Mário"'}),e.jsx("div",{className:"address",children:"R. do Electricista 8, Évora"}),e.jsx("div",{className:"time",children:e.jsx("span",{className:"inline-flex items-center justify-center rounded-lg bg-slate-400 px-[6px] py-[3px] text-sm font-medium text-slate-50",children:"13:00"})})]}),e.jsx("div",{className:"art",children:e.jsx("div",{className:"relative flex h-[100px] w-[100px] justify-center overflow-hidden rounded-2xl border border-slate-300",children:e.jsx("div",{className:"w-[calc(120px - 1px)] absolute bottom-0 flex",children:e.jsx("iframe",{className:"h-[120px] w-[420px] rounded-2xl border-none",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10860.400349856982!2d-7.9039452893367095!3d38.583744369478715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19e5032063ec97%3A0x508a9ec8f62895f2!2sRestaurante%20%C3%80%20do%20M%C3%A1rio!5e0!3m2!1sen!2spt!4v1700448713041!5m2!1sen!2spt",loading:"lazy"})})})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"info mid",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"label",children:"Prova de Karts"}),e.jsx("div",{className:"value",children:"Karting de Évora"}),e.jsx("div",{className:"address",children:"Estrada Nacional 114 - Km 182,9, 7000 Évora"}),e.jsx("div",{className:"time",children:e.jsx("span",{className:"inline-flex items-center justify-center rounded-lg bg-slate-400 px-[6px] py-[3px] text-sm font-medium text-slate-50",children:"16:40"})})]}),e.jsx("div",{className:"art",children:e.jsx("div",{className:"relative flex h-[100px] w-[100px] justify-center overflow-hidden rounded-2xl border border-slate-300",children:e.jsx("div",{className:"w-[calc(120px - 1px)] absolute bottom-0 flex",children:e.jsx("iframe",{className:"h-[120px] w-[420px] rounded-2xl border-none",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3119.3069093513545!2d-7.9872814!3d38.5727797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19efbe7024d61b%3A0xf52d8cf02cd85550!2sKarting%20Evora!5e0!3m2!1sen!2spt!4v1700449791429!5m2!1sen!2spt",loading:"lazy"})})})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"info mid",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"label",children:"Jantar"}),e.jsx("div",{className:"value",children:"Armazém8"}),e.jsx("div",{className:"address",children:"R. do Electricista 8, Évora"}),e.jsx("div",{className:"time",children:e.jsx("span",{className:"inline-flex items-center justify-center rounded-lg bg-slate-400 px-[6px] py-[3px] text-sm font-medium text-slate-50",children:"20:00"})})]}),e.jsx("div",{className:"art",children:e.jsx("div",{className:"relative flex h-[100px] w-[100px] justify-center overflow-hidden rounded-2xl border border-slate-300",children:e.jsx("div",{className:"w-[calc(120px - 1px)] absolute bottom-0 flex",children:e.jsx("iframe",{className:"h-[120px] w-[420px] rounded-2xl border-none",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.5840333038286!2d-7.909684800000002!3d38.5433558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19fb2f514c5d9d%3A0x4b6624f04a5d0bb1!2sArmaz%C3%A9m%208!5e0!3m2!1sen!2spt!4v1700451717728!5m2!1sen!2spt",loading:"lazy"})})})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"info mid",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"label",children:"🎉 Festa"}),e.jsx("div",{className:"value",children:"Armazém8"}),e.jsx("div",{className:"address",children:"R. do Electricista 8, Évora"}),e.jsx("div",{className:"time",children:e.jsx("span",{className:"inline-flex items-center justify-center rounded-lg bg-slate-400 px-[6px] py-[3px] text-sm font-medium text-slate-50",children:"21:30"})})]}),e.jsx("div",{className:"art",children:e.jsx("div",{className:"relative flex h-[100px] w-[100px] justify-center overflow-hidden rounded-2xl border border-slate-300",children:e.jsx("div",{className:"w-[calc(120px - 1px)] absolute bottom-0 flex",children:e.jsx("iframe",{className:"h-[120px] w-[420px] rounded-2xl border-none",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.5840333038286!2d-7.909684800000002!3d38.5433558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19fb2f514c5d9d%3A0x4b6624f04a5d0bb1!2sArmaz%C3%A9m%208!5e0!3m2!1sen!2spt!4v1700451717728!5m2!1sen!2spt",loading:"lazy"})})})})]})]}),e.jsxs("div",{className:"section-inner section-inner--enjoy section-inner--no-pad--bottom !bg-lime-200",children:[e.jsx("div",{className:"title !text-green-600",children:"Se precisares de ligar!"}),e.jsx("div",{className:"made",children:e.jsx("a",{href:"tel:+351969163736",children:e.jsx("img",{className:"!h-28 !w-28",src:ne,alt:"Call Me"})})})]}),e.jsx("div",{className:"section-inner section-inner--enjoy section-inner--no-pad--bottom !border-none !bg-transparent !pt-0",children:e.jsx("img",{className:"rotate-180",src:ie,alt:"Me",onClick:U})})]})})})]})};class oe extends M.Component{constructor(t){super(t),this.state={isModalOpen:!1},this.setIsModalOpen=this.setIsModalOpen.bind(this),this.closeModal=this.closeModal.bind(this),this.openModal=this.openModal.bind(this)}componentDidMount(){this.modalStartsOpen()}modalStartsOpen(){let t=!1,r=500;typeof this.props.startsOpen=="boolean"?t=this.props.startsOpen:r=this.props.startsOpen,this.props.startsOpen&&(t=!0),setTimeout(()=>{this.setIsModalOpen(t)},r)}closeModal(){this.setIsModalOpen(!1)}openModal(){this.setIsModalOpen(!0)}setIsModalOpen(t){this.setState({isModalOpen:t})}render(){return e.jsx(e.Fragment,{children:e.jsx(S,{appear:!0,show:this.state.isModalOpen,as:o.Fragment,children:e.jsxs(N,{as:"div",className:"relative z-10",onClose:()=>{this.props.closeOnBackdropClick&&this.closeModal()},children:[(this.props.hasBackdrop||!1)&&e.jsx("div",{className:"fixed inset-0 bg-slate-900/50","aria-hidden":"true"}),e.jsx(S.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:e.jsx(S.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(N.Panel,{className:"flex w-full max-w-sm transform flex-col transition-all",children:[e.jsxs("div",{className:`${this.props.children?"rounded-bl-none rounded-br-none border-b-0 pb-10":""} flex transform flex-col items-center gap-6 overflow-hidden rounded-3xl border border-slate-50/10 bg-slate-800/50 px-10 py-16 text-slate-50 shadow-xl backdrop-blur-[20px] backdrop-saturate-[180%] transition-all`,children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[this.props.title?e.jsx(N.Title,{as:"h3",className:"flex justify-center text-center text-3xl font-bold",children:this.props.title}):null,this.props.body?e.jsx("div",{className:"flex flex-col gap-1",children:this.props.body.split("\\n").map(t=>e.jsx(N.Description,{className:"flex flex-col items-center text-center leading-tight text-white/50",children:t},t))}):null]}),this.props.extra?e.jsx(N.Description,{className:"flex flex-col items-center text-center text-5xl leading-relaxed drop-shadow-xl",children:this.props.extra}):null]}),this.props.children?e.jsx("div",{className:"flex w-full empty:hidden",children:this.props.children}):null]})})})})]})})})}}const ce=()=>{const[,a]=v(B),[t]=v($),[,r]=v(H),[i,s]=o.useState(""),[n,x]=o.useState(!0),p=R();o.useEffect(()=>{if(!t)p(b.Home);else{x(!1);const h=localStorage.getItem(P);h&&s(h)}},[p,t,a]);const g=h=>{h.preventDefault();const w=t||[];if(w){const f=w.find(O=>O.loginCode===i);f&&(r(f),f.loginCode&&localStorage.setItem(P,f.loginCode),a(!0),p(b.Home))}};return e.jsx(e.Fragment,{children:n?null:e.jsx(oe,{title:"Insere o Código",body:"Vê se descobres a 'Surpresa'\\n(dica em baixo)",extra:"👆 + 🔊 = 😆",startsOpen:!0,children:e.jsxs("form",{className:"translucent flex w-full flex-col rounded-b-3xl",onSubmit:g,children:[e.jsx("input",{className:"input w-full text-center",type:"text",value:i,onChange:h=>s(h.target.value),placeholder:"Enter code"}),e.jsx("button",{className:"btn !rounded-b-3xl !rounded-t-none",type:"submit",disabled:i.trim()==="",children:"Submit"})]})})})},de=()=>{const a=R();return o.useEffect(()=>{setTimeout(()=>{a(b.Home)},1e3)},[a]),e.jsx(e.Fragment,{})},me=()=>(y.registerPlugin(W),e.jsx(e.Fragment,{children:e.jsx(Q,{children:e.jsx(X,{basename:A,children:e.jsxs(Y,{children:[e.jsx(T,{path:b.Home,element:e.jsx(re,{})}),e.jsx(T,{path:b.Login,element:e.jsx(ce,{})}),e.jsx(T,{path:"*",element:e.jsx(de,{})})]})})})}));Z.createRoot(document.getElementById("root")).render(e.jsx(me,{}));
