(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO");var o=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a={bodyRef:document.querySelector("body"),buttonStartRef:document.querySelector("button[data-action = start] "),buttonStopRef:document.querySelector("button[data-action = stop]")};a.buttonStartRef.addEventListener("click",(function(){a.buttonStartRef.disabled=!0,r=setInterval((function(){var t,e;t=0,e=o.length-1,u=Math.floor(Math.random()*(e-t+1)+t),a.bodyRef.style.backgroundColor=o[u]}),1e3)})),a.buttonStopRef.addEventListener("click",(function(){a.buttonStartRef.disabled=!1,clearInterval(r)}));var r=null,u=0}},[["QfWi",1]]]);
//# sourceMappingURL=main.8fa5e080f4483db60c4e.js.map