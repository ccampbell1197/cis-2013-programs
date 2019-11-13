
//declare var
var intMax, intMin, intRandom, intGuess, intCount, floatScore, intPrior,intQuit;

intQuit = 2
intQuit = parseInt (prompt("Press 1 to quit, press any enter to play."));
while (intQuit !== 1){

// This code prompts input for minimum and maximum vlues



intMin = parseInt (prompt("Enter minimum guess value"));
while (isNaN(intMin) || intMin<=0)
{
  intMin = parseInt(prompt("Your Minimum number choice is too low! Make sure it is a number greater than 0")); // user validation
}
document.write ("Lowest number = " +intMin);


intMax = parseInt (prompt("Enter maximum guess value"));
while (isNaN(intMax) ||  intMax < (intMin + 2))
{
  intMax = parseInt(prompt("Your Maximum number choice is too low! Make sure it is a number greater than 0")); // user validation
};
document.write ("Highest number = " +intMax);



intPrior=[
  
];

intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);//random number generator


intCount=1;

floatScore = (intMax-intMin)*((10-intCount)*10)// Creates relative score for number of guess relative to random range SCORE EXTRA CREDIT
document.write ("Score= "+ floatScore);






//guess correction code
 


intGuess=parseInt(prompt("Please enter your guess"))



intPrior.push(intGuess); //prompts guess input
 
 while (intGuess>intRandom){
  
   alert ("Your guess is too high!");
   ++intCount;
   intGuess=parseInt(prompt("Please enter a lower guess"))
    intPrior.push(intGuess);//adds to intPrior array
   
 };
 while (intGuess<intRandom){
  
    
   alert ("Your guess is too low!");
   ++intCount;
   intGuess=parseInt(prompt("Please enter a higher guess"));
    intPrior.push(intGuess);
    
 };
 

// provides final output upon successful guessing

alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts! Your score is " + floatScore + "Your guesses were "+intPrior);

intQuit = parseInt (prompt("Press 1 to quit, press any enter to play."));
};// Loop code/ Sentinel value



// HTML DOM interaction could be implemented by using HTML input to recieve values for intGuess, intMax and intMin. JS output commands could be used to create text box information similar to the printer Hands-On rather than default JS alerts(I.E: $("score").value = floatScore ;}.)

    // TBD changes for ease of use:
    // Alerts remind the user to enter a lower or higher value
    //List of guesses added to output alert

    // if (intGuess=intPrior){
  //alert ("you already chose that one");
   // };
