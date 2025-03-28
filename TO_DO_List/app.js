let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let deletebtn=document.createElement("button");
    deletebtn.innerText="delete";
    deletebtn.classList.add("delete");
    item.appendChild(deletebtn);
    ul.append(item);
   inp.value="";
});

// let delBtns=document.querySelector(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.ParentElemen;
//         par.remove();
//     });
// }
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
      let listitem =  event.target.parentElement;
      listitem.remove();
    }
    
});