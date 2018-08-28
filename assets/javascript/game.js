//a game with 4 crystal and random result
//every crystal nneds to have a random number between 1-12
//a new number should be generate every single time we win or lose
//to those 4 crystals
//when clicking any crystal, it should adding with previous result
//until it equals to the random results
//if it is greater than result then add lost
//if equal then add to win
$(document).ready(function () {
    var randomScore = NumGen();
    var matchingScore = 0;
    var lost = 0;
    var wins = 0;
    var crystal;
    function randomCrystal() {
        return {
            c1: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: ""
            },
            c2: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: ""
            },
            c3: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: ""
            },
            c4: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: ""
            }
        };
    }
    function NumGen() {
        return Math.floor(Math.random() * 102) + 19;
    }
    function start(){
        matchingScore = 0;
        crystal = randomCrystal();
        randomScore = NumGen()
        $("#random-area").text(randomScore);
    }
    function winner(didUWin){
        $("#win-area").empty();
        if(didUWin === true){
        $("#win_area").append($("<p>").text("You Win!!"));
        start();
        renderMNum();
    }
    else if (didUWin===flase){
        $("#win_area").append($("<p>").text("You Lost :-("));
        start();
        renderMNum();
    }
    var wSpan = $("<span>").text(wins);
    var lSpan = $("<span>").text(lost);
    var pWins = $("<p>").text("Wins: ");
    var pLosses = $("<p>").text("Losses: ");
    pWins.append(wSpan);
    pLosses.append(lSpan);
    $("#win-area").append(pWins);
    $("#win-area").append(lSpan);
    }
    function renderC(){
        for(var key in crystal){
            var crystalDiv = $("<div class='crystals-button' data-name='"+ key+ "'>");
            var cImange = $("<img alt='image' class='crystal-img'>").attr("src",crystal[key].imageUrl);
            crystalDiv.append(cImange);
            $("#crystal-area").append(crystalDiv);
        }
    }
    function matchNumUpdate(crystal){
        matchingScore +=crystal[crystal.attr("data-name")].points;
    }
    function renderMNum(){
        var scoreDiv = $("<div id='score-number'>").text(matchingScore);
        $("#score-area").html();
        $("#score-area").html(scoreDiv);
    }
    start();
    winner();
   renderC();
   renderMNum();
   $(".crystals-button").on("click",function(event){
       matchNumUpdate($(this));
       renderMNum();
       if (matchingScore === randomScore){
           wins++;
           start();
           winner(true);
       }
       else if (matchingScore > randomScore){
           lost++;
           start();
           winner(false);
       }
   });
});
