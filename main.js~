//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("slate");
var stopButton = document.getElementById( "stop" );
var circleButton = document.getElementById( "circle" );
var dvdButton = document.getElementById( "dvd" );
var img1=new Image();
img1.src = "7388.jpg"

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to lello
ctx.fillStyle = "#ffff00";


var requestID;


var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, 500, 500);
};


//wrapper function will allow inner function to keep track of
// its own complement of local variables (radius, xcor...)
var anime = function() {
	
    window.cancelAnimationFrame( requestID );
	
    console.log(requestID);

    //init params for drawing dot
    var radius = 50;
    var xcor = c.width / 2;
    var grow = 1;

    //Q: what happens w/ & w/o next line?
    //window.cancelAnimationFrame( requestID );

    var drawDot = function() {
	console.log( requestID )

	ctx.clearRect( 0, 0, c.width, c.height );
	
	ctx.beginPath();
	ctx.arc( xcor, 150, radius, 0, 2 * Math.PI );
	ctx.stroke();
	ctx.fill();
	if(radius==c.height/2||radius==0){
	    grow=grow*-1;
	};
	radius+=grow;
	requestID = window.requestAnimationFrame( drawDot );
    };
    drawDot();
};

var bounce = function() {
	
    window.cancelAnimationFrame( requestID );
	
    console.log(requestID);

    //init params for drawing square
    var ycor = 150//(Math.random()*(c.height-49))+50;
    var xcor = 150//(Math.random()*(c.width-49))+50;
    var xdir = 1;
    var ydir = 1;

    //Q: what happens w/ & w/o next line?
    //window.cancelAnimationFrame( requestID );

    var dvd = function() {
	console.log( requestID )

	ctx.clearRect( 0, 0, c.width, c.height );
	
	ctx.beginPath();
	ctx.drawImage(img1, xcor, ycor, 60,40);
	ctx.stroke();
	ctx.fill();
	if(xcor==c.width-60||xcor==0){
	    xdir = xdir * -1;
	};
	if(ycor==c.height-40||ycor==0){
	    ydir = ydir * -1;
	};
	xcor+=xdir;
	ycor+=ydir;
	requestID = window.requestAnimationFrame( dvd );
    };
    dvd();
};

var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );
};


circleButton.addEventListener( "click", anime )

stopButton.addEventListener( "click",  stopIt );

dvdButton.addEventListener( "click", bounce )
