var wins = 0;
var losses = 0;
var total = 0;
//random number between 19-120
var randomNumber;
//Each random number between one and twelve
var crystals = [];

function setNumbers() {
  //creates random number to guess
  randomNumber = Math.floor(Math.random() * (120 + 1 - 19)) + 19;
  //creates array of random values for buttons
  while (crystals.length < 4) {
    var x = Math.floor(Math.random() * (12 + 1 - 1)) + 1;
    if (!crystals.includes(x)) {
      crystals.push(x);
    }
  }
}

$(document).ready(function() {
  //starts and resets game
  function initialize() {
    crystals = [];
    total = 0;
    setNumbers();
   $("#total").hide();
    $("#random-num").text("Number: "+ randomNumber);    
    $("#crystal-1").val(crystals[0]);
    $("#crystal-2").val(crystals[1]);
    $("#crystal-3").val(crystals[2]);
    $("#crystal-4").val(crystals[3]);
    console.log(crystals, randomNumber);

  }
//can i store html elements in an array and then loop through them as I loop through crystal values?
  //for (i=0; i<crystals.length; i ++){
    
  //   $(".crystal").val(crystals[wouldnt this then be j from the other loop?]);
  // }
  initialize();


  function check(){
  if (total === randomNumber) {
    wins+=1
    $("#wins").text("Wins: "+ wins);
    alert("You win I guess. Not a very challenging game.");
    initialize();
  } else if (total > randomNumber) {
    losses+=1
    $("#losses").text("Losses: "+ losses);
    alert("Garbage");
    initialize();
  };
}


  $(".button-con").on("click", ".crystal", function() {
    $("#total").show();
    $("#total").text("Total: "+ total);
    total += parseInt($(this).val());
    $("#total").text("Total: "+ total);
    check()

  });

});
