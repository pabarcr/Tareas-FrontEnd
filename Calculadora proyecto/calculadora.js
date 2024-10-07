let result= "";

document.getElementById('c-btn').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value='';
});

document.getElementById('divide').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+='/';
});
document.getElementById('multiplier').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+='*';
});
document.getElementById('delete').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value=display.value.slice(0,-1);
});
document.getElementById('seven').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+=7;
});
document.getElementById('eight').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+=8;
});
document.getElementById('nine').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+=9;
});
document.getElementById('minus').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+="-";
});
document.getElementById('four').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+=4;
});
document.getElementById('five').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+=5;
});
document.getElementById('six').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+=6;
});

document.getElementById('plus').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+="+";
});

document.getElementById('one').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+=1;
});

document.getElementById('two').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+=2;
});
document.getElementById('three').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+=3;
});
document.getElementById('percentage').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+="%";
});
document.getElementById('cero').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+=0;
});
document.getElementById('dot').addEventListener('click', function(){
    let display=document.querySelector('.display');
    display.value+=".";
});
document.getElementById('iqual').addEventListener('click', function(){
    let display=document.querySelector('.display');

    // primer (\d+) toma todos los numeros antes del % y este seria el $1
    // el segundo (\d+) toma todos los numeros despues del % y este seria el$2
    let displaytext = display.value.replace(/(\d+)%([0-9])/g, '$1/100*$2');
    // si no hay numeros despues del % entonces la formula se cambia a solo una division entre 100
    displaytext = displaytext.replace(/(\d+)%/g, '$1/100');
    
    try{
        let result = eval(displaytext);

        if(displaytext.includes('/0') || result === Infinity || result===-Infinity || isNaN(result) ){
            display.value ="ERROR"
            alert("Error");
            display.value ="";
            

        } else{
            display.value= result;
            console.log(displaytext);
        }
    } catch (error){
        display.value = "ERROR"
        alert("Error");
        display.value ="";
    }
});