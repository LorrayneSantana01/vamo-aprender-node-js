const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual a primeira nota? ",
    },
    {
       name: "p2",
      message: "Qual a segunda nota? ",
    },
    {
       name: "p3",
      message: "Qual a terceira nota? ",
    },
  ])
  .then((answers) => {
    console.log(answers)
    const media = ((parseInt(answers.p1) + parseInt(answers.p2) + parseInt(answers.p3)) / 3)
    console.log('A média das notas é ' + media)
  })
  .catch((err) => console.log(err));