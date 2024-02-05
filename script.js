const btns = document.querySelectorAll('.btn');
const resetbtn =  document.querySelector('#reset-btn');
const newbtn = document.querySelector('#new-btn');
const pera = document.querySelector('#pera');

let x = true;
let count = 0;

let arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

btns.forEach(btn => {
    btn.addEventListener("click",()=>{
    // console.log("Click Button");
   
    if(x)
    {
        btn.innerHTML = "X";
        x = false;
    }
    else
    {
        btn.innerHTML = "O";
        x = true;
    }
    btn.disabled = true;
    count++;

    checkwinner();

    if(count===9 && count!=checkwinner()){
        pera.innerHTML = `Game is Withdraw`;
    }
})
});


const checkwinner = ()=>{
    for ( let perrten of arr) {
        let pos1value = btns[perrten[0]].innerText;
        let pos2value = btns[perrten[1]].innerText;
        let pos3value = btns[perrten[2]].innerText;

        if(pos1value != "" && pos2value !="" && pos3value !="")
        {
            if(pos1value === pos2value && pos2value === pos3value)
            {
                console.log("Winner" ,pos1value);
                pera.innerHTML = `Winner is :  ${pos1value}`;


                for (const btn of btns) {
                    btn.disabled = true;
                }

            }
    
        }
    }

};

resetbtn.addEventListener("click",()=>{
    x = true;
    count = 0;
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
        pera.innerText = "";
    }
})

newbtn.addEventListener("click",()=>{

    x = true;
    count = 0;
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
        pera.innerText = "";
    }
});