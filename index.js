let addbtn=document.querySelector("button");
let tasklist=document.querySelector("ul");
let input=document.querySelector("input");

addbtn.addEventListener("click",()=>{
    if(input.value === ""){

    }
    else{
        let text=input.value;
        let task=createtask(text);
        task.innerHTML +=`<span class="closebtn"><i class="fa-solid fa-trash"></i></span>`
        tasklist.appendChild(task);
        input.value="";
    }
})


tasklist.addEventListener("click",(e)=>{
    if(e.target.nodeName === "I"){
        e.target.parentElement.parentElement.style= 'display:none'
    }
})


function createtask(text){
    let li=document.createElement("li");
    li.innerHTML=text;
    return li;
}