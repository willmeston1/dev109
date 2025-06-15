var  mybutton = document.querySelector("button");
mybutton.addEventListener("click", function(event) {


var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events

event.stopPropagation();
  });


  addEventListener("click", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
    
     updateDot(dot);
  });

  function updateDot() {
    let dot = document.querySelector(".dot");
    let newColor = document.getElementById("color").value;
    let newSize = document.getElementById("size").value + "px";
    let newBorder =document.getElementById("size").value + "px";
    
    dot.classList.add("dot");
    dot.style.height = newSize;
    dot.style.width = newSize;
    dot.style.backgroundColor = newColor;


    dot.style.backgroundColor = newColor;
    dot.style.height = newSize;
    dot.style.width = newSize;
  }

  // Event listeners to detect user input changes
  document.getElementById("color").addEventListener("change", updateDot);
  document.getElementById("size").addEventListener("input", updateDot);
