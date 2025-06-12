

var myImages =["https://cdn.pixabay.com/photo/2018/03/04/22/25/any-person-not-3199425_640.jpg", "https://thumbs.dreamstime.com/b/see-beautiful-white-flower-garden-selective-focus-see-beautiful-white-flower-garden-183588004.jpg","https://d3i5p6znmm9yua.cloudfront.net/360_Tiffin_Live/0/0/0/0/459/317/459317_1","https://www.ocregister.com/wp-content/uploads/migration/kpj/kpjig2-b78458428z120090116150143000gddg5lo31lg.jpg?w=535","https://live.staticflickr.com/176/425906568_28fe424b7b_b.jpg"];


var captionImages =["Laugh","Love","Lunch","Happiness","Family"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,5000); // Next
