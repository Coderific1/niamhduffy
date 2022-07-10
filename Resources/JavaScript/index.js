function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username === 'niamhduffy' && password === 'password1234') {
        return true;
    }
    else {
        document.getElementById("username").style.border = "3px solid red";
        document.getElementById("password").style.border = "3px solid red";
        document.getElementById("incorrect-p").style.visibility = "visible";
        document.getElementById("incorrect-p").style.height = "1rem";
        document.getElementById("incorrect-p").style.width = "auto";
        return false;
    }
}