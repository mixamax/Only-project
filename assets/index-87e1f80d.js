(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();class o{constructor(e,n,s,t){this.width=e,this.height=n,this.color=s,this.text=t,this.manageHTML()}manageHTML(){const e=document.createElement("div");e.className=`mark ${this.color}`,e.dataset.state="disactive",e.innerHTML=`
        <img src="https://mixamax.github.io/Only-project/plus.svg" alt="плюс" class = "plus" /> 
        <img src="https://mixamax.github.io/Only-project/minus.svg" alt="минус" class = "minus none"/>
        <span class="text none">${this.text}</span>`,e.style.left=`${this.width}%`,e.style.top=`${this.height}%`,e.dataset.color=this.color,e.dataset[this.color]="disactive",document.getElementById("app").append(e)}}new o(30,26,"blue","здание 1");new o(36,45,"green","стадион");new o(23,67,"blue","здание 3");new o(21,106,"green","здание 4");new o(57,59,"blue","здание 5");new o(58,74,"green","здание 6");new o(72,21,"blue","здание 7");new o(74,44,"blue","здание 8");new o(83,67,"blue","здание 9");new o(68,62,"green","здание 10");function i(a){const e=a.target.closest(".mark");if(e){const n=e.dataset.color,s=e.dataset.state==="disactive"?"active":"disactive";e.dataset.state=s,e.dataset[n]=s}else Array.from(document.querySelectorAll(".mark")).forEach(s=>{const t=s.dataset.color;s.dataset.state="disactive",s.dataset[t]="disactive"})}document.addEventListener("click",i);
