const pages=[...document.querySelectorAll('.page')];let current=0;
function showPage(next){const old=pages[current];old.classList.add('leaving');setTimeout(()=>{old.classList.remove('active','leaving');current=next;pages[current].classList.add('active');},520)}
document.querySelectorAll('.next').forEach(btn=>btn.addEventListener('click',()=>showPage(Math.min(current+1,pages.length-1))));
document.querySelector('.restart').addEventListener('click',()=>showPage(0));
document.querySelector('.secret-haggis').addEventListener('click',e=>e.currentTarget.classList.toggle('revealed'));
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')showPage(Math.min(current+1,pages.length-1));if(e.key==='ArrowLeft')showPage(Math.max(current-1,0));});
