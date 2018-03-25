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
  var count = 0;
  while (crystals.length < 4) {
    var x = Math.floor(Math.random() * (12 + 1 - 1)) + 1;
    if (!crystals.includes(x)) {
      crystals.push(x);
      $("#crystal-"+(count+1)).data("val", crystals[count++]);
    }
  }
}

$(document).ready(function() {
  //assesses previous performance and alerts player
  var preWins = localStorage.getItem("previous-wins");
  var preLosses = localStorage.getItem("previous-losses");
  if (preLosses > preWins) {
    alert("You did a terrible job last time.");
  } else if (preWins > preLosses) {
    alert("You did alright last time, why come back?");
  }
  //clears local storage after message is displayed to prevent erroneous results
  //Is there a way to not clear if the person doesnt actually conmplete a game
  localStorage.clear();

  //starts and resets game
  function initialize() {
    crystals = [];
    total = 0;
    setNumbers();
    $("#total").hide();
    $("#random-num").text("Number: " + randomNumber);

    console.log(crystals, randomNumber);
  }

  initialize();

  function check() {
    if (total === randomNumber) {
      //win logic and stores in local storage
      wins += 1;
      localStorage.setItem("previous-wins", wins);
      $("#wins").text("Wins: " + wins);
      alert("You win I guess. Not a very challenging game.");
      initialize();
    } else if (total > randomNumber) {
      //loss logic and stores in local storage
      losses += 1;
      localStorage.setItem("previous-losses", losses);
      $("#losses").text("Losses: " + losses);
      alert("Garbage");
      initialize();
    }
  }

  //button click function
  $(".button-con").on("click", ".crystal", function() {
    $("#total").show();
    $("#total").text("Total: " + total);
    total += parseInt($(this).data("val"));
    $("#total").text("Total: " + total);
    check();
  });
});
