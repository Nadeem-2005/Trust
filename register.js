function checkform(){
let name=document.getElementById("name").value;
let emailid=document.getElementById("email");
let pno=document.getElementById("ph").value;
let reg=document.getElementById("regno");
let uname=document.getElementById("uname");
let set=document.getElementById("ep").value;
let confirm=document.getElementById("cp").value;

if(!name.match(/^[a-zA-Z]+$/)){
    alert("Please enter a valid name");
    return false;
}
if(!emailid.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)){
    alert("Please enter a valid email-id");
    return false;
}
if(!(/^(0|91)?[7-9][0-9]{9}$/.test(pno))){
    alert("Enter a valid phone number");
    return false;
}

if(!(/^[0-9]{2}[A-Z]{3}[0-9]{4}$/).test(reg)){
    alert("Enter a valid registration number");
    return false;
}

if((!set===confirm) && set.length<6){
    alert("Passwords dont match");
    return false; 
}
}


