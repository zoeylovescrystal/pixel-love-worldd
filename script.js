
const w=document.getElementById('world'),p=document.getElementById('player'),m=document.getElementById('msg');
let x=32,y=32;p.style.left=x+'px';p.style.top=y+'px';
const objs=[[160,96,'🌸','You make every day brighter!'],[320,160,'🐰','You found a bunny!'],[700,220,'🏡','Welcome to our little home.'],[650,500,'💎','Crystal of Love found! 💜']];
objs.forEach(o=>{let d=document.createElement('div');d.className='item';d.textContent=o[2];d.style.left=o[0]+'px';d.style.top=o[1]+'px';w.appendChild(d);o.push(d);});
function check(){for(const o of objs){if(Math.abs(x-o[0])<24&&Math.abs(y-o[1])<24){m.innerHTML=o[3]+'<br><br><button onclick="msg.style.display=\'none\'">Close</button>';m.style.display='block';}}}
addEventListener('keydown',e=>{if(m.style.display==='block')return;const k=e.key.toLowerCase();if(k==='arrowleft'||k==='a')x-=32;if(k==='arrowright'||k==='d')x+=32;if(k==='arrowup'||k==='w')y-=32;if(k==='arrowdown'||k==='s')y+=32;x=Math.max(0,Math.min(928,x));y=Math.max(0,Math.min(608,y));p.style.left=x+'px';p.style.top=y+'px';check();});
