const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuBtn) menuBtn.addEventListener('click',()=>navLinks.classList.toggle('active'));
if(navLinks) navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('active')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Purple floating particles
const canvas=document.getElementById('particles');
if(canvas){
 const ctx=canvas.getContext('2d');let particles=[];
 function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);particles=Array.from({length:Math.min(75,Math.floor(innerWidth/16))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*2+.5,v:Math.random()*.35+.12,a:Math.random()*.5+.15,d:(Math.random()-.5)*.35}))}
 addEventListener('resize',resize);resize();
 function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);particles.forEach(p=>{p.y-=p.v;p.x+=p.d;if(p.y<0)p.y=innerHeight;if(p.x<0)p.x=innerWidth;if(p.x>innerWidth)p.x=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(190,120,255,${p.a})`;ctx.shadowBlur=12;ctx.shadowColor='#a855f7';ctx.fill()});requestAnimationFrame(draw)}draw();
}
// Category filters
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
 const group=btn.closest('.filter-area');group.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 const chosen=btn.dataset.filter;document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=chosen!=='all'&&card.dataset.category!==chosen});
}));
// Contact form demo: opens email app. Replace email address.
const form=document.getElementById('contactForm');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const to='your-email@example.com';const subject=encodeURIComponent('Portfolio message from '+d.get('name'));const body=encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\n\n'+d.get('message'));location.href=`mailto:${to}?subject=${subject}&body=${body}`});
