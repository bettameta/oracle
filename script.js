// JQUERY FUNCTION //

$(document).ready(function() {
    // ESTABLISH OBJECT 
    var oracle = {};
    // CREATE A PROPERTY OF THE OBJECT AND IT'S ARRAY OF ANSWERS 
    oracle.answers = [
      "Who’s to say ?",
      "If I tell you, what've you learned?",
      "Ask me again, I like it!",
      "I could say NO, but... ?",
      "I could say YES, but... ?",
      "You could safely say yes !",
      "It is doubtful !",
      "Well, what do YOU think ?",
      "Wow, that tickled my JavaScript !"
    ];
    $("#answer").hide();
    
    // CREATE A METHOD TO PRODUCE RANDOM ANSWERS FROM ARRAY//
    oracle.prophesise = function() {
      $("#answer").fadeIn(4000);
      // FORMULA //
      // CREATE RANDOM NUMBER BETWEEN 0 AND 1 //
      var randomNumber = Math.random();
      // CREATE RANDOM NUMBER BETWEEN 0 AND LENNGTH OF ARRAY//
      var randomNumberArray = randomNumber * this.answers.length;
      // ROUND THAT NUMBER DOWN TO A WHOLE NUMBER //
      var randomIndex = Math.floor(randomNumberArray);
      // CREATE VARIABLE FOR THE RANDOM NUMBER //
      var randomAnswer = this.answers[randomIndex];
      $("#8ball").effect("shake");
      $("#8ball").attr("src","https://i.postimg.cc/3RxLSGtQ/oracle-two.png");
      //  JQ FORMULA TO GET THE ANSWER TO APPEAR //
      $("#answer").text(randomAnswer);
  
      /* PROMPT QUESTION AND ANSWER FROM INSIDE FUNCTION FORMULA
      console.log (question);
      console.log (randomAnswer);*/
    };
  
    // PROMPT JQ FORMULA | QUESTION BUTTON//
    var askMe = function() {
        $("#answer").hide();
        $("#8ball").attr("src", "https://i.postimg.cc/MHpGTNMh/oracle.png");
      // SET TIMEOUT FUNCTION TO DELAY CHANGES HERE //
      setTimeout(function() {
        var question = prompt("Let's have some fun, ask me a YES/NO question!");
        oracle.prophesise(question);
      }, 1000);
    };
    $("button").click(askMe);
  console.log("bug check");
  });
  