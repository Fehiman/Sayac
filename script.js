if(localStorage.getItem('counter')==null){
    var x=0;
    localStorage.setItem('counter',x)
}
console.log(localStorage.length)
x=localStorage.getItem('counter');
const sayac=document.getElementById("counter");
sayac.append(x);

function increase(){
    x=localStorage.getItem('counter')
    x++
    console.log(x)
    sayac.innerHTML="";
    sayac.append(x)
    localStorage.setItem('counter',x)
    
}
function decrease(){
    x--
    console.log(x)
    sayac.innerHTML="";
    sayac.append(x)
    localStorage.setItem('counter',x)
}
function reset(){
    x=0;
    console.log(x);
    sayac.innerHTML="";
    sayac.append(x);
    localStorage.setItem('counter',0)
}



