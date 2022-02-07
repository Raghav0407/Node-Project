import inq from "inquirer";
import fs from "fs";
import {table} from "table";
// import lodash from "lodash";


/* WorkFlow
Name
q
q
q
Score
File
*/
const ANS={
    q1:"INDIA",
    q2:"Raghav",
};
const ques=[
  
    {
        type:"list",
        message:"What is the capital of USA",
        choices:["WDC","INDIA"],
        name:"q1",

    },
    {
        type:"list",
        message:"Who is the president of India",
        choices:["Raghav","Keshav","Arpit","Shivam"],
        name:"q2",
        
    },

]
// lodash.shuffle(ques);

const finalQuestions=[
    {
        type:"input",
        message:"What is your name?",
        name:"username",


    },
].concat(ques);
let score=0;
inq
  .prompt(finalQuestions)
  .then((answers) => {
      if(answers.q1==ANS.q1)
      {
          score++;
      }
      if(answers.q2==ANS.q2)
      {
          score++;
      }

    console.log(score);
  
      const scoreCard=fs.readFileSync("./score.json","utf8");

    const parsedscorecard=JSON.parse(scoreCard);
     const card={
        name:answers.username,
        score:score,
    };
    parsedscorecard.push(card);
    fs.writeFileSync("./score.json",JSON.stringify(parsedscorecard),"utf8");
    console.log(parsedscorecard);



   const tablecard= parsedscorecard.sort((a,b)=>b.score-a.score).map(scoreCard=>{
           return [scoreCard.name,scoreCard.score];    
        })

        console.log(table(tablecard));
})

   
   
    // console.log(card);
    // console.log(JSON.stringify(card));
     
//  const files= fs.readdirSync(".");
//  console.log(files); To read the whole directory....


//  console.log(JSON.parse(scoreCard));
  
  
