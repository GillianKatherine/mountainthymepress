const drawer=document.querySelector('.chapter-drawer');
const navButton=document.querySelector('.nav-toggle');
if(navButton){navButton.addEventListener('click',()=>drawer.classList.toggle('open'));}
const audio=document.querySelector('#ambience');
const sound=document.querySelector('.sound-toggle');
if(sound && audio){sound.addEventListener('click',async()=>{try{if(audio.paused){await audio.play(); sound.textContent='Sound on';}else{audio.pause(); sound.textContent='Sound off';}}catch(e){sound.textContent='Add sound file';}})}
for(let i=0;i<8;i++){const leaf=document.createElement('span');leaf.className='leaf';leaf.textContent=i%2?'✦':'❧';leaf.style.left=Math.random()*100+'vw';leaf.style.animationDelay=Math.random()*12+'s';leaf.style.animationDuration=(12+Math.random()*10)+'s';document.body.appendChild(leaf);}
