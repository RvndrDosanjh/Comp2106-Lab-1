var userSelection = prompt("choose ROCK, PAPER, or SCISSORS ", "");

if (userSelection == null || userSelection == "") {
  txt = "You cancelled the prompt.";
    console.log(txt);

} else {
  txt = "You selected "+userSelection;
  console.log(txt);
}

var computerSelection =getRandom(0.1,1).toFixed(2);
 

if(parseFloat(computerSelection)<=0.34)
  {
   computerSelection="PAPER"; 
  }
else if(parseFloat(computerSelection)>=0.35&&parseFloat(computerSelection)<=0.67)
  {
   computerSelection="SCISSORS"; 
  }
else if(parseFloat(computerSelection)>0.68&&parseFloat(computerSelection)<=1)
  {
   computerSelection="ROCK"; 
  }
 txt = "Computer selected "+computerSelection;
  console.log(txt);
userSelection=userSelection.toUpperCase();
computerSelection=computerSelection.toUpperCase();

if(userSelection===computerSelection)
{
    console.log("It is a tie");
}
else
  {
    if(userSelection=="PAPER")
      {
        if(computerSelection=="SCISSORS")
       {
            console.log("Computer Wins");
       }
        if(computerSelection=="ROCK")
       {
            console.log("User Wins");
       }
         
      }
    else   if(userSelection=="ROCK")
      {
        if(computerSelection=="SCISSORS")
       {
            console.log("User Wins");
       }
        if(computerSelection=="PAPER")
       {
            console.log("Computer Wins");
       }
         
      }
        else   if(userSelection=="SCISSORS")
      {
        if(computerSelection=="ROCK")
       {
            console.log("Computer Wins");
       }
        if(computerSelection=="PAPER")
       {
            console.log("Computer Wins");
       }
         
      }
     
  }


function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}