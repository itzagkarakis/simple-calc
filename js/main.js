let result = 0;
let temp = '0';
let op;
const screen = document.querySelector('.result');

/* document
    .querySelector('.item')
    .addEventListener('click', function(e){
        buttonClick(e.target.innerText);
        console.log('hi');
    }); */
let numbers = ['item-zero','item-one','item-two','item-three','item-four','item-five'
                ,'item-six','item-seven','item-eight','item-nine'
                ,'item-delete','item-back','item-divide','item-plus','item-minus','item-mult','item-val'];

numbers.forEach(num=>document.querySelector(`.${num}`).addEventListener('click', function(e){
    buttonClick(e.target.innerText);
}));

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
}

function handleNumber(value){
    if(temp==='0'){
        temp = value;
    }else{
        temp += value;
    }

    rerender();
}

function handleSymbol(value){
   switch(value){
       case 'C':
           temp='0';
           op= null;
           result = 0;
           break;
       case ''    
   }
}

function rerender(){
    screen.innerHTML = temp;
}