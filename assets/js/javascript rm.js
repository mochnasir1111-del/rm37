<script>
// ===== OFFCANVAS =====
const offcanvas=document.getElementById("offcanvas");
document.getElementById("openMenu").onclick=()=>offcanvas.classList.add("active");
document.getElementById("closeMenu").onclick=()=>offcanvas.classList.remove("active");

// ===== SLIDER =====
const slides=document.querySelectorAll(".slide");
const dotsContainer=document.getElementById("sliderDots");
let current=0,interval;

slides.forEach((_,i)=>{
  const dot=document.createElement("button");
  dot.onclick=()=>goTo(i);
  dotsContainer.appendChild(dot);
});

function show(){
  slides.forEach((s,i)=>s.classList.toggle("active",i===current));
  dotsContainer.querySelectorAll("button").forEach((d,i)=>d.classList.toggle("active",i===current));
}

function goTo(i){current=i;show();reset();}
function next(){current=(current+1)%slides.length;show();}
function reset(){clearInterval(interval);interval=setInterval(next,4000);}
document.querySelector(".next").onclick=()=>{next();reset();}
document.querySelector(".prev").onclick=()=>{current=(current-1+slides.length)%slides.length;show();reset();}

show();reset();

// ===== SEARCH =====
const articles=[
 {title:"Ulasan Reel Shimano Stella",url:"ulasan reel stella.html",keywords:"stella shimano reel"},
 {title:"Battle Of Creator 2025",url:"battle of creator.html",keywords:"battle creator mancing"}
];

const input=document.getElementById("searchInput");
const results=document.getElementById("searchResults");

input.oninput=()=>{
 const q=input.value.toLowerCase();
 results.innerHTML="";
 if(q.length<2){results.style.display="none";return;}
 const match=articles.filter(a=>a.title.toLowerCase().includes(q)||a.keywords.includes(q));
 if(!match.length) results.innerHTML="<div class='result-item'>Tidak ditemukan</div>";
 match.forEach(a=>results.innerHTML+=`<a class="result-item" href="${a.url}">${a.title}</a>`);
 results.style.display="block";
};
</script>
