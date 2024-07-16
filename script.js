


document.querySelector('.scoreArea button').addEventListener('click',resetQuiz);
 document.querySelector('.inicial button').addEventListener('click', startQuiz);

  
 let currentQuestion = 0;
 let correctAnswers = 0;

function inicial(){
      document.querySelector('.inicial').style.display = 'block';
      document.querySelector('.questionArea').style.display = 'none';
      document.querySelector('.scoreArea').style.display = 'none';
}

inicial();

function startQuiz(){

      if(questions[currentQuestion]) {
            let q = questions[currentQuestion];

            let pct = Math.floor((currentQuestion / questions.length )*100);

            document.querySelector('.progress--bar').style.width = `${pct}%`;

            document.querySelector('.inicial').style.display = 'none';
            document.querySelector('.questionArea').style.display = 'block';
            document.querySelector('.titulo').style.display = 'none';
            document.querySelector('.question').innerHTML = q.question;
       
            let optionHtml = '';
       
            for(let i in q.options) {

                  optionHtml += `<div data-op="${i}" class="option"><span>${[parseInt(i)+1]}</span>${q.options[i]}</div>`;
            }
            document.querySelector('.options').innerHTML = optionHtml;

            document.querySelectorAll('.options .option').forEach((item)=>{
                item.addEventListener('click',clikedOption);
            });

      } else {
            finishQuiz();
      }
}


function clikedOption(e){
      let q = questions[currentQuestion];
      let click = parseInt(e.target.getAttribute('data-op'));
      console.log(q);
      console.log(click);
      
      if(click === q.answer) {
           correctAnswers++;
      } 
      currentQuestion++;
      startQuiz();
 
}
function finishQuiz(){


      let score = Math.floor((correctAnswers/questions.length)*100);


      if(score < 30 ) {
            document.querySelector('.scoreText1').innerHTML = 'Estude mais';
            document.querySelector('.scorePct').style.color = '#FF0000';
      } else if(score >= 30 && score < 70) {
            document.querySelector('.scoreText1').innerHTML = 'Quase lá';
            document.querySelector('.scorePct').style.color = '#ffff00';
      } else if(score > 70) {
            document.querySelector('.scoreText1').innerHTML = 'Parabens';
            document.querySelector('.scorePct').style.color = '#90ee90';
      }
      
      document.querySelector('.scorePct').innerHTML = `Acertou ${score}%`;
      document.querySelector('.scoreText2').innerHTML = `Voce respondeu ${questions.length} questões e acertou ${correctAnswers}`;


      document.querySelector('.scoreArea').style.display = 'block';
      document.querySelector('.questionArea').style.display = 'none';
      document.querySelector('.titulo').style.display = 'none';
      document.querySelector('.progress--bar').style.width = `100%`;

}

function resetQuiz(){
      document.querySelector('.titulo').style.display = 'block';
     correctAnswers = 0;
     currentQuestion = 0;
     inicial();
}



