let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
  userSeq=[];
  level++;
  h2.innerText=`Level ${level}`;
  let ranIdx=Math.floor(Math.random()*3);
  let ranColor=btns[ranIdx];
  let randbtn=document.querySelector(`.${ranColor}`);
  gameSeq.push(ranColor);
  btnFlash(randbtn);
}
function checkAns(idx){
   if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
       }
   }
   else{
    h2.innerHTML=`Game Over! your score was <b> ${level} </b> <br>Press any key to start.`;
    reset();
   }
}
function btnPress(){
  let btn=this;
  btnFlash(btn);
  let userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}