import{b as i}from"./index-8fb9ba12.js";const c=i();let n=[];function o(){this.url="ws://localhost:6060/websocket",this.token=encodeURIComponent(c.token),this.websocket=new WebSocket(this.url,[this.token]),this.websocket.onopen=e=>{this.onopen(e)},this.websocket.onmessage=e=>{this.onmessage(e)},this.websocket.onclose=e=>{this.onclose(e)},this.websocket.onerror=e=>{this.onerror(e)}}o.prototype.onopen=function(e){console.log("open",e)};o.prototype.onmessage=function(e){if(e.data.includes("server")){console.log("server",e.data,"不解析他");return}const t=JSON.parse(e.data);n.length!==0&&n.forEach(r=>{r(t)})};o.prototype.onsend=function(e,t){this.websocket.readyState===this.websocket.OPEN?this.websocket.send(JSON.stringify(e)):this.websocket.readyState===this.websocket.CONNECTING&&setTimeout(()=>{this.websocket.send(JSON.stringify(e))},1e3),t&&n.push(t)};o.prototype.onclose=function(e){console.log("close",e)};o.prototype.onerror=function(e){console.log("error",e)};let s=null;const h=()=>s||(s=new o,s);export{h as c};
