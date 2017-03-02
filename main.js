//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var svg = document.getElementById("vimage");
var stopButton = document.getElementById( "stop" );
var circleButton = document.getElementById( "circle" );
var dvdButton = document.getElementById( "dvd" );
var img1=new Image();
img1.src = "7388.jpg"
var rect = svg.getBoundingClientRect(); // get the bounding rectangle


//set fill color to lello
var requestID;

var clear = function(e) {
    while(svg.lastChild){
	svg.removeChild(svg.lastChild);
    };
    x=-1;
};


//wrapper function will allow inner function to keep track of
// its own complement of local variables (radius, xcor...)
var anime = function() {
	
    window.cancelAnimationFrame( requestID );
	
    console.log(requestID);

    //init params for drawing dot
    var radius = 50;
    var xcor = rect.width / 2;
    var ycor = rect.height / 2;
    var grow = 1;

    //Q: what happens w/ & w/o next line?
    //window.cancelAnimationFrame( requestID );

    var drawDot = function() {
	console.log( requestID )

	clear();
	var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
	c.setAttribute("cx",xcor);
	c.setAttribute("cy",ycor);
	c.setAttribute("r", radius);
	c.setAttribute("fill","yellow");
	document.getElementById("vimage").appendChild(c);
	if(radius==rect.height/2||radius==0){
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

	clear();
	var c = document.createElementNS("http://www.w3.org/2000/svg","image");
	c.setAttribute("href","7388.jpg");
	c.setAttribute("x",xcor);
	c.setAttribute("y", ycor);
	c.setAttribute("height", "120");
	c.setAttribute("width", "80");
	c.setAttribute("fill","yellow");
	document.getElementById("vimage").appendChild(c);
	
	if(xcor==rect.width-120||xcor==0){
	    xdir = xdir * -1;
	};
	if(ycor==rect.height-80||ycor==0){
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
