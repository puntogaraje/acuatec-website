// Acuatec Waterproofing Services - services tabs, problem selector, quote form, lightbox, mobile menu.
const PORTRAIT=new Set(["003-004", "017-070", "n011-036", "n014-062"]);
const IMG=k=>(window.__IMGS&&window.__IMGS[k])||"assets/img/thumbs/"+k+".webp";
const FULL=k=>(window.__IMGS&&window.__IMGS[k])||"assets/img/"+k+".webp";
const SV=[
{n:"Waterproofing",i:[
{t:"Integral Waterproofing",d:"CWS Admix is added to the concrete at the batch plant or on the truck at site, so the concrete you pour is waterproof throughout. Simple fixed dosage of 0.8 kg per cubic meter; complies with EN 12390-8.",g:["n011-035","n011-036","n011-038"]},
{t:"Torch-Applied Membrane",d:"Heat-applied membrane systems installed on roof decks, pits, tanks, planter areas and water features.",g:["012-038","012-042","012-044","012-045","012-039","012-040","012-043","012-037"]},
{t:"Cold-Applied Application",l:["Cementitious waterproofing","Flexible cementitious waterproofing","Polyurethane (exposed / non-exposed)","Epoxy tank lining (food grade)"],g:["013-046","013-047","013-048","013-049","013-050","013-051","013-053","013-054"]},
{t:"Spray-Applied Waterproofing",d:"CWS100, a liquid calcium silicate hydrate gel sprayed onto concrete. It forms a barrier inside the concrete and seals static cracks up to 2.2 mm.",g:["n014-058","n014-062","n014-059","n014-060"]}]},
{n:"Flooring",i:[
{t:"Epoxy Floor Coating",d:"Durable, easy-to-clean floors for factories, warehouses, offices, parking areas and more.",g:["016-069","017-070","018-074","018-075","018-076","018-072"]},
{t:"Polyurethane Floor Coating",g:["019-077","019-078","019-079"]},
{t:"Rubberized Floor Coating",d:"Used on school gymnasiums and sports courts.",g:["019-080","019-081","019-082"]},
{t:"Concrete Floor Polishing",g:["020-083","020-089","020-091","020-092","020-085","020-093"]}]},
{n:"Repair & Other",i:[
{t:"Concrete Crack Injection Repair",g:["022-103","022-104","022-105"]},
{t:"Rectification Works",d:"Before-and-after restoration of exterior walls and roof terraces.",g:["n022-108","n022-109"]},
{t:"Painting Works",g:["022-106","022-107","022-108"]}]}];
const tb=document.getElementById("svt"),bd=document.getElementById("svb");
function gal(a,t){return '<div class="gal">'+a.map(k=>'<img src="'+IMG(k)+'" data-full="'+FULL(k)+'"'+(PORTRAIT.has(k)?' class="p"':'')+' alt="'+t+' project photo" loading="lazy" decoding="async">').join('')+'</div>'}
function showS(j){[...tb.children].forEach((b,x)=>b.classList.toggle("on",x==j));
bd.innerHTML=SV[j].i.map(s=>'<div class="sv"><h3>'+s.t+'</h3>'+(s.d?'<p style="color:var(--mu);margin-top:0">'+s.d+'</p>':'')+(s.l?'<ul>'+s.l.map(x=>'<li>'+x+'</li>').join('')+'</ul>':'')+gal(s.g,s.t)+'</div>').join('')}
SV.forEach((s,j)=>{const b=document.createElement("button");b.type="button";b.textContent=s.n;b.onclick=()=>showS(j);tb.append(b)});
const D={"Stains or drips on the ceiling":["Roof or slab waterproofing","Torch-applied membrane, cold-applied systems or a spray-applied sealer, chosen after we inspect the roof deck or slab."],
"Leaks from a bathroom or balcony above":["Cold-applied waterproofing","Cementitious or polyurethane systems suit wet areas, balconies and planter boxes."],
"Damp or peeling walls":["Wall waterproofing","Exterior and retaining walls can be treated with cold-applied or spray-applied systems, with painting works as needed."],
"Wet basement or leaking tank":["Below-grade and tank waterproofing","Membranes, cementitious systems or epoxy tank lining (food grade) for basements, cisterns and tanks."],
"Cracks in concrete":["Crack injection repair","Cracks can be sealed by injection before they let more water in."],
"Worn, dusty or damaged floor":["Floor coating or polishing","Epoxy, polyurethane or rubberized coatings, or concrete polishing, depending on use."]};
const dt=document.getElementById("dt"),dr=document.getElementById("dr");
function dsh(k,b){[...dt.children].forEach(x=>x.classList.toggle("on",x===b));const[s,t]=D[k];dr.innerHTML="";const h=document.createElement("h3");h.textContent="Likely solution: "+s;const p=document.createElement("p");p.textContent=t;const a=document.createElement("a");a.href="#quote";a.className="btn";a.style.cssText="margin-top:14px";a.textContent="Book an inspection";dr.append(h,p,a)}
Object.keys(D).forEach((k,i)=>{const b=document.createElement("button");b.type="button";b.textContent=k;b.onclick=()=>dsh(k,b);dt.append(b);if(!i)dsh(k,b)});
document.getElementById("pj").innerHTML=["SMDC|Vine Residences · SM City Novaliches","SMDC|Green 2 Residences · Dasmariñas, Cavite","SMDC|Trees Residences · Novaliches, Quezon City","SMDC|Style Residences · SM City Iloilo","SMDC|Charm Residences · Felix Avenue, Cainta","SMDC|Bloom Residences · Sucat, Parañaque","Suntrust|Solana","Suntrust|Amadea","Suntrust|Shanata","Megaworld|La Cassia Residences at Maple Grove (underground tanks)","Davao Park District|One Lakeshore Drive (roof deck)","|Kai Mall","|Manila Cathedral School","|City of Mandaluyong","|Cultural Center of the Philippines","|Southwoods Mall"].map(x=>{const[a,b]=x.split("|");return a?'<span>'+b+'<small>'+a+'</small></span>':'<span>'+b+'</span>'}).join("");
document.getElementById("pt").innerHTML=["Concrete Waterproofing Systems (CWS100, CWS Admix)","Innobit","Sealbond Chemical Industries","Deepseal","Sika","Nervia","Weber (Saint-Gobain)","Triton Middle East","Polyglass (Mapei Group)"].map(x=>'<span>'+x+'</span>').join("");
const sv=document.getElementById("sv");["Waterproofing (roof, wall, basement, tank)","Integral waterproofing","Epoxy / polyurethane / rubberized floor coating","Concrete floor polishing","Crack injection repair","Rectification or painting works","Not sure yet"].forEach(s=>{const o=document.createElement("option");o.textContent=s;sv.append(o)});
document.getElementById("y").textContent=new Date().getFullYear();
const lb=document.getElementById("lb"),li=lb.querySelector("img");
document.addEventListener("click",e=>{const t=e.target;if(t.matches(".gal img,.ab")&&t.src){li.src=t.dataset.full||t.src;li.alt=t.alt;lb.classList.add("on")}else if(t===lb||t.matches("#lb button"))lb.classList.remove("on")});
document.addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("on")});
let text="";const v=i=>document.getElementById(i).value.trim();
document.getElementById("f").addEventListener("submit",e=>{e.preventDefault();const n=v("n"),m=v("m"),ok=/^[0-9+\s()-]{7,}$/.test(m);
document.getElementById("en").textContent=n?"":"Please enter your name.";document.getElementById("em").textContent=ok?"":"Please enter a valid mobile number.";if(!n||!ok)return;
text="Hello Acuatec! I’d like to request an inspection.\nName: "+n+"\nMobile: "+m+"\nLocation: "+(v("l")||"-")+"\nSolution: "+sv.value+"\nDetails: "+(v("d")||"-");
document.getElementById("msg").textContent=text;document.getElementById("em2").href="mailto:acuatecph@gmail.com?subject="+encodeURIComponent("Inspection request")+"&body="+encodeURIComponent(text);
document.getElementById("out").style.display="block";document.getElementById("out").scrollIntoView({behavior:"smooth",block:"nearest"})});
document.getElementById("cp").onclick=async function(){try{await navigator.clipboard.writeText(text);this.textContent="Copied ✓"}catch(e){this.textContent="Select and copy above"}};
document.getElementById("ms").onclick=()=>{try{navigator.clipboard.writeText(text)}catch(e){}};
showS(0);
const bg=document.querySelector(".burger"),nv=document.querySelector("nav");
bg.onclick=()=>{const o=nv.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
nv.addEventListener("click",e=>{if(e.target.matches("a")){nv.classList.remove("open");bg.setAttribute("aria-expanded","false")}});
