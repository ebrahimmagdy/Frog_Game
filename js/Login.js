// Getting input from Sign In
var emailIn = document.getElementById("emailIn");
var passwordIn = document.getElementById("passIn");

// Getting input from Sign Up
var emailUp = document.getElementById("emailUp");
var passwordUp = document.getElementById("passUp");
var repPass = document.getElementById("repPass");

// Getting input from Buttons
var signInBtn = document.getElementById("signInBtn");
var signUpBtn = document.getElementById("signUpBtn"); 


// Signin Button 
signInBtn.addEventListener("click", function(event)
{
    var emailIn_Value = emailIn.value; 
    var passwordIn_Value = passwordIn.value; 

    if (emailIn_Value === "")
    {
        event.preventDefault();
        document.getElementById("emailIn").placeholder="required*";
    }

    if(passwordIn_Value === "")
    {
        event.preventDefault();
        document.getElementById("passIn").placeholder="required*";   
     
    }
    else if(passwordIn_Value.length < 8)
    {
        event.preventDefault();
        alert("Password must be 8 chars at least");
    }
});


// Signup Button 
signUpBtn.addEventListener("click", function(event)
{
    var emailUp_Value = emailUp.value; 
    var passwordUp_Value = passwordUp.value; 
    var repPass_Value = repPass.value; 

    if(emailUp_Value === "")
    {
        event.preventDefault();
        document.getElementById("emailUp").placeholder="required*";
    }
    if(passwordUp_Value === "")
    {
        event.preventDefault();
        document.getElementById("passUp").placeholder="required*";
    }
    else if(passwordUp_Value.length < 8)
    {
        event.preventDefault();
        alert("Password must be 8 chars at least");
    }

    if(repPass_Value === "")
    {
        event.preventDefault();
        document.getElementById("repPass").placeholder="required*";
    }
    if((repPass_Value != passwordUp_Value) && passwordUp_Value != "")
    {
        event.preventDefault();
        alert("Passwords are not same!");
    }
});


