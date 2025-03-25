let todo=[];
let type=prompt("write your choice.")
while(true){
    if(type=="quite"){
        console.log("your app is quite!!");
        break;
    }
    if(type=="add"){
        let item=prompt("please write your item..")
        todo.push(item);
       for(let i=0;i<todo.length;i++){
         console.log(todo[i]);
       }
    }
    if(type=="delete"){
        let idx=prompt("enter your index..");
        todo.splice(idx,1);
        for(let i=0;i<todo.length;i++){
            console.log(todo[i]);
          }
    }
    type=prompt("write your choice.");
    
}
 