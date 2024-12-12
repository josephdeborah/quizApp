const questions =[
    {
        question:"What is correct way to define an array of arrays in Vue's data property",
        answers:[
              {
                text:"data() {return {arr:[ [1,2] , [3,4]]}",
                correct:true
              },
              {
                text:"data() {return {arr:[ 1,2,3]}",
                correct:false
              },
              {
                text:"data(){ return {arr: {a:[1,2],b:[3,4]} }}",
                correct:false
              },
              {
                text:"data(){return{arr:'[[1,2],[3,4]]'}}",
                correct:false
              }
        ]
    },
    {
        question:" What is the benefit of key attribute ",
        answers:[
              {
                text:"vue will render the list incorrectly",
                correct:false
              },
              {
                text:"vue will throw an error",
                correct:false
              },
              {
                text:"vue will render the list correctly but with poor performance",
                correct:true
              },
              {
                text:"vue will render the list correctly  with good performance",
                correct:false
              }
        ]
    },
    {
        question:" How to you merge two arrays",
        answers:[
              {
                text:"arr1.concat(arr2)",
                correct:true
              },
              {
                text:" arr.push(..arr2)",
                correct:false
              },
              {
                text:"arr1 = [...arr1,...arr2]",
                correct:false
              },
              {
                text:"arr1=arr1 + arr2",
                correct:false
              }
        ]
    },
    {
        question:"How do you remove the last inner array from the existing array of arrays",
        answers:[
              {
                text:"arr.pop()",
                correct:false
              },
              {
                text:"arr.shift()",
                correct:false
              },
              {
                text:"arr.splice(-1,1)",
                correct:true
              },
              {
                text:"arr.slice(0,-1)",
                correct:false
              }
        ]
    },
    {
        question:"what will this [[1,2],[3,4]].length return",
        answers:[
              {
                text:"1",
                correct:false
              },
              {
                text:"3",
                correct:false
              },
              {
                text:"0",
                correct:false
              },
              {
                text:"2",
                correct:true
              }
        ]
    },
    {
        question:"Which Vue directive can be used to render a list of arrays",
        answers:[
              {
                text:"v-model",
                correct:false
              },
              {
                text:"v-if",
                correct:false
              },
              {
                text:"v-for",
                correct:true
              },
              {
                text:"v-bind",
                correct:false
              }
        ]
    },
    {
        question:" how  do you access the first element in second array in array of arrays in vue.js ",
        answers:[
              {
                text:"this.array[1][0]",
                correct:true
              },
              {
                text:"this.array[0][0]",
                correct:false
              },
              {
                text:"this.array[0][1]",
                correct:false
              },
              {
                text:"this.array[1][1]",
                correct:false
              }
        ]
    },
    {
        question:"What is correct way to update  the first array in array of arrays in Vue's data property",
        answers:[
              {
                text:"this.array.push(5)",
                correct:false
              },
              {
                text:"this.array[0].push(5)",
                correct:true
              },
              {
                text:"this.array[2].unshift(5)",
                correct:false
              },
              {
                text:"this.array[1].unshift(5)",
                correct:false
              }
        ]
    },
    {
        question:"how can you loop through an array of arrays in vue.js template",
        answers:[
              {
                text:"(item, index) in array",
                correct:false
              },
              {
                text:"item in array",
                correct:false
              },
              {
                text:"v-for='(subArray , index) in subArray'",
                correct:false
              },
              {
                text:"v-for='(subArray , i)in subArrays'",
                correct:true
              }
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score=0;


 function startQuiz() {
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next"
    showQuestion()
    
 }


 function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+" . " +currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;

        }
        button.addEventListener("click",selectAnswer)

    })
 }
 function  resetState() {
   
    nextBtn.style.display="none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
        
    }
    
 }
 function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct==="true" 
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++
    }else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if (button.dataset.correct==="true") {
            button.classList.add("correct")
            
        }
        button.disabled=true;
    })
    nextBtn.style.display="block"
 }
 function showScore() {
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}`
    nextBtn.innerHTML="Play Again"
    nextBtn.style.display="block"
    nextBtn.addEventListener("click",startQuiz)
    
 }
 function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
        
    }else{
        showScore()
    }

 }
nextBtn.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
        
    }else{

    }
})
startQuiz()