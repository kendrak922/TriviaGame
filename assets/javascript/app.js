'use strict';
$(document).ready(function(){
const questions = {
questionOne : {
        question : "What do the “eyes of Dr. T.J. Eckleburg “represent in The Great Gatsby?",
        choiceA : "The Male Gaze",
        choiceB : "The Green Light",
        choiceC : "Gatsby's subconscious",
        correct : "The Eyes of God",
    },
questionTwo : {
    question : "what does miss Havisham wear in Great Expectations?",
    choiceA : "her old school uniform",
    choiceB : "potato sack",
    choiceC : "sailor outfit",
    correct : "a wedding dress",
 },
questionThree : {
    question : "Who wrote all quiet on the Western Front?",
    choiceA : "Norman Mailor",
    choiceB : "Erich Von Schlep",
    "choiceC" : "Ernest Hemmingway",
    "correct" : "Erich Maria Remarque",
},
questionFour : {
    question : "Who does Romeo love in the first scene?",
    choiceA : "Juliet",
    choiceB : "Lady Montague",
    choiceC : "Lady Capulet",
    correct : "Rosaline",
},
questionFive : {
    question : "Which of the following items does Scout NOT find in a knothole of a tree?",
    choiceA : "gum",
    choiceB : "a spelling medal",
    choiceC : "a ball of twine",
    correct : "a small toy car",
},
questionSix : {
    question : "What excites Lennie most about his dream life with George?",
    choiceA : "He wants to get back to his roots",
    choiceB : "George promises to introduce him to some hot chicks",
    choiceC : "He will be rich from panninf for gold",
    correct : "He will get to tend rabbits",
},
questionSeven : {
    question : "What is a “big cat“ in the novel Grapes of Wrath",
    choiceA : "A terrible dust storm",
    choiceB : "A migrants' nickname for a policeman",
    choiceC : "the head farmer",
    correct : "A machine used by the banks to evict farmers",
},
questionEight : {
   question : "What earns Fahrenheit 451 its title?",
    choiceA : "The main character's nickname",
    choiceB : "the oversight agency of the government",
    choiceC : "Taken from the name of the fire department",
    correct : "It's the temperature at which books burn",
},
questionNine : {
   question : "What type of animal is Boxer in Animal Farm??",
    choiceA : "Sheep",
    choiceB : "Dog",
   choiceC : "Pig",
    correct : "Horse",
},
questionTen : {
    question : "Complete the quotation: “It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a ___.”?",
    choiceA : "Title",
    choiceB : "Larger fortune",
    choiceC : "House",
    correct : "Wife",
}};

function reset(){

stopwatch.time = 120;
}


let aArray = [questions.questionOne.choiceA, questions.questionTwo.choiceA, questions.questionThree.choiceA, questions.questionFour.choiceA, questions.questionFive.choiceA, questions.questionSix.choiceA, questions.questionSeven.choiceA, questions.questionEight.choiceA, questions.questionNine.choiceA, questions.questionTen.choiceA]
let questionsArray = [questions.questionOne.question, questions.questionTwo.question, questions.questionThree.question, questions.questionFour.question, questions.questionFive.question, questions.questionSix.question, questions.questionSeven.question, questions.questionEight.question, questions.questionNine.question, questions.questionTen.question];
console.log(aArray)
    $(".form-check-label").append(questions.questionOne.choiceA)
    $(".form-check-label2").append(questions.questionOne.choiceB)
    $(".form-check-label3").append(questions.questionOne.choiceC)
    $(".form-check-label4").append(questions.questionOne.correct)
    

questionsArray.forEach(function(i) {  
        let a = (`<legend>${i}</legend>`); 
        $(a).addClass("row-form-legend");
        $(a).attr("data-name", );
        $(".list").append(a)  
});

aArray.forEach(function(i){
$("legend").append(`<label class="form-check-label2">
<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">${i}`);

})

//timer
let timer;
let  time = 120;

function clock(){
clearInterval(timer);
timer = setInterval(count, 1000);
}
function count() {
time--;  
$(".time").html(`Time Remaining:${time}`);
if(time === 0){
    clearInterval(timer);
}
}
if(time === 0){
    clearInterval(timer);
}
clock()
});


