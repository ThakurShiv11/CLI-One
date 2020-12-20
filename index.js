console.log("Hello fren, Here's a Quiz about me")

var readlineSync = require('readline-sync');
var score = 0;

function welcome (){
var userName = readlineSync.question('Enter your name? ');
console.log("Hey, " +userName+  " Let's check how well you know me!")
console.log('--------------------------------------------------')
}

function play(question, answer) {

  var userAns = readlineSync.question(question);

  if(userAns.toUpperCase() === answer.toUpperCase() ) //toUppercase -> lower to caps 

  {
    console.log('Correct');
    score++;
    console.log(score);

  } else {
    console.log('Incorrect');
    score--;
    console.log(score);
  }
  console.log('current score is: ' + score)
  console.log('--------------------------------------------------')
}

var questions = [{
  question: "Where do I live? " , answer: "bangalore" 
  }, {question:"Fav color: ", answer: "black"}, {question: "what is my discord name: ", answer:"Hibernating"}, {question:"fav movie: ", answer: "wake up sid"}
  ];

for(var i=0; i<questions.lenght; i++){
var currentQuestion = questions[i];
   play(currentQuestion.question, currentQution.answer)
}

welcome()

function game() 
{
  for (var i=0; i<questions.length; i++) 
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

game();

var highScores=[
  {
    name:"Alooo",  score:4,
  },
  {
    name:"Jeera", score:3,
  }
]

function showScores() 
{
  console.log("Your score is: ", score);
 
 console.log('--------------------------------------------------');

 console.log("Top scorers are:  ")

  highScores.map(score => console.log(score.name, " : ", score.score))
}

showScores();

 console.log("Take a screenshot of your score and share it to get your scores updated, see you soon.!!");
