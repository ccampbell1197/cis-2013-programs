//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results


/*
 * the calcCircleCircum function is activated when the calc_circle_cirum button on the DOM
 * is clicked.  It reads the radius information from the DOM and then reports the circle
 * circumference in an alert box, using the circleCircum function to perform the calculation
 */
var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};


function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
}
//CIRCLE AREA


var calcCircleArea = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle area is " + circleArea(floatRadius));	
};


function circleArea(floatRadius)
{
	var floatArea = parseFloat (Math.PI * floatRadius^2);
	return floatArea.toFixed(2);
}

//
function rectArea(floatRectHeight,floatRectWidth)
{
    var floatRectArea = parseFloat (floatRectHeight * floatRectWidth);
    return floatRectArea.toFixed(2);
    
}

var calcRectArea = function()
{
    var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);
    alert ("The Rectangle Area is " + rectArea(floatRectHeight,floatRectWidth));	
};

function rectperim(floatRectHeight,floatRectWidth)
{
    var floatRectPerim = parseFloat ((floatRectHeight * 2) + (floatRectWidth * 2) );
    return floatRectPerim.toFixed(2);
}
    var calcRectPerim = function()
{
    var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);
    alert ("The Rectangle Perimeter is " + rectperim(floatRectHeight,floatRectWidth));	
};

function triangleArea(floatTriSide1,floatTriSide2,floatTriSide3)
{
	floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1)*(floatS-floatTriSide2)*(floatS-floatTriSide3)));
    return floatTriangleArea.toFixed(2);
}

var calcTriangleArea = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
    floatS = (floatTriSide1 + floatTriSide2 + floatTriSide3)/2;
    alert ("The triangle area is" + triangleArea(floatTriSide1,floatTriSide2,floatTriSide3));
};

function trianglePerim(floatTriSide1,floatTriSide2,floatTriSide3)
{
    floatTrianglePerim = (floatTriSide1+floatTriSide2+floatTriSide3);
    return floatTrianglePerim.toFixed(2);
}

var calcTrianglePerim = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
    alert ("The triangle area is" + trianglePerim(floatTriSide1,floatTriSide2,floatTriSide3));
};

var calc = function () 
{

var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);

alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + 
	" and the perimeter is " + rectPerim (floatRectWidth,floatRectHeight) + 
	"\n\n" + "The Triangle area is " + 	triangleArea(floatTriSide1,floatTriSide2,floatTriSide3) + 
	" and the perimeter is " + 
	trianglePerim(floatTriSide1,floatTriSide2,floatTriSide3) + "\n\n" +
	"The Circle area is " + circleArea(floatRadius) + 
	" and the circumference is " + circleCircum(floatRadius));


};


window.onload = function () 
{
    //lines 51-56 clear the DOM values..
    $("rect_width").value = "";
    $("rect_height").value = "";
   $("tri_side1").value = "";
    $("tri_side2").value = "";
    $("tri_side3").value = "";
    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum;
    $("calc_circle_area").onclick = calcCircleArea;
    $("calc_rect_area").onclick = calcRectArea;
    $("calc_rect_perim").onclick = calcRectPerim;
    $("calc_tri_area").onclick = calcTriangleArea;
    $("calc_tri_perim").onclick = calcTrianglePerim;
    $("calc_all").onclick = calc;
};
