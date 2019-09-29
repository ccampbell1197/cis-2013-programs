var $ = function (id) 
{
    return document.getElementById(id);
}


 
 var calculate = function(id)
 {
    var floatMonthlyPayment, intLoanTerm, floatTotalCost;
    floatMonthlyPayment = parseFloat($("monthly_payment").value);
    intLoanTerm = parseInt($(loan_length).value);
    floatTotalCost = parseFloat(floatMonthlyPayment*intLoanTerm);
    $("total_cost").value = floatTotalCost;
    
 }
 
 window.onload = function (id) 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
}
