//your code here
var btn=document.getElementbyId("btn");
var numPtag=document.getElementById("num");
var input=document.getElementById("guess").value;

function generateRandomnumber(){
	
    var no =Math.floor(Math.random()*40)-20;
    numPtag.textContent=no;
}
btn.addEventListener('click',generateRandomnumber);