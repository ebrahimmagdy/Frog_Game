// Getting input from Sign In
var emailIn = document.getElementById("emailIn");
var passwordIn = document.getElementById("passwordIn");

// Getting input from Sign Up
var emailUp = document.getElementById("emailUp");
var passwordUp = document.getElementById("passwordUp");
var repPass = document.getElementById("repPass");

// Getting input from Buttons
var signInBtn = document.getElementById("signInBtn");
var signUpBtn = document.getElementById("signUpBtn"); 

// Creating li for Sign In
var li_emailIn = document.createElement("li");
var li_passwordIn = document.createElement("li");

// Creating li for Sign Up
var li_emailUp = document.createElement("li");
var li_passwordUp = document.createElement("li");
var li_repPass = document.createElement("li");


signInBtn.addEventListener("click", function(event)
{
    var emailIn_Value = emailIn.value; //for IF
    var passwordIn_Value = passwordIn.value; //for IF

    var emailUp_Value = emailUp.value; //for IF
    var passwordUp_Value = passwordUp.value; //for IF
    var repPass_Value = repPass.value; //for IF

    li_emailIn.innerHTML = ""; // for clear the last inner html
    li_passwordIn.innerHTML = ""; // for clear the last inner html

    li_emailUp.innerHTML = ""; // for clear the last inner html
    li_passwordUp.innerHTML = ""; // for clear the last inner html
    li_repPass.innerHTML = ""; // for clear the last inner html

    var ul = document.getElementById("error-messages"); // for appending

    if (emailIn_Value === "")
    {
        document.getElementsByClassName("errors")[0].style.display = "block";
        ul.appendChild(li_emailIn);
        li_emailIn.innerHTML = "<b>Email is required";
        event.preventDefault();
    }
    if(passwordIn_Value === "" || passwordIn_Value.length < 8)
    {
        document.getElementsByClassName("errors")[0].style.display = "block";
        ul.appendChild(li_passwordIn);
        li_passwordIn.innerHTML = "<b>Password is required";
        event.preventDefault();
    }
    // if(emailUp_Value === "" || passwordValue.length < 8)
    // {
    //     document.getElementsByClassName("errors")[0].style.display = "block";
    //     ul.appendChild(li_password);
    //     li_password.innerHTML = "<b>Password must be 8 chars at least";
    //     event.preventDefault();
    // }
    // if(passwordUp_Value === "" || passwordValue.length < 8)
    // {
    //     document.getElementsByClassName("errors")[0].style.display = "block";
    //     ul.appendChild(li_password);
    //     li_password.innerHTML = "<b>Password must be 8 chars at least";
    //     event.preventDefault();
    // }
    // if(repPass_Value === "" || passwordValue.length < 8)
    // {
    //     document.getElementsByClassName("errors")[0].style.display = "block";
    //     ul.appendChild(li_password);
    //     li_password.innerHTML = "<b>Password must be 8 chars at least";
    //     event.preventDefault();
    // }
})

