function toggleMenu(){

let nav=document.getElementById("navLinks");

nav.classList.toggle("active");

}



document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;
let msg=document.getElementById("formMessage");


if(name==="" || email==="" || message===""){
msg.innerText="Please fill all fields";
msg.style.color="red";
return;
}


let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
msg.innerText="Enter valid email";
msg.style.color="red";
return;
}

msg.innerText="Message sent successfully!";
msg.style.color="green";

});