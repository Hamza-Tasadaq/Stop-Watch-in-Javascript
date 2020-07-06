//varible to set to zero
var min=0;
var sec=0;
var miliSec=0;

//getting input fields
var minute=document.getElementById('min');
var second=document.getElementById('sec');
var miliSecond=document.getElementById('msec');

var interval;

//timer function for watch
function timer(){
    miliSec++;
    miliSecond.innerHTML=miliSec;
    if(miliSec>=100){
        sec++;
        second.innerHTML=sec;
        miliSec=0;
    }
    else if(sec>=60){
        min++;
        minute.innerHTML=min;
        sec=0;
    }
}

//starter function
function start(){
    
    document.getElementById("btn1").disabled = true;
    interval= setInterval(timer,10);
    
}


//Stop Function
function stop(){
    clearInterval(interval);
    document.getElementById("btn1").disabled = false;
}


//Reset Function
function reset(){
    minute.innerHTML=0;
    second.innerHTML=0;
    miliSecond.innerHTML=0;
    clearInterval(interval);
    document.getElementById("btn1").disabled = false;
    min=0;
    sec=0;
    miliSec=0;
}

