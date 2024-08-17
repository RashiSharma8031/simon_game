let gameSeq=[];
let userSeq = [];
let colSeq = ["yellow","green","red","blue"];
let level=0;
let started = false;
let highestScore=0 ; 
let highest= document.querySelector(".Highest");

let h3 = document.querySelector("h3")
document.addEventListener("keypress",()=>{
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }  
 })

 function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash")
    },250)
 }

 function levelUp(){
    level++;
    h3.innerText= `level ${level}`;
    let idx = Math.floor(Math.random()*3);
    let randCol = colSeq[idx];
    let randbtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
   console.log(gameSeq);
    btnFlash(randbtn);
    setTimeout(btnFlash,1000);
 }
  function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        console.log("equal color");
        if(userSeq.length == gameSeq.length){
            if(highestScore < level){
                highestScore = level;
                console.log(highestScore);
            }
            setTimeout(levelUp,500);
            userSeq = [];
        }
        
    }
    else{
         level = `${level}`-1;
        h3.innerHTML=`game over , score : ${level} press any key to start`;
        reset();
    }

 
 highest.innerText=`highest score ${highestScore}`;
    
     
  }


 function btnPress(){
   let btn = this;
   btnFlash(btn);
   let userColor =  btn.getAttribute("id");
   
   userSeq.push(userColor);
   console.log(userSeq);
   checkAns(userSeq.length-1)
 }

 let allbtn = document.querySelectorAll(".btn");
 for(btn of allbtn){
    btn.addEventListener("click",btnPress);
 }

 function reset(){
    gameSeq=[];
    userSeq=[];
    started = false;
    level = 0;
 }
