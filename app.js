let gameseq = [] ; 
let userseq = [] ;

let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0 ;

let h2 = document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is start");
        started = true;
        levelup();
    }
});

 function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash")
   },250)
}

function  userbtnFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
     btn.classList.remove("userFlash")
    },250)}

function levelup(){
    userseq=[];
    level++ ;
    h2.innerText = `level ${level}`; 
    
    let random = Math.floor(Math.random()*3)
    let randcolor = btns[random] ;
    let randbtn = document.querySelector(`.${randcolor}`)
    // console.log(randbtn);
    // console.log(randcolor)
    // random btn choose 
    gameseq.push(randcolor);
    console.log(gameseq)
    btnFlash(randbtn);
}

function checkans(idx){
    // console.log("curr level:",level);
   
    if(userseq[idx]=== gameseq[idx]){
        
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000)
        }

    }else{
        h2.innerHTML= `game over  your score is <b>${level}<b> <br>press any key to start` ;
        reset(); 
    }
}

function btnpress(){
    let btn = this ; 
    userbtnFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor)
    userseq.push(userColor)
    
    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started =false;
    gameseq =[];
    userseq=[];
    level =0;
}
