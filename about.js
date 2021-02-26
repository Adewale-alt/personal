
 var pos =0;
 var speed =150;
 var str =document.getElementById('str').innerText;

 document.getElementById('str').innerText = '';

 function type(){
   if (pos<str.length){
    document.getElementById('str').innerHTML += str.charAt(pos);
    pos++;
    setTimeout(type,speed)
   }
 }
setTimeout(type,speed)