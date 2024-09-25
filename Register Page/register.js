function resetErr() {
    document.getElementById("error-username").innerHTML = "";
    document.getElementById("error-email").innerHTML = "";
    document.getElementById("error-password").innerHTML = "";
    document.getElementById("error-confirm").innerHTML = "";
    document.getElementById("error-gender").innerHTML = "";
    document.getElementById("error-dob").innerHTML = "";
    document.getElementById("error-checkbox").innerHTML = "";
}

function validateData(){

    resetErr();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var male = document.getElementById("gender-man").checked;
    var female = document.getElementById("gender-women").checked;
    var dob = document.getElementById("date").value;
    var agreement = document.getElementById("checkbox").checked;

    if(username == ""){
        document.getElementById("error-username").innerHTML = "*Username must be filled!";
        return false;
    }

    if(username.length < 3 || username.length > 15){
        document.getElementById("error-username").innerHTML = "*Username length must between 3-15 char!";
        return false;
    }

    if(email == ""){
        document.getElementById("error-email").innerHTML = "*Email must be filled!";
        return false;
    }

    if(!email.endsWith("@gmail.com")){
        document.getElementById("error-email").innerHTML = "*Email must be end with '@gmail.com'";
        return false;
    }

    if(password == ""){
        document.getElementById("error-password").innerHTML = "*Password must be filled!";
        return false;
    }

    if(password.length < 7 || password.length > 15){
        document.getElementById("error-password").innerHTML = "*Password length must between 7-15 char!";
        return false;
    }

    if(!checkAlphaNum(password)){
        document.getElementById("error-password").innerHTML = "*Password must be alphanumeric!";
        return false;
    }

    if(confirm == ""){
        document.getElementById("error-confirm").innerHTML = "*Confirm password must be filled!";
        return false;
    }

    if(confirm != password){
        document.getElementById("error-confirm").innerHTML = "*Confirm password must be same as password!";
        return false;
    }

    if(!male&&!female){
        document.getElementById("error-gender").innerHTML = "*Gender must be selected between Male or Female!";
        return false;
    }

    if(dob == ""){
        document.getElementById("error-dob").innerHTML = "*Date of birth must be selected!";
        return false;
    }

    if(!agreement){
        document.getElementById("error-checkbox").innerHTML = "*You must agree terms & conditions";
        return false;
    }
}

function checkAlphaNum(password){
    var isAlpha = false;
    var isNum = false;
    for (let i = 0; i < password.length; i++) {
        if(isNaN(password[i])){
            isAlpha = true;
        } else {
            isNum = true;
        } 
        
        if (isAlpha&&isNum){
            return true;
        }
    }
    return false;
}