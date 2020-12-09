
const getAQuestion = (name,index) => {
  const questions = [
    {
      title:`1. So ${name}, What Is The Name Of The Secret Group Helping Whiterose? `,
      type:"options",
      options:["Dark Army","Death Squad","Dark Order","Army"],
      answer : "Dark Army"
    },
    {
      title:`2. Which Rapper Has Guest Starred On The Show? `,
      type:"options",
      options:["A$AP rocky","Kendrick Lamar","Joey Badass","Benny"],
      answer : "Joey Badass"
    },
    {
      title:`3. What Is The Name Of Elliot's Mother? `,
      type:"options",
      options:["Marsha","Marlene","Magda","Mercy"],
      answer : "Magda"
    },
    {
      title:`4. What Does Dom Do For Romero's Mum When She Investigates His Home? `,
      type:"options",
      options:["Help her with groceries","Roll her a joint","Feed her dog","Give her email"],
      answer : "Roll her a joint"
    },
    {
      title:`5. What Does Leon Use To Help Elliot When He's Attacked In Prison? `,
      type:"options",
      options:["Chair","Pipe","Stun Gun","Razor Blade"],
      answer : "Razor Blade"
    },
    {
      title:`6. What Was The Name Of Darlene's Boyfriend?  `,
      type:"options",
      options:["Alejandro","Frisko","Cisco","Sisqo"],
      answer : "Cisco"
    },
    {
      title:`7. What Year Was The Washington Township Leak?  `,
      type:"options",
      options:["1995","1994","1991","1993"],
      answer : "1995"
    },
    {
      title:`8. What Company Did Elliot And Angela Work For?  `,
      type:"options",
      options:["Quick heal","Microsoft","Safe & secure","Allsafe Security"],
      answer : "Allsafe Security"
    },
    {
      title:`9. What Movie Do Elliot And Darlene Watch Every Halloween?  `,
      type:"options",
      options:["Hellraiser","Evil Dead","The Careful Massacres","Carrie"],
      answer : "The Careful Massacres"
    },
  ];
  return {length:questions.length,askedQuestion:questions[index]};
}


module.exports = {getAQuestion};
