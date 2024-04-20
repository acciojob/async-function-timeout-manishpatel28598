//your JS code here. If required.
const msg = document.getElementById('text');
const delay = document.getElementById('delay');
const btn = document.getElementById('btn');
const displaymsg = document.getElementById('output');


function a(){
 
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(`<p>${msg.value}</p>`);
    },delay.value)
  });
}

async function displayMsg(){
  const result = await a().then((el)=>displaymsg.innerHTML=el);
}

btn.addEventListener('click',displayMsg);