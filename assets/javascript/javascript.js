
$(document).ready(function(){

var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber = "";
var randomRuby = "";
var randomDiamond = "";
var randomAmber = "";
var randomEmerald = "";

function totalScoreReset(){
    totalScore = 0;
}

function randomNumberFunction(){
    randomNumber = Math.floor(Math.random() * 120) + 19;
    $("#random-number").html(randomNumber);
}

randomNumberFunction();

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

randomCrystalFunction();

    console.log("random= " + randomNumber);
    console.log("ruby= " + randomRuby);
    console.log("ruby value = " + $("#ruby").attr("value"));
    console.log("diamond= " + randomDiamond);
    console.log("diamond value = " + $("#diamond").attr("value"));
    console.log("amber= " + randomAmber);
    console.log("amber value = " + $("#amber").attr("value"));
    console.log("emerald= " + randomEmerald);
    console.log("emerald value = " + $("#emerald").attr("value"));
    console.log("------------------------")

function resetFunction(){
        wins = 0;
        losses = 0;
        totalScore = 0;
        randomNumberFunction();
        randomCrystalFunction();
        $("#wins").html("Wins: "+wins);
        $("#losses").html("Losses: "+losses);
        $("#totalScore").html(totalScore);
        console.log("random= " + randomNumber);
        console.log("ruby= " + randomRuby);
        console.log("ruby value = " + $("#ruby").attr("value"));
        console.log("diamond= " + randomDiamond);
        console.log("diamond value = " + $("#diamond").attr("value"));
        console.log("amber= " + randomAmber);
        console.log("amber value = " + $("#amber").attr("value"));
        console.log("emerald= " + randomEmerald);
        console.log("emerald value = " + $("#emerald").attr("value"));
        console.log("wins= " + wins);
        console.log("losses= " + losses);
        console.log("------------------------");
}


$(".crystal").on("click", function(){

    totalScore = totalScore + parseInt(($(this).attr("value")));
    console.log(totalScore);
    console.log("------------------------");

    if(totalScore == randomNumber){
        wins++;
        $("#wins").html("Wins: " + wins);
        totalScoreReset();
        randomNumberFunction();
        randomCrystalFunction();
        $("#total-score").html(totalScore);
        console.log("random= " + randomNumber);
        console.log("ruby= " + randomRuby);
        console.log("ruby value = " + $("#ruby").attr("value"));
        console.log("diamond= " + randomDiamond);
        console.log("diamond value = " + $("#diamond").attr("value"));
        console.log("amber= " + randomAmber);
        console.log("amber value = " + $("#amber").attr("value"));
        console.log("emerald= " + randomEmerald);
        console.log("emerald value = " + $("#emerald").attr("value"));
        console.log("wins= " + wins);
        console.log("losses= " + losses);
        console.log("------------------------");
    }

    else if(totalScore > randomNumber){
        losses++;
        $("#losses").html("Losses: " + losses);
        totalScoreReset();
        randomNumberFunction();
        randomCrystalFunction();
        $("#total-score").html(totalScore);
        console.log("random= " + randomNumber);
        console.log("ruby= " + randomRuby);
        console.log("ruby value = " + $("#ruby").attr("value"));
        console.log("diamond= " + randomDiamond);
        console.log("diamond value = " + $("#diamond").attr("value"));
        console.log("amber= " + randomAmber);
        console.log("amber value = " + $("#amber").attr("value"));
        console.log("emerald= " + randomEmerald);
        console.log("emerald value = " + $("#emerald").attr("value"));
        console.log("wins= " + wins);
        console.log("losses= " + losses);
        console.log("------------------------");
    }

    else if(totalScore < randomNumber){
        $("#total-score").html(totalScore);
    }

});



$("#reset").on("click", function(){
    resetFunction();
});


});

