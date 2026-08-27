const toggle=document.querySelector('.mobile-toggle');const links=document.querySelector('.navlinks');if(toggle&&links){toggle.addEventListener('click',()=>links.classList.toggle('open'));}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('#contact-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();const note=form.querySelector('.form-status');if(note){note.hidden=false;}form.reset();})}
