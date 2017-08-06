
$(document).ready(function(){

    //set global variables/counters
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var randomNumber = "";
    var randomRuby = "";
    var randomDiamond = "";
    var randomAmber = "";
    var randomEmerald = "";

    //set reset total score function able to call within on click function
    function totalScoreReset(){
        totalScore = 0;
    }

    //create random number generator function
    function randomNumberFunction(){
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#random-number").html(randomNumber);
    }

    //initialize random number generation
    randomNumberFunction();

    //create random crystal number generator function
    function randomCrystalFunction(){
        randomRuby = Math.floor(Math.random() * 12) + 1;
        $("#ruby").attr("value",randomRuby);
        randomDiamond = Math.floor(Math.random() * 12) + 1;
        $("#diamond").attr("value",randomDiamond);
        randomAmber = Math.floor(Math.random() * 12) + 1;
        $("#amber").attr("value",randomAmber);
        randomEmerald = Math.floor(Math.random() * 12) + 1;
        $("#emerald").attr("value",randomEmerald);
    }

    //initialize random crystal number generation
    randomCrystalFunction();

    //create reset game function
    function resetFunction(){
            wins = 0;
            losses = 0;
            totalScore = 0;
            randomNumberFunction();
            randomCrystalFunction();
            $("#wins").html("Wins: "+wins);
            $("#losses").html("Losses: "+losses);
            $("#total-score").html(totalScore);
    }

    //create on click event function for all crystals
    $(".crystal").on("click", function(){

        //total score tracker after on click
        totalScore = totalScore + parseInt(($(this).attr("value")));

        //win scenario - wins go up and game restarts
        if(totalScore == randomNumber){
            wins++;
            $("#wins").html("Wins: " + wins);
            totalScoreReset();
            randomNumberFunction();
            randomCrystalFunction();
            $("#total-score").html(totalScore);
        }

        //loss scenario - losses go up and game restarts
        else if(totalScore > randomNumber){
            losses++;
            $("#losses").html("Losses: " + losses);
            totalScoreReset();
            randomNumberFunction();
            randomCrystalFunction();
            $("#total-score").html(totalScore);
        }

        //continue playing scenario - total score goes up
        else if(totalScore < randomNumber){
            $("#total-score").html(totalScore);
        }

    });

    //reset function called on click of reset button
    $("#reset").on("click", function(){
        resetFunction();
    });

});

