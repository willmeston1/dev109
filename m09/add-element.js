function addListItem() {
var newEl = document.createElement('li');
var userText = document.getElementById("userInput").value;
var newText = document.createTextNode(userText);
var outputElement = document.getElementById("output");
  
    newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);
  
  outputElement.innerHTML = ""; // Clear previous content
    outputElement.appendChild(newText); // Append new text

}
