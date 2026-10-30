// Edit this list after the shop confirms the products it actually sells.
const products = [
  {name:"iPhone",category:"iphone",tag:"SMARTPHONES",note:"Explore available models",art:"phone-shape"},
  {name:"AirPods",category:"audio",tag:"AUDIO",note:"Ask about current availability",art:"earbuds"},
  {name:"Apple Watch",category:"wearables",tag:"WEARABLES",note:"Explore available models",art:"watch-shape"},
  {name:"Charging essentials",category:"accessories",tag:"ACCESSORIES",note:"Accessories and everyday essentials",art:"charger"},
  {name:"iPhone Pro range",category:"iphone",tag:"SMARTPHONES",note:"Ask the showroom for details",art:"phone-shape"},
  {name:"Wireless audio",category:"audio",tag:"AUDIO",note:"Ask about available options",art:"earbuds"},
  {name:"Smart wearables",category:"wearables",tag:"WEARABLES",note:"Ask about current availability",art:"watch-shape"},
  {name:"Power accessories",category:"accessories",tag:"ACCESSORIES",note:"Ask about compatible accessories",art:"charger"}
];
const grid=document.getElementById("productGrid");
function render(filter="all"){
  grid.innerHTML=products.filter(p=>filter==="all"||p.category===filter).map(p=>`
    <article class="product-card">
      <div class="product-art"><div class="device ${p.art}"></div></div>
      <div class="product-meta"><small>${p.tag}</small><h3>${p.name}</h3><p>${p.note}</p><a href="#visit">ENQUIRE AT SHOWROOM ↗</a></div>
    </article>`).join("");
}
render();
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");render(btn.dataset.filter);
}));
const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
