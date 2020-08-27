// JQUERY FUNCTION //

$(document).ready(function()
{    
        // ESTABLISH OBJECT 
    var oracle = {};
        // CREATE A PROPERTY OF THE OBJECT AND IT'S ARRAY OF ANSWERS 
    oracle.answers = 
    [
        "Concentrate harder the answer will come to you.", 
        "Who’s to say?", 
        "Now if I tell you, what have you learned?", 
        "Ask me again, I like it!", 
        "I could say NO here, but should I?",
        "I could say YES here, but should I?", 
        "YES!", 
        "No!", 
        "Well, what do YOU think?", 
        "It tickles my JavaScript when you ask me that, do it again!"
    ];
    $("#answer").hide();
     
        // CREATE A METHOD TO PRODUCE RANDOM ANSWERS FROM ARRAY//
    oracle.prophesize = function(question){ 
    $("#answer").fadeIn(4000);                                 
                // FORMULA //
        // CREATE RANDOM NUMBER BETWEEN 0 AND 1 //
        var randomNumber = Math.random();
        // CREATE RANDOM NUMBER BETWEEN 0 AND LENNGTH OF ARRAY//
        var randomNumberArray = randomNumber * this.answers.length;
        // ROUND THAT NUMBER DOWN TO A WHOLE NUMBER //
        var randomIndex = Math.floor (randomNumberArray);
        // CREATE VARIABLE FOR THE RANDOM NUMBER //
        var randomAnswer = this.answers[randomIndex];
    
        //  JQ FORMULA TO GET THE ANSWER TO APPEAR //
    $("#answer").text(randomAnswer);
    
        // PROMPT QUESTION AND ANSWER FROM INSIDE FUNCTION FORMULA
    console.log (question);
    console.log (randomAnswer);
    };   
    
        // PROMPT JQ FORMULA | QUESTION BUTTON//
    var askMe = function(){
    $("#answer").hide();
        var question = prompt("Let's have some fun, ask me a YES/NO question!");
        oracle.prophesize(question);
    };
    $("#answer").hide();
    $("#questionButton").click(askMe);
     
});