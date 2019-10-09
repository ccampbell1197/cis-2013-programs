var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts;

    floatHwPts = parseFloat($("hw_pts").value);
    
    var floatMidPts;

    floatMidPts = parseFloat($("mid_pts").value);
    
    var floatFinPts;

    floatFinPts = parseFloat($("fin_pts").value);
    
    var floatTotalPts;
    
    floatTotalPts = floatHwPts + floatMidPts + floatFinPts;
    
    if ($(grade_value).value)===1)
{
    if(floatTotalPts >= 80){
    ($("final_grade").value = "Pass");
    }
    else
    {
    ($("final_grade").value = "Fail");
    }
    }
    
    
    


};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};