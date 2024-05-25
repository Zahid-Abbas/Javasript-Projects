const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a':'HTML',
        'b': 'CSS',
        'c': 'JS',
        'd': 'JAVA',
        'correct': 'a'
    },
    {
        'que': 'What year was JS launched?',
        'a':'2001',
        'b': '1955',
        'c': '1994',
        'd': 'nhi jante',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stands for?',
        'a':'Chu$ Style Sikheja',
        'b': 'Cascading Style Sheet',
        'c': 'kyo Btae',
        'd': 'Jsaon Object Terminak Lamborgini',
        'correct': 'b'
    },
]

let index=0;
let total=questions.length;
let right=0, wrong=0;

const quesBox = document.getElementById("quesBox");
const option = document.querySelectorAll(".option");

const loadQuestion = () => {
    if(index===total){
       return end();
    }
    const data = questions[index]
    // console.log(data);
    quesBox.innerText = `${index+1}) ${data.que}`;
    option[0].nextElementSibling.innerText = data.a;
    option[1].nextElementSibling.innerText = data.b;
    option[2].nextElementSibling.innerText = data.c;
    option[3].nextElementSibling.innerText = data.d;
}

const clicked = () =>{
    const ans = getAns()
    const data = questions[index];
    if(ans=== data.correct){
        right++;
    } else {
        wrong++;
     }
     index++;
     loadQuestion();
     reset();
     return;
}

const getAns = () => {
    let answer;
    option.forEach(
        (input) => {
            if(input.checked){
                // console.log('yes');
                answer= input.value;
                
            }
        }
    )
    return answer
}

const reset = ()=>{
    option.forEach(
        (input) =>{
            input.checked=false
        }
    )
}

const end =()=>{
    document.getElementById("box").innerHTML=`
    <h2>Thank you For Playing Quiz</h3>
    <h4>${right}/${total}Right</h4>
    `
}
loadQuestion();
