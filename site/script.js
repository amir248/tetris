let yu=document.createElement('p');
yu.className='yu';
document.querySelector('main').append(yu);
let yo=document.createElement('p');
yo.className='yo';
document.querySelector('main').append(yo);

let yl=document.createElement('p');
yl.className='yl';
document.querySelector('main').append(yl);
let yr=document.createElement('p');
yr.className='yr';
document.querySelector('main').append(yr);

let yy=document.createElement('p');
yy.className='yy';
document.querySelector('main').append(yy);

let number=+0;
let number3=+70;
let fuck=-50;
document.querySelector('main').style.cssText=`
display:flex;
justify-content:center;
align-itemas:ceneter;
width:100%;
`

const lol=setInterval(()=>{
  number=number+10;
  number3=number3+10;
  fuck=fuck+10;
  yu.style.cssText='top: '+`${number}`+'px';
  yy.style.cssText='top: '+`${number}`+'px';
  yo.style.cssText='top: '+`${number3}`+'px';
  yl.style.cssText='top: '+`${number3}`+'px';
  yr.style.cssText='top: '+`${number3}`+'px';
  yy.style.cssText='top: '+`${fuck}`+'px;';
  // console.log(window.innerHeight);
  if(window.innerHeight<number){
    console.log('Go fuck yourself scum!');
    yu.remove();
    yo.remove();
    yl.remove();
    yr.remove();
    yy.remove();
    clearInterval(lol);
  }
},300);
