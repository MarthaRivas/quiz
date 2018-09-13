import crel from 'crel'

function renderRound(round) {
 function renderAnswer(answer, correct) {
   const answerContainer = crel('p', answer + (correct ? '*' : ''))

   answerContainer.addEventListener('click', function () {
     console.log(round, answer, correct)
     if (correct) {
       alert("yay")
     } else {
       alert("noooo")
     }
   })

   return answerContainer
 }

 return crel('div',
   crel('h1', round.question),
   renderAnswer(round.a, 'a' == round.correctAnswer),
   renderAnswer(round.b, 'b' == round.correctAnswer),
   renderAnswer(round.c, 'c' == round.correctAnswer))
}

function renderQuiz(rounds) {
 return crel('div', rounds.map(renderRound))
}


export default renderQuiz