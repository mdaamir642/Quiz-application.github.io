
var quesArray = [
    {
        num: 1,
        question: "HTML stand for",
        option: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        num: 2,
        question: "Which type of JavaScript Languages is",
        option: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    },
    {
        num: 3,
        question: "The 'function' and  'var' are known as:",
        option: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    }
    ,
    {
        num: 4,
        question: "who is the present president of pakistan",
        option: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Arif Alvi"
    }
    ,
    {
        num: 5,
        question: "How many prayers in a day:",
        option: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        num: 6,
        question: "How many total surah in quran",
        option: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        num: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        option: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
]





var signInPage = document.getElementById("first-page")
var quizStarPage = document.getElementById("second-page")
var quizPage = document.getElementById("third-page")

var quizQues = document.getElementById("ques")
var quizOptions = document.getElementById("quizOptions").children

var nxtBtn = document.querySelectorAll('.btn')[0];
var quesNum = document.getElementById("ques-num");

// RESULT //
var result = document.getElementById("result");
var resultWrapper = document.getElementById('result-page')
var totalQues = document.getElementById('total-ques')
var correctAns = document.getElementById('correct')
var wrongAns = document.getElementById('wrong')
var totalAns = document.getElementById('total')
var percentage = document.getElementById("percent")



var counter = 0
var correctAnsCounter = 0
var wrongAnsCounter = 0
var totalScore = 0

var quesNumber = 1











// SIGN IN PAGE //


function signIn (){
    
    var invalid = document.getElementById("invalid");
var fullName = document.getElementById('full-name');
var fatherName = document.getElementById('father-name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var greet = document.getElementById('greet');
    if(!fullName.value  && !fatherName.value  && !email.value  && !password.value    ){
invalid.innerHTML = "Invalid form please fill first"
setTimeout(function () {
    invalid.innerHTML = "";
}, 3000)
    }
else if (fullName.value  && fatherName.value  && email.value  && password.value){

    signInPage.style.display = "none"
    quizStarPage.style.display = "flex"
greet.innerHTML = "ASSALAM -U- ALAIKUM " + "<br/> " + fullName.value.toUpperCase()
}

}








// start quiz page //


for (var li of quizOptions) {
    li.setAttribute("onclick", "selectOption(this)")
}

var time = document.getElementById("time")
function startQuiz() {
    var timerCounter = 119
    signInPage.style.display = "none"
    quizStarPage.style.display = "none"
    quizPage.style.display = "block"

    quizQues.innerHTML = quesArray[counter].question
    quizOptions[0].innerHTML =  quesArray[counter].option.a
    quizOptions[1].innerHTML =  quesArray[counter].option.b
    quizOptions[2].innerHTML =  quesArray[counter].option.c
    quizOptions[3].innerHTML = quesArray[counter].option.d
    nxtBtn.style.display= 'none'
    quesNum.innerHTML = quesNumber++
setInterval(function(){time.innerHTML = timerCounter--},1000)



}





















// next question page //



function nextQues() {
    if (counter < quesArray.length - 1) {
        counter++
        quizQues.innerHTML = quesArray[counter].question
        quizOptions[0].innerHTML = quesArray[counter].option.a
        quizOptions[1].innerHTML =  quesArray[counter].option.b
        quizOptions[2].innerHTML = quesArray[counter].option.c
            quizOptions[3].innerHTML =  quesArray[counter].option.d
            quesNum.innerHTML = quesNumber++
     
        }


else{
    quizPage.style.display = 'none'
    resultWrapper.style.display = 'block'

    totalQues.innerHTML = quesArray.length
    correctAns.innerHTML = correctAnsCounter
    wrongAns.innerHTML = wrongAnsCounter
    totalAns.innerHTML = totalScore
    percentage.innerHTML= Math.round( correctAnsCounter * 100 / quesArray.length);
if(percentage.innerHTML >= 70 ){
    result.innerHTML = "congratulation you are pass"
result.style.backgroundColor = 'green'

}
else {
    result.innerHTML = "sorry you are failed "
    result.style.backgroundColor = 'red'



}

}
for (var li of quizOptions){
li.classList.remove('correctAns')
li.classList.remove('wrongAns')
li.classList.remove('disableLi')

}
nxtBtn.style.display= 'none'



}
  




//quiz select function//


function selectOption(element) {
    if (element.innerHTML === quesArray[counter].answer) {
     
        correctAnsCounter++
        totalScore+=5
    element.className = 'correctAns'
    console.log('answer is true')
    }
    
    else{
wrongAnsCounter++
element.className = 'wrongAns'

for (var li of quizOptions){
if(li.innerHTML === quesArray[counter].answer){
  
    li.classList.add ("correctAns")

    break
}


}

    }
    
    
    for (var li of quizOptions){
li.classList.add ('disableLi')

    }
    
    nxtBtn.style.display= 'block'
    
    
    }















