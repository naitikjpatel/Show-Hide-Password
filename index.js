let eyeicon=document.getElementById("eyeicon");
let password=document.getElementById("password");

eyeicon.onclick=function(){
    //if input type is  password-> then it is unvisbile
    //if input type is text -> then it is visible
    if(password.type =="password"){
        password.type="text";
        eyeicon.src="eye-open.png";
    }
    else{
        password.type="password";
        eyeicon.src="eye-close.png";
    }
}