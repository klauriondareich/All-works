// adding a JS class to the html

document.querySelector("html").classList.add('js');

// Variables initialization

let fileInput  = document.querySelector( ".input-file" );
let  button     = document.querySelector( ".upload-file" );
let  file_path = document.querySelector(".file-path");

// Event called when the Enter or space-bar key is pressed

button.addEventListener( "keydown", function(envent) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});

// Event called when the label button is pressed

button.addEventListener( "click", function() {
   fileInput.focus();
   return false;
});

// Show the path of the selected element

fileInput.addEventListener( "change", function( event ) {
    file_path.innerHTML = this.value;
});


// When we choose a language //

  let selectItem = document.getElementById("languages"),
   itemArray = ["html5.png","css-3.png","js.png"],
   path = "assets/img/",
   display_images = document.getElementById("item-image"),
   image_legend = document.getElementById("image-legend");

  selectItem.addEventListener("change", function(e){
    let value = e.target.value;
    if(value === "css"){
      display_images.src = path + itemArray[1];
      image_legend.textContent = "CSS";
    }
    else if(value === "js" ){
      display_images.src = path + itemArray[2];
      image_legend.textContent = "Javascript";
    }
    else{
      display_images.src = path + itemArray[0];
      image_legend.textContent = "HTML5";
    }
  });
