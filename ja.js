// /*let name="ashwin";
// console.log("Name:",name);
// let age="21";
// console.log("Age:",age);
// let isash="True";
// console.log("isash:",isash);*/

//  function myfunc(a,b){
//    return a+b;
//  }
//  var x=myfunc(1,5);
//  console.log(x);
// const x=document.getElementById("t1")
// const x1=document.getElementById("t2")
// const y=document.getElementById("a")
// y.addEventListener("click",function(){
//     let a1=t1.value
//     let a2=t2.value
//     document.write(a1+a2)
// })
function addtask(){
    let task=document.getElementById("t1").value;

console.log(task);

if(task){
    let li= document.createElement("li");
    li.textContent=task;
    document.getElementById("t2").appendChild(li);
    document.getElementById("t1").value="";

    li.onclick=function()
{
    this.parentNode.removeChild(this);
}
}
}
function b(){
    let color=document.getElementById("item").value;
    console.log(color);
    document.body.style.backgroundColor=color;
}



