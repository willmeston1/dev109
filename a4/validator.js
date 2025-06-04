function isValid() {
    if (firstName() //&&
       // lastName()
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    var validFirstname=false;

    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid");
                  }
    document.getElementById("fname").innerHTML = errorMessages;

    return (validFirstname);
}
  //To do: Remove [object HTMLCollection] text
  LastName.addEventListener('blur', lastName, false);
  function lastName(){
var validLastname=false;
var lastname = document.getElementById("LastName").value;

    if (lastname==="null" || lastname==="" || lastname.length > 20 ) {
      errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
      console.log("Last name invalid - length")
    } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
      errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
      console.log("First name invalid — bad characters")
    } else {
      validLastname = true;
      console.log("Last name valid")
    }

       document.getElementById("lname").innerHTML = errorMessages;

return (validLastname);
  }

Email.addEventListener('blur', email, false);
 function email() {
   var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    errorMessages += "<p>Invalid email</p>";
} else {
    return true;
 }
 }

//To do: Remove [object HTMLCollection] text
  Username.addEventListener('blur', userName, false);
  function userName(){
    var validUsername = false;
    var username = document.getElementById("Username").value;
    if (username==="null" || username==="" || username.length > 12 ) {
      errorMessages += "<p>Username is required; cannot be greater than 12 characters</p>";
} else {
  validUsername = true;
  console.log ("Username valid")
}
    document.getElementById("username").innerHTML = errorMessages;
    return true;
  }
