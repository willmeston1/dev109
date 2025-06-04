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
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid");
                  };
    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
}
  
  LastName.addEventListener('blur', lastName, false);
  function lastName(){
  //1) Create variable
var validLastname=false;
//2) read value from HTML
var lastname = document.getElementById("LastName").value;

//3) Do validation
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
//4) Send error message to HTML
       document.getElementById("lname").innerHTML = errorMessages;
//5) return status of each field
return (validLastname);
  }

//To do: Username error also shows up under Last Name text box
  Username.addEventListener('blur', username, false);
  function username(){
    var validUsername = false;
    var userName = document.getElementById("Username").value;
    if (userName==="null" || userName==="" || userName.length > 12 ) {
      errorMessages += "<p>Username is required and cannot be greater than 12 characters</p>";
} else {
  validUsername = true;
  console.log ("Username valid")
}
    document.getElementById("username").innerHTML = errorMessages;
    return (validUsername);
  }
