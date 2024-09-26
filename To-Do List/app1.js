let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click", function(){
    console.log(inp.value);
    // add task in list
    let item = document.createElement("li");
    item.innerText = inp.value;
    // /create delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn); 
    ul.appendChild(item);
    inp.value="";
    
} );

// for delete button
ul.addEventListener("click",function(event){
   if(event.target.nodeName=="BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
   }
   
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         // for delete element
//        let par = this.parentElement;
//        console.log(par);
//        par.remove();
//     });
// }