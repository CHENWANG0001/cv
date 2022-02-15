var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red","blue","green","yellow"];


var level=0;

$(document).keydown(function(){
    if(gamePattern.length===0){ 
         nextSequence();
    }
    
    
})
function startOver(){
    gamePattern=[];
    userClickedPattern=[];
    level=0;
    nextSequence();
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function checkAnswer(currentColor){
    var numOfClick=userClickedPattern.length;
    if(currentColor===gamePattern[numOfClick-1]){
        if(numOfClick===gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
  
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        $("h1").text("Game Over, Press Any Key to Restart")
        $(document).keydown(startOver);
        
    }


}


function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("LEVEL "+level);
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound($(this).attr("id"));
    animatePress(userChosenColor);
    checkAnswer(userChosenColor);
    
    
})



function animatePress(currentColor){
   
        $("#"+currentColor).addClass("pressed");
        setTimeout(function(){
            $("#" + currentColor).removeClass("pressed");
            }, 100);
        }       
    









