(()=>{var e={394:e=>{function t(){this.subscribers={}}t.prototype.on=function(e,t){this.subscribers[e]||(this.subscribers[e]=[]),this.subscribers[e].push(t)},t.prototype.emit=function(e){if(this.subscribers[e]){var t=[].slice.call(arguments,1);this.subscribers[e].forEach((function(e){e.apply(null,t)}))}},e.exports=t},672:(e,t,i)=>{var s,n=new(i(394));[].slice.call(document.querySelectorAll(".marker")).forEach((function(e){e.style.backgroundColor=e.id,e.addEventListener("click",(function(){s=this.id,document.querySelector(".selected").classList.remove("selected"),this.classList.add("selected")}))}));var o=document.getElementById("paint"),r=o.getContext("2d");function a(){r.setTransform(1,0,0,1,0,0);var e=window.devicePixelRatio||1,t=o.clientWidth*e,i=o.clientHeight*e;if(t!==o.width||i!==o.height){var s=r.getImageData(0,0,o.width,o.height);o.width=t,o.height=i,r.putImageData(s,0,0)}r.scale(e,e),r.lineWidth=5,r.lineJoin="round",r.lineCap="round"}a(),window.addEventListener("resize",a);var c={x:0,y:0},d={x:0,y:0},u=!1;o.addEventListener("mousedown",(function(e){u=!0,c.x=e.pageX-this.offsetLeft,c.y=e.pageY-this.offsetTop})),o.addEventListener("mouseup",(function(){u=!1})),o.addEventListener("mousemove",(function(e){u&&(d.x=c.x,d.y=c.y,c.x=e.pageX-this.offsetLeft,c.y=e.pageY-this.offsetTop,n.draw(d,c,s,!0))})),n.draw=function(e,t,i,s){r.beginPath(),r.strokeStyle=i||"black",r.moveTo(e.x,e.y),r.lineTo(t.x,t.y),r.closePath(),r.stroke(),s&&n.emit("draw",e,t,i)},e.exports=n}},t={};!function i(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,i),o.exports}(672)})();