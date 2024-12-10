let boxes =document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msgcontainer=document.querySelector(".msg-container");
let newgamebtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg")
let turnO=true;
const resetgame=()=>{
    let turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
let winnerpattren=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnO===true){
        box.innerText="O";
        box.style.color="green";
        turnO=false;
    }
    else{
    box.innerText="X";
    box.style.color="black";
    turnO=true;
    }
   box.disabled=true;
   
    checkwinner();
    checkDraw();
    })
});
const checkDraw = () => {
    let filledBoxes = 0;
    for (let box of boxes) {
        if (box.innerText !== "") {
            filledBoxes++;
        }
    }
    if (filledBoxes === 9) {
        msg.innerText = "It's a draw!";
        msgcontainer.classList.remove("hide");
        reset.classList.add("hide");
        disableboxes();
    }
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    reset.classList.add("hide");
   
}
const checkwinner=()=>{
for(let pattren of winnerpattren){
   let pos1=boxes[pattren[0]].innerText;
   let pos2= boxes[pattren[1]].innerText;
   let pos3=boxes[pattren[2]].innerText;

if( pos1!="" && pos2!=""&& pos3!=""){
    if(pos1===pos2&&pos2===pos3){   
        disableboxes()  ;
     showwinner(pos1) ; 
    }
}
}
}
newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
