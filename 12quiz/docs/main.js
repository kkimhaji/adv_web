(()=>{"use strict";document.getElementById("average").innerHTML=function(e){let t=0,r=0,n=0,a=Array.isArray(e);if(!1===a)for(let e=0;e<arguments.length;e+=1)isNaN(arguments[e])||(t+=arguments[e],r+=1);else if(!0===a)for(let n=0;n<e.length;n+=1)isNaN(e[n])||(t+=e[n],r+=1);return n=t/r,n}([1,10,9,5]),document.getElementById("random").innerHTML=function(e,t){let r=0;if(isNaN(e)||void 0!==t){if(isNaN(e)||isNaN(t))return-1}else t=e,e=0,r=Math.floor(Math.random())*e;return r=Math.floor(Math.random()*(t-e))+e,r}(100,20)})();