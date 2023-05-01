console.log('lOl');
let yu=document.createElement('p');
yu.className='yu';
document.querySelector('main').append(yu);
let number=+0;
setInterval(()=>{
  number++;
  yu.style.cssText='top: '+`${number}`+'px';
},300);
