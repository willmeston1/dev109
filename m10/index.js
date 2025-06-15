
var  mybutton = document.querySelector("button");
mybutton.addEventListener("click", function(event) {


var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events

event.stopPropagation();
  });


document.addEventListener("click", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";

    // Set the initial color and size based on the selected values
    let newColor = document.getElementById("color").value;
    let newSize = document.getElementById("size").value + "px";

    dot.style.backgroundColor = newColor;
    dot.style.height = newSize;
    dot.style.width = newSize;

    document.body.appendChild(dot);
});


function updateDot(dot) {
    let newColor = document.getElementById("color").value;
    let newSize = document.getElementById("size").value + "px";

    dot.style.height = newSize;
    dot.style.width = newSize;
    dot.style.backgroundColor = newColor;
}

// Event listeners to detect user input changes
document.getElementById("color").addEventListener("change", function() {
    let lastDot = document.querySelector(".dot:last-of-type");
    if (lastDot) updateDot(lastDot);
});

document.getElementById("size").addEventListener("input", function() {
    let lastDot = document.querySelector(".dot:last-of-type");
    if (lastDot) updateDot(lastDot);
});
