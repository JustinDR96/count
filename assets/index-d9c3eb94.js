(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();let i;const l=60;let c=new Date;c.setMinutes(c.getMinutes()+l);function u(){const d=new Date().getTime(),n=c-d;if(n<=0)clearInterval(i),document.getElementById("countdown").innerHTML="Terminé!";else{const r=Math.floor(n/864e5),o=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),t=Math.floor(n%(1e3*60*60)/(1e3*60)),e=Math.floor(n%(1e3*60)/1e3);document.getElementById("days").textContent=String(r).padStart(2,"0"),document.getElementById("hours").textContent=String(o).padStart(2,"0"),document.getElementById("minutes").textContent=String(t).padStart(2,"0"),document.getElementById("seconds").textContent=String(e).padStart(2,"0")}}document.getElementById("startButton").addEventListener("click",function(){i=setInterval(u,100)});document.getElementById("stopButton").addEventListener("click",function(){clearInterval(i)});u();
