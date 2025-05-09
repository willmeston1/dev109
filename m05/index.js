function changeVariable() {
    var table = 0;
    var userInput = prompt("Enter a new value for i:", table);
   console.log(userInput); 
  
  if (userInput === null || userInput.trim() === "") { 
        table = 0;
    } else {
        table = userInput;
    }

    console.log("New table value:", table); // Debugging check
    alert(table)
    
    // Display result on the webpage
    // Write the message into the page
    renderPage(table);
}

function renderPage(table){// Write the message into the page
  var operator = 'multiplication'; // Type of calculation
  var i = 1;                 // Set counter to 1
  var msg = '<h2>Multiplication Table</h2>';              // Message

  if (operator === 'multiplication') {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}
  var el = document.getElementById('blackboard');
el.innerHTML = msg;

}

renderPage(0);
