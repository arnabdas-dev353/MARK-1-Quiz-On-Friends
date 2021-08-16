var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question("\nMay I know your name ? \n");
console.log("Welcome "+userName+"! ,at Quiz-on-FRIENDS!\n");

var highScore = [
{
  name : "Arnab",
  score : 10
},{
  name : "Varun",
  score : 9
},{
  name : "Amy",
  score : 8
}];

console.log("-------------------------------------------");
console.log("FEW RULES TO BE  FOLLOWED : \n1. USE LOWERCASE LETTERS. \n2. DO NOT USE ANY SPACING. \n3. JUST WRITE THE FIRST NAME OF THE CHARACTER. \n4. IF THERE IS ANY MISTAKE IN YOUR SPELLING, YOU WILL LOOSE SCORE. \n5. AND SORRY FOR THESE RULES, THIS IS MANDATORY AS THE CODE IS VERY SENSITIVE. \n6. USE ONLY LETTERS OR WORDS, DO NOT USE NUMBERS. \n7. ENJOY YOUR GAME! :) ");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You're right!");
    score++;
  } else {
    console.log("You're wrong!");
    score--;
  }
  console.log("Current Score is - - >"+score);
  console.log("-----------------------------------------");
}

var question = [{
  question : "\nQ1. How many sisters does Joey have?\n",
  answer : "SEVEN"
},{
  question : "\nQ2. Joey doesn’t share what?\n",
  answer : "FOOD"
},{
  question : "\nQ3. Phoebe attempts to teach Joey what language?\n",
  answer : "FRENCH"
},{
  question : "\nQ4. Who said, “See, he’s her lobster!”\n",
  answer : "PHOEBE"
},{
  question : "\nQ5. Who was the last Friend to find out about Monica and Chandler’s relationship?\n",
  answer : "ROSS"
},{
  question : "\nQ6. Monica and Chandler first got together where?\n",
  answer : "LONDON"
},{
   question : "\nQ7. What is Chandler’s surname?\n",
  answer : "BING"
},{
   question : "\nQ8. Who was called Sir Limps-a-Lot after losing a toe?\n",
  answer : "CHANDLER"
},{
   question : "\nQ9. Who shouts the word 'OH MY GOD'?\n",
  answer : "JANICE"
},{
   question : "\nQ10. What color is Monica’s apartment?\n",
  answer : "PURPLE"
}];

for (var i=0; i<question.length; i++) {
  var currentQuestion = question[i];
  play(currentQuestion.question,currentQuestion.answer)
}


function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScore.map(score => console.log(score.name, " : ", score.score))
}
showScores();

