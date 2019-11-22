//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}


var generate = function () 
{
var i,j,k,stringOutput;
	 i=0;  // sets the first number in the Fibonacci series to 0
	 j=1;  //sets the second number in the Fibonacci series to 1
	    //k is calculated by adding i+j and represents the next Fibonacci number
 stringOutput = i +" "j ;//initialize the Fibonacci series output to include the first two numbers
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	intCount = 2;
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	if (isNaN(intCount)||intCount<1||>100))
    {
      $("total_fib").value = "";
      $("output").value = "Please enter a valid number. Input must be a number 1-100"
    }
    else
    {
      while(intCount>2)
      {
        k=i+j;
        i=j;
        j=k;
        stringOutput = stringOutput + k;
        intCount--;
      }
    $("output").value = stringOutput;
    alert(stringOutput);
    }
//While loop and alert provide the requested out put quantity of f numbers
}

i=0;
j=1;
//resetting i and j
// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  
