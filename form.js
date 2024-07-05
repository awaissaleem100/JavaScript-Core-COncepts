const form=document.getElementById("my_form");
const nameInput=document.getElementById("name-input");
const passwordInput=document.getElementById("password-input"); 
function submithandler(event){
    event.preventDefault();
    const name=nameInput.value;
    const password=passwordInput.value;
    if(!name || !password){
        alert("Name and password cannot be empty");
        return false;
    }
    if(password.length < 8){
        alert("Password cannot be less than 8 characters");
        passwordInput.classList.add("error");
        return false;
    }
    passwordInput.classList.remove("error");
    console.log("Logged in Successfully");
}


form.addEventListener("submit",submithandler);