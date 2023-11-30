const buttons = document.querySelector('.buttons')
let screen = document.querySelector('.screen')
const del = document.querySelector('.del')
const allDeleteResult = document.querySelector('.allDeleteResult')
let result = document.querySelector('.result')
let continueOfResult = document.querySelector('.continueOfResult')
for(let i=0; i<buttons.children.length; i++){
buttons.children[i].addEventListener('click', (event)=>{
    if(event.target.innerHTML=='='){
        if(result.innerHTML.includes('/0')){
            result.innerHTML = 'Error!'
            if(result.innerHTML == 'Error!'){
                result.style.color='red'
            }
           let timeOut =  setTimeout(()=>{
                result.innerHTML = '';
                if(result.innerHTML !== 'Error!'){
                    result.style.color='white'
                }
            },1000)
        }
        else if(result.innerHTML.includes('%')){
          let percent =  result.innerHTML.replace('%','*100/')
          result.innerHTML = eval(percent).toFixed(2);
        }
        else{
            continueOfResult.innerHTML = eval(result.innerHTML).toFixed(2);
            result.innerHTML = '';
        }
    }
    else{
        if(result.innerHTML.length ===16){
            return;
        }
        else{
            result.innerHTML +=event.target.innerHTML;
        }
    }
})
}


del.addEventListener('click', ()=>{
    let arr = result.innerHTML.split('');
    console.log(arr);
    arr.pop();
    arr.pop();

    result.innerHTML = arr.join('')
    console.log(arr);
})

allDeleteResult.addEventListener('click', ()=>{
    result.innerHTML = ''
})