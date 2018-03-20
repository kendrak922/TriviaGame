// const questions = [{
   
//             question : "What do the “eyes of Dr. T.J. Eckleburg “represent in The Great Gatsby?",
//             Answers : {
//             A:"The Male Gaze",
//             B : "The Green Light",
//             C : "The Eyes of God",
//             D : "Gatsby's subconscious",
//         },
//         correct : "C"
//     },
//      {
//         question : "what does miss Havisham wear in Great Expectations?",
//        Answers: { 
//         A : "her old school uniform",
//         B : "potato sack",
//         C : "sailor outfit",
//         D : "a wedding dress",
//      },
//         correct : "D",
//      },
//    {
//       question : "Who wrote all quiet on the Western Front?",
//         Answers : {
//         A : "Erich Maria Remarque",
//         B : "Erich Von Schlep",
//         C : "Ernest Hemmingway",
//         D : "Norman Mailor",
//         },
//         correct: "A",
//     },
//     {
//         question : "Who does Romeo love in the first scene?",
//         Answers: {
//         A : "Juliet",
//         B : "Lady Montague",
//         C : "Lady Capulet",
//         D : "Rosaline",
//     },
//     correct: "D"
// },
//     {
//         question : "Which of the following items does Scout NOT find in a knothole of a tree?",
//         Answers:{
//         A : "gum",
//         B : "a small toy car",
//         C : "a ball of twine",
//         D : "a spelling medal",
//     },
//     correct: "B",
//     },
//     {
//         question : "What excites Lennie most about his dream life with George?",
//         Answers : {
//         A : "He wants to get back to his roots",
//         B : "George promises to introduce him to some hot chicks",
//         C : "He will be rich from panninf for gold",
//         D : "He will get to tend rabbits",
//     },
//     correct: "D",
//     },
//     {
//         question : "What is a “big cat“ in the novel Grapes of Wrath",
//         Answers : {
//         choiceA : "A terrible dust storm",
//         choiceB : "A machine used by the banks to evict farmers",
//         choiceC : "the head farmer",
//         correct : "A migrants' nickname for a policeman",
//     },
//     correct: "B"
//     },
//    {
//        question : "What earns Fahrenheit 451 its title?",
//        Answers: {
//         choiceA : "It's the temperature at which books burn",
//         choiceB : "the oversight agency of the government",
//         choiceC : "Taken from the name of the fire department",
//         correct : "The main character's nickname",
//     },
//     correct: "A"
//     },
//    {
//        question : "What type of animal is Boxer in Animal Farm??",
//        Answers: {
//         A : "Sheep",
//         B : "Dog",
//         C : "Horse",
//         D : "Pig",
//     },
//     correct:  "C"
//     },
//      {
//         question : "Complete the quotation: “It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a ___.”?",
//         Answers :{
//         A : "Title",
//         B : "Larger fortune",
//         C : "House",
//         D : "Wife",
//         },
//         correct: "D",

//     }];

//     <div class="container">
     
//     <div class="row"> 
//         <div class= 'col-xs-2'></div>
//         <h1>Did you actually read that?</h1>  
//         <p>Sparknotes can't help you now. You have 120 seconds to recall facts from all the books you should have read during high-school. Good luck. </p>
//     </div>  
// </div>
// <div class= 'col-xs-2'></div>
// <div class = "row">
//     <p class="time"></p:>
// </div>
//     <div class ="row">
//     <div class= "col-xs-2"></div>
//    <legend class="row-form-legend">What do the "eyes of Dr. T.J. Eckleburg" represent in The Great Gatsby?</legend> 
//     </div>
//    <div class ="form-group row">
//     <div class= "col-xs-2"></div>
//     <div class="col-sm-10">
//         <label class="form-check-label">
//         <input class="form-check-input" type="radio" name="gridRadios" id="exampleRadios1" value="option1"checked>
//         </label>
//             <label class="form-check-label2">
//             <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
//             </label>
//                 <label class="form-check-label3">
//                 <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
//                 </label>
//             <label class="form-check-label4">
//             <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option4">
//           </label>


//           HTML  CSS  JS  Result
// EDIT ON
 (function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();