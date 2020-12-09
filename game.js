const readlineSync = require('readline-sync');
const chalk = require('chalk')
const {getAQuestion} = require('./questions')

const initGame = () => {
  const userName = readlineSync.question(chalk.green("hey ! what's your name ? "));
  if(userName !== '' && userName !== null)
  {
    console.log(chalk.greenBright(`Hey ${userName} ! Welcome to Mr.robot Quiz !!!`));
    play(userName);
  }else{
    console.log("your answers are empty :( ...")
    initGame();
  }
}

let highScores = [
  {
    name:'Tara',
    score:9
  },
  {
    name :'Ramesh',
    score:7
  },
  {
    name: 'Suresh',
    score:6
  }
]

const findMinimumHighScore = () =>
{
  let arr = highScores.sort((a,b) => (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0))
  highScores = arr;
}

let currentScore = 0;

const play = (name) => {
  const {length} = getAQuestion(name,0);
  
  for(let i = 0; i < length ; i++)
  {
    let {askedQuestion} = getAQuestion(name,i);
    console.log("-----------------------------------------------");
    if(askedQuestion.type === "options")
    {
      let currentAnswer = readlineSync.keyInSelect(askedQuestion.options,chalk.green(askedQuestion.title),{cancel:false});
      if(askedQuestion.options[currentAnswer].toLowerCase() === askedQuestion.answer.toLowerCase())
      {
       currentScore += 1;
      }
    }
    if(askedQuestion.type === "YN")
    {
      let currentAnswer = readlineSync.keyIn(askedQuestion.title);
      if(currentAnswer.toLowerCase() === askedQuestion.answer.toLowerCase())
      {
        currentScore += 1;
      }
    }
    
  }
   console.log(chalk.bgBlackBright.red("---- GAME OVER ----"));
     console.log(chalk.bgBlackBright.greenBright(`SCORE : ${currentScore}`))
    findMinimumHighScore();
    if(currentScore > +highScores[0].score)
    {
      console.log(chalk.cyan("congrats you're amongst the top scorers"))
      highScores[0] = {name,score:currentScore}
      for(let item of highScores)
      {
        console.log(chalk.redBright(JSON.stringify(item)));
      }
    }else{
      console.log(chalk.cyan("better luck next time, try to be among top scorers"))
      for(let item of highScores)
      {
        console.log(chalk.redBright(JSON.stringify(item)));
      }
    }
    console.log(chalk.greenBright("---- Correct Answers ----"))
    for(let i = 0; i < length ; i++)
    {
      console.log(chalk.cyanBright(`[${i+1}] ${getAQuestion(name,i).askedQuestion.answer} ✔️`))
    }
}

module.exports = {initGame}