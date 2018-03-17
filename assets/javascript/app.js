'use strict';

const questions = {
    questionOne: [{
        choiceA:"The Male Gaze",
        choiceB:"The Green Light",
        choiceC:"Gatsby's subconscious",
        correct: "The Eyes of God",
    }],
 questionTwo: [{
    choiceA:"her old school uniform",
    choiceB:"potato sack",
    choiceC:"sailor outfit",
    correct: "a wedding dress",
}],
questionThree: [{
    choiceA:"Norman Mailor",
    choiceB:"Erich Von Schlep",
    choiceC:"Ernest Hemmingway",
    correct: "Erich Maria Remarque",
}]
};

// questions.questionOne[0].choiceA
$(".form-check-label").append(questions.questionOne[0].choiceA)
$(".form-check-label").append(questions.questionOne[0].choiceB)
$(".form-check-label").append(questions.questionOne[0].choiceC)
$(".form-check-label").append(questions.questionOne[0].correct)
