function checkPassword(){
    let password = document.getElementById("password").value;
    let Confirmpassword = document.getElementById("Confirmpassword").value;
    console.log(password,Confirmpassword);
    let message = document.getElementById("message");
    if(password.length < 6){
        document.getElementById("password").innerHTML="password is weak";
        password.style.color = "red";
    }else if(password.length > 6 && password.length <=8){
        document.getElementById("password").innerHTML="password is medium";
        password.style.color = "yellow";
    }else{
        document.getElementById("password").innerHTML="password Strong";
        password.style.color = "green";
    }
        if(password==Confirmpassword){
            message.textContent = "password match";
            message.style.backgroundColor = "#3ae374";
        }
        else{
            message.textContent = "password don't match";
            message.style.backgroundColor = "red";
        }
    }