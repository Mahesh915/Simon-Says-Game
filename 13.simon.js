let gameSeq = [];
let userSeq =[];

let btns = ['yellow','red','purple','green'];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress",function(){
   if(started == false){
    console.log('game started');
   
   started = true;

   levelUp();
   }
})

function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');

    },250);
}

function levelUp(){
    level++;
    h2.innerText =`level ${level}`;

    let randInx = Math.floor(Math.random()*3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randInx);
    console.log(randColor);
    console.log(randBtn);
    btnflash(randBtn);
}

function checkAns(){
    let idx = level-1;

    if(userSeq[idx] ===gameSeq[idx]){
       if(userSeq.length ==gameSeq.length){
        levelUp();
       }
    }
    else{
        h2.innerHtml = `Game over! Your Score was<b>${level}</b> <br> Press any key to start`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },200);
        reset();
    }
}

function btnPress(){

    let btn =this; 
    btnflash(btn);

}
let allbtns = document.querySelectorAll('.btn');

for(btn of allbtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}