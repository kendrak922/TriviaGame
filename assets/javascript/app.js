'use strict';
$(document).ready(function(){

const quizContainer = document.getElementById('list');
let timer;
let  time = 120;
let rightAnswer = 0;
let numberQuestions = 10;

function reset(){
    stopwatch.time = 120;
    }

         
function clock(){
    clearInterval(timer);
    timer = setInterval(count, 1000);
    }
function count() {
    time--;  
    $(".time").html(`${time}`);
    if(time === 0){
    clearInterval(timer);
     }};
 if(time === 0){
    clearInterval(timer);
         };

         clock()


function startQuiz(){
    
    const output = [];

questions.forEach((ask, number) => {  
    
    const answers = [];

  let  letter;
    for (letter in ask.answers) { 
        answers.push( `<label><input type="radio" name="question${number}" value="${letter}">
            ${letter} :
            ${ask.answers[letter]}
          </label>`
        );
    }

    output.push(
        `<div class="section"><div class="question"> ${ask.question} </div>
        <div class="answers"> ${answers.join("")} </div></div>`
      );
    });
      
quizContainer.innerHTML = output.join("");
};
function checkScore(){

questions.forEach((ask, number) => {

const answerChoices = quizContainer.querySelectorAll(".answers");

const  userAnswer = (answerChoices.querySelector(`input[name=question${number}]:checked`) || {}).value;
console.log(userAnswer);


if (userAnswer === questions.correct){
    rightAnswer ++;
}

});

}
const questions = [{
    question : "What do the eyes of Dr. T.J. Eckleburg represent in The Great Gatsby?",
    answers : {
    a :"The Male Gaze",
    b : "The Green Light",
    c : "The Eye's of God",
    d : "Gatsby's subconscious"
},
correct : "c"
},
{
question : "What does Miss Havisham wear in Great Expectations?",
answers: { 
a : "her old school uniform",
b : "potato sack",
c : "sailor outfit",
d : "a wedding dress"
},
correct : "d",
},
{
question : "Who wrote all quiet on the Western Front?",
answers : {
a : "Erich Maria Remarque",
b : "Erich Von Schlep",
c : "Ernest Hemmingway",
d : "Norman Mailor"
},
correct: "a",
},
{
question : "Who does Romeo love in the first scene?",
answers: {
a : "Juliet",
b : "Lady Montague",
c : "Lady Capulet",
d : "Rosaline"
},
correct: "d"
},
{
question : "Which of the following items does Scout NOT find in a knothole of a tree?",
answers:{
a : "gum",
b : "a small toy car",
c : "a ball of twine",
d : "a spelling medal"
},
correct: "b",
},
{
question : "What excites Lennie most about his dream life with George?",
answers : {
a : "He wants to get back to his roots",
b : "George promises to introduce him to some hot chicks",
c : "He will be rich from panning for gold",
d : "He will get to tend rabbits"
},
correct: "d",
},
{
question : "What is a “big cat“ in the novel Grapes of Wrath",
answers : {
a : "A terrible dust storm",
b : "A machine used by the banks to evict farmers",
c : "the head farmer",
d : "A migrants' nickname for a policeman"
},
correct: "b"
},
{
question : "What earns Fahrenheit 451 its title?",
answers: {
a : "It's the temperature at which books burn",
b : "the oversight agency of the government",
c : "Taken from the name of the fire department",
d : "The main character's nickname"
},
correct: "a"
},
{
question : "What type of animal is Boxer in Animal Farm??",
answers: {
a : "Sheep",
b : "Dog",
c : "Horse",
d : "Pig"
},
correct:  "c"
},
{
question : "Complete the quotation: “It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a ___.”?",
answers : {
a : "Title",
b : "Larger fortune",
c : "House",
d : "Wife"
},
correct: "d",
}
];
startQuiz();
});


