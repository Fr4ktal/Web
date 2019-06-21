document.open("./index.html");

//Set c to the Canvas.
var c = document.getElementById("c");


/////////////////////////
//Find good canvas size//
/////////////////////////
var Orientation;
{
  if(window.innerWidth >= window.innerHeight) {
    //Viewport Width is more than or exactly Viewport Height:
    Orientation = "Landscape";
    //  alert("LANDSCAPE!");
    //Find Scaling Factor so the Canvas Width is exactly the VWidth.
    scalingFactor = window.innerWidth / 26;

    //Set Canvas size
    c.width  = 26 * scalingFactor;
    c.height =  9 * scalingFactor;

  } else {
    //Viewport Width is less than Viewport Height:
    Orientation = "Portrait";
    //  alert("PORTRAIT!");
    //Find Scaling Factor so the Canvas Height is exactly the VHeight.
    scalingFactor = window.innerHeight / 26;

    //Set Canvas size
    c.width  =  9 * scalingFactor;
    c.height = 26 * scalingFactor;
  }
}

document.close();
