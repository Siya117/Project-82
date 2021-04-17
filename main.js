var mouseEvent = "empty";
var last_position_of_x,last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red"; 

Width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);
    Width_of_line = document.getElementById("Width_of_line").value;
    //addition activity ends
    
     mouseEvent= "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent== "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=Width_of_line;
        console.log("last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y );
        moveTo(last_position_of_x,last_position_of_y);
        
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y );
        
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 40 ,0 , 2*Math.PI);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    
     mouseEvent= "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    
     mouseEvent= "mouseleave";
}

//additional activity

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}