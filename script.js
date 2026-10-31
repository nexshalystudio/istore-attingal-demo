const products=[
{name:"iPhone",category:"phone",tag:"SMARTPHONES",desc:"Explore available iPhone models",art:"phone-shape"},
{name:"AirPods",category:"audio",tag:"AUDIO",desc:"Ask about current availability",art:"earbuds"},
{name:"Apple Watch",category:"watch",tag:"WEARABLES",desc:"Explore available models",art:"watch-shape"},
{name:"Accessories",category:"accessory",tag:"ACCESSORIES",desc:"Everyday tech essentials",art:"accessory"},
{name:"iPhone Pro",category:"phone",tag:"SMARTPHONES",desc:"Ask the showroom for details",art:"phone-shape"},
{name:"Wireless Audio",category:"audio",tag:"AUDIO",desc:"Discover audio accessories",art:"earbuds"},
{name:"Smart Wearables",category:"watch",tag:"WEARABLES",desc:"Ask about available options",art:"watch-shape"},
{name:"Charging Essentials",category:"accessory",tag:"ACCESSORIES",desc:"Check compatible accessories",art:"accessory"}
];
const grid=document.getElementById("productGrid");
function render(filter="all"){grid.innerHTML=products.filter(p=>filter==="all"||p.category===filter).map(p=>`<article class="product-card"><div class="product-art"><div class="device ${p.art}"></div></div><div class="product-meta"><small>${p.tag}</small><h3>${p.name}</h3><p>${p.desc}</p><a href="https://wa.me/917399555333" target="_blank" rel="noopener">ENQUIRE ON WHATSAPP ↗</a></div></article>`).join("")}
render();
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.filter)}));
const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
toggle.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
