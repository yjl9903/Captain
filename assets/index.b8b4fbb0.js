`+p.captains.map(u=>`${u.uid},${u.username},${u.type}`).join(`
`))},y=p=>{const r=I(p.date,"yyyy\u5E74MM\u6708dd\u65E5");fn(`${r}\u8230\u957F\u65E5\u62A5.xlsx`,r,p.captains)};return(p,r)=>{const u=F("c-button"),A=F("router-view");return c(),z("div",On,[e("div",on,[e("div",vn,[e("div",null,[Pn,e("span",null,x(i(I)(i(s).date,"yyyy \u5E74 M \u6708 d \u65E5")),1)]),e("div",Gn,[i(qe)?(c(),je(u,{key:0,success:"",onClick:r[0]||(r[0]=M=>a.value="roll"),mr:"2"},{default:K(()=>[Tn]),_:1})):w("",!0),J(u,{success:"",onClick:r[1]||(r[1]=M=>d(i(s))),mr:"2"},{default:K(()=>[Sn]),_:1}),J(u,{success:"",onClick:r[2]||(r[2]=M=>y(i(s)))},{default:K(()=>[bn]),_:1})]),e("div",Hn,[J(i(ze),{modelValue:i(n),"onUpdate:modelValue":r[3]||(r[3]=M=>ce(n)?n.value=M:null),"available-dates":{start:i(T)[i(T).length-1].date,end:i(T)[0].date},attributes:[{dates:i(s).date,highlight:!0}],onClick:r[4]||(r[4]=M=>a.value="day")},null,8,["modelValue","available-dates","attributes"])])])]),e("div",Kn,[J(A)])])}}});const Fn={class:"flex justify-center select-none"},Bn=["onClick"],gn=H({props:{now:null,colors:null,getColor:null,getTooltip:null},emits:["click"],setup(m,{emit:k}){const s=m,a=t=>t.getDay()||7;function n(t){return t!=null}function d(t){return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}const y=["rgb(235,237,240)","rgb(155,233,168)","rgb(64,196,99)","rgb(48,161,78)","rgb(33,110,57)"],{now:p,colors:r,getColor:u,getTooltip:A}=ue(s),M=l(()=>{var t;return(t=r==null?void 0:r.value)!=null?t:y}),f=["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"],O=b(null),o=b(Array(53*7).fill(null)),C=l(()=>O.value===null?16:Math.max(O.value.clientWidth/53-4.5,16)),X=l(()=>C.value+"px"),L=l(()=>{if(O.value===null)return"1.0";{const t=Math.max(O.value.clientWidth/53-4.5,16);return`scale(${Math.min(1,(t-4)/12)})`}});Ye(()=>{const t=O.value;if(t.scrollLeft!==t.scrollWidth&&t.scrollTo(t.scrollWidth,0),n(A.value))for(const Y of o.value){if(!Y)continue;const j=d(V.value(Y.week,Y.day)),v=A.value(j);ee(Y.el,{content:v})}});const g=l(()=>{var t;return(t=i(p))!=null?t:new Date});N(g,()=>{if(n(A.value))for(const t of o.value){if(!t)continue;const Y=d(V.value(t.week,t.day)),j=A.value(Y);"_tippy"in t.el?t.el._tippy.setContent(j):ee(t.el,{content:j})}});const V=l(()=>(t,Y,j=!1)=>{const v=a(g.value)+364-((t-1)*7+Y),E=new Date(g.value.getTime()-v*1e3*3600*24);return j&&k("click",E),E}),_=l(()=>t=>{const Y=V.value(t,7);return Y.getDate()<=7&&Y.getTime()<=g.value.getTime()?["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"][Y.getMonth()]:null}),ye=l(()=>(t,Y)=>{var E;const j=d(V.value(t,Y)),v=Math.max(0,Math.min(M.value.length-1,(E=u.value(j))!=null?E:0));return M.value[v]});return(t,Y)=>(c(),z("div",Fn,[e("div",{class:"relative",style:P({width:2*i(C)+"px"})},[(c(),z(R,null,U(7,j=>e("div",{key:j,class:"absolute flex items-center",style:P({height:i(X),top:(i(C)+4)*j+2+"px",right:"4px"})},[e("span",{class:"inline-block h-full !align-middle",style:P({fontSize:"12px",transform:i(L)})},x(f[j-1]),5)],4)),64))],4),e("div",{ref_key:"container",ref:O,class:"mb-4 w-full text-left whitespace-nowrap pb-[4px] overflow-x-auto"},[(c(),z(R,null,U(53,j=>{var v;return e("div",{key:j,class:"inline-grid grid-rows-7 gap-[4px] ml-[4px]",style:P({width:i(X)})},[e("div",{class:ie([i(_)(j)?"":"text-transparent","relative"]),style:P({height:i(X)})},[e("span",{class:"inline-block absolute",style:P({fontSize:"12px",transform:i(L)})},x((v=i(_)(j))!=null?v:"\u4E00"),5)],6),(c(),z(R,null,U(7,E=>e("div",{key:E,style:P({height:i(X)})},[re(e("div",{class:"w-full h-full rounded bg-[#ebedf0] border-[rgba(27,31,35,0.06)] cursor-pointer",onClick:Z=>i(V)(j,E,!0),style:P({backgroundColor:i(ye)(j,E)}),ref_for:!0,ref:Z=>Z&&(o.value[j*7+E]={el:Z,week:j,day:E})},null,12,Bn),[[Me,j<53||E<=a(i(g))]])],4)),64))],4)}),64))],512)]))}}),Vn={key:0},Un=["href"],Xn=H({setup(m){const k=W(),s=q(),a=b();N(()=>k.params,r=>{const u=Array.isArray(r.user)?r.user[0]:r.user;if(/\d/.test(u))a.value=G.get(u)||G.get(+u);else{for(const A of h)A.username===u&&(a.value=A);if(!a.value)for(const A of h)A.username.indexOf(u)!==-1&&(a.value=A)}a.value||s.push({name:"Record"})},{immediate:!0});const n=b(new Date),d=r=>{var A;return(A=a.value)!=null&&A.days.has(r)?1:0},y=r=>`${r}`,p=r=>{s.push({name:"RecordDay",params:{year:""+r.getFullYear(),month:""+(r.getMonth()+1),day:""+r.getDate()}})};return(r,u)=>a.value?(c(),z("div",Vn,[e("h2",null,[e("a",{href:`https://space.bilibili.com/${a.value.uid}`},x(a.value.username),9,Un)]),e("p",null,"\u966A\u4F34\u4E86 "+x(i(S).name)+" "+x(a.value.length)+" \u5929\u3002",1),J(gn,{onClick:p,now:n.value,getColor:d,getTooltip:y},null,8,["now"])])):w("",!0)}}),qn={id:"record",class:"list",w:"full",overflow:"auto"},Nn={mt:"1"},Cn={rounded:"",border:"","border-collapse":"",w:"full"},Zn=e("thead",null,[e("tr",{bg:"light-300"},[e("th",{text:"center"},"#"),e("th",null,"UID"),e("th",null,"\u7528\u6237\u540D"),e("th",{text:"center"},"\u7C7B\u578B")])],-1),Qn={text:"center"},hn={text:"center"},ae=H({setup(m){const k=W(),s=q(),a=ke();return N(()=>k.params,n=>{if(n.year&&n.month&&n.day){const d=Q(+n.year,+n.month,+n.day);d?a.value=d:s.replace({name:"Record"})}},{immediate:!0}),(n,d)=>{const y=F("router-link");return c(),z("div",qn,[e("h2",Nn,x(i(I)(i(a).date,"yyyy \u5E74 M \u6708 d \u65E5"))+" \u8230\u957F\u65E5\u62A5",1),e("table",Cn,[Zn,e("tbody",null,[(c(!0),z(R,null,U(i(a).captains,(p,r)=>(c(),z("tr",{key:p.uid},[e("td",Qn,x(r+1),1),e("td",null,x(p.uid),1),e("td",null,[J(y,{to:{name:"Captain",params:{user:p.uid}}},{default:K(()=>[B(x(p.username),1)]),_:2},1032,["to"])]),e("td",hn,x(p.type),1)]))),128))])])])}}}),wn={id:"summary",class:"list",w:"full",overflow:"auto"},Wn=e("h2",{mt:"1"},"\u8230\u957F\u603B\u89C8",-1),Dn={rounded:"",border:"","border-collapse":"",w:"full"},Ln=e("thead",null,[e("tr",{bg:"light-300"},[e("th",{text:"center"},"#"),e("th",null,"UID"),e("th",null,"\u7528\u6237\u540D"),e("th",{text:"center"},"\u5929\u6570"),e("th",{text:"center"},"\u6708\u4EFD")])],-1),_n={text:"center"},$n={text:"center"},ea={text:"center"},na=H({setup(m){return(k,s)=>{const a=F("router-link");return c(),z("div",wn,[Wn,e("table",Dn,[Ln,e("tbody",null,[(c(!0),z(R,null,U(i(h),(n,d)=>(c(),z("tr",{key:n.uid},[e("td",_n,x(d+1),1),e("td",null,x(n.uid),1),e("td",null,[J(a,{to:{name:"Captain",params:{user:n.uid}}},{default:K(()=>[B(x(n.username),1)]),_:2},1032,["to"])]),e("td",$n,x(n.length),1),e("td",ea,x(n.months.size),1)]))),128))])])])}}}),aa=Ie({history:Ee(),routes:[{path:"/",name:"Home",component:Rn,children:[{path:"",alias:"/",name:"Record",component:ae},{path:"/summary",name:"Summary",component:na,meta:{pos:"#summary"}},{path:"/roll",name:"Roll",component:()=>Jn(()=>import("./Roll.1c35ad00.js"),["assets/Roll.1c35ad00.js","assets/Roll.21a85d38.css","assets/vendor.db3a67d2.js"]),meta:{pos:"#roll"}},{path:"/:year/:month/:day",name:"RecordDay",component:ae,meta:{pos:"#record"}}]},{path:"/captain/:user",name:"Captain",component:Xn}],scrollBehavior(m,k,s){return m.meta.pos?{el:m.meta.pos}:s||{top:0}}});Je(Yn).component("c-button",Mn).use(aa).mount("#app");export{qe as g,ke as u};