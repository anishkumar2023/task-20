let body=document.getElementById("body")
let section=document.getElementById("section")
let button=document.createElement("button")
section.appendChild(button)
button.innerHTML="click it"
button.setAttribute("onclick","show()")
let array=["red","blue","green","yellow"]; 
 
function show(){  
// let name=array.map((e)=>{
let b=array.length
let a=Math.floor(Math.random() *b)
let c=console.log(array[a])
// })
if(a==0){
	let black = body.setAttribute("class","bg-danger")
}
else if(a==1){
	let black = body.setAttribute("class","bg-warning")
}
else if(a==2){
	let black = body.setAttribute("class","bg-primary")
}
else{
	let black = body.setAttribute("class","bg-success")
}

 } 


