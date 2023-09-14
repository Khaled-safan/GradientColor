
let background =document.querySelector(".background")
let select=document.querySelector("select")
let inpt1=document.querySelector("#inpt1")
let inpt2=document.querySelector("#inpt2")
let inpts =document.querySelectorAll(".inputs input")
let info=document.querySelector(".info")
let btn=document.querySelector("button")

let selectvalue;

select.onchange =function(){
    selectvalue = select.value
    console.log(selectvalue)
}

console.log(background,select,inpt1,inpt2,info,btn ,inpts)

let value2;
let value1;




inpt2.addEventListener("input",function(){
         value2 = inpt2.value
         background.style.background = `linear-gradient(to ${selectvalue} , ${value1},${value2})`
         info.innerHTML=  background.style.background = `linear-gradient(to ${selectvalue} , ${value1},${value2})`
 })
      

 inpt1.addEventListener("input",function(){
    value1 = inpt1.value
    background.style.background = `linear-gradient(to ${selectvalue} , ${value1},${value2})`
    info.innerHTML=  background.style.background = `linear-gradient(to ${selectvalue} , ${value1},${value2})`
})


btn.onclick =function(){
    navigator.clipboard.writeText(info.innerHTML)
   
}
