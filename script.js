  // Get the modal
  var modal = document.getElementById('id02');
        
 // function to calculate the volume //
function calculateVolume() {
  var radius = document.forms["MyForm"]["radius"].value;
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  
  
    if(isNaN(radius)) {
        document.getElementById("error-message2").innerHTML = "Please write only numbers"
        document.getElementById("error-message").innerHTML = null;
        clearCanvas()
    }

    else {
        document.getElementById("error-message2").innerHTML = "Good Job!"
        document.getElementById("volume").innerHTML = volume.toFixed(2);
        calculateRadius()
    }
  
  
  }
 
 // function to paint the circle in the canvas + if the circle is too big , it will send error msg //
  

function calculateRadius() {
var radius = document.forms["MyForm"]["radius"].value;
var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
ctx.clearRect(0,0,500,500)
ctx.beginPath();
ctx.arc(150,75,radius,0,2 * Math.PI)
ctx.stroke();

if (radius > 75) {
    document.getElementById("error-message").innerHTML = "The Radius is too big , Please choose smaller number."
    document.getElementById("error-message2").innerHTML = ""
}

else {
    document.getElementById("error-message").innerHTML = ""
}
}

// function to clear the canvas //

function clearCanvas() {

    var clear = document.getElementById("my_canvas")
    var ctx = clear.getContext("2d")
    ctx.clearRect(0,0,500,500)
    
}

// end of the functions //