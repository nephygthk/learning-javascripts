//Canvas API: a means for drawing graphics
//    used for animations, games and data visualization.


let canvas = document.getElementById("myCanvas");

// let context = canvas.getContext("2d");
let pattern = canvas.getContext("2d");



//to draw triangle
// pattern.strokeStyle = "yellow";
// pattern.fillStyle = "purple";
// pattern.lineWidth = 8;
// pattern.beginPath();
// pattern.moveTo(100,0);
// pattern.lineTo(0,100);
// pattern.lineTo(200,100);
// pattern.lineTo(100,0);
// pattern.stroke();
// pattern.fill();


//how to draw lines in canvas
// context.strokeStyle = "red";
// context.lineWidth = 5;
/*context.beginPath();
context.moveTo(0,0);
context.lineTo(100,100);
context.lineTo(100,200);
context.moveTo(200,0);
context.lineTo(100,100);
context.stroke();*/

//to draw rectangles
// pattern.strokeReact(corner, corner, width,height)
// pattern.fillStyle = "black";
// pattern.fillRect(0, 0, 100,100);
// pattern.strokeStyle = "black";
// pattern.strokeRect(0, 0, 100,100);

// pattern.fillStyle = "red";
// pattern.fillRect(0, 100, 100,100);
// pattern.strokeStyle = "black";
// pattern.strokeRect(0, 100, 100,100);

// pattern.fillStyle = "green";
// pattern.fillRect(100, 0, 100,100);
// pattern.strokeStyle = "black";
// pattern.strokeRect(100, 0, 100,100);

// pattern.fillStyle = "yellow";
// pattern.fillRect(100, 100, 100,100);
// pattern.strokeStyle = "black";
// pattern.strokeRect(100, 100, 100,100);


//to draw a circle
// arc(x,y,r, sangle, eangle, counterclockwise)
// arc(corner, corner,radius, startingangle, endingangle, counterclockwise)

// pattern.beginPath();
// // pattern.arc(100, 100, 50, 1, 2 * Math.PI, true);
// pattern.fillStyle = "lightgreen";
// pattern.lineWidth = 5;
// pattern.strokeStyle = "darkgreen"
// pattern.arc(100, 100, 50, 0, 2 * Math.PI);
// pattern.stroke();
// pattern.fill();


//draw text

//pattern.fillText(text string, corner,corner);
//pattern.font = "fontsize fontfamily"
pattern.font = "20px MV boli";
pattern.fillStyle = "grey";
pattern.textAlign = "center";
// pattern.fillText("You Win!! ", 50, 50);
pattern.fillText("You Win!! ", canvas.width / 2, canvas.width / 2);// to center a text, after this set the textalignment

