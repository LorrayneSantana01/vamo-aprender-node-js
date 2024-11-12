const inquirer = require('inquirer')

const chalk = require('chalk')

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual seu nome?  ",
    },
    {
       name: "p2",
      message: "Qual sua idade? ",
    },
  ])
  .then((answers) => {
    console.log(answers)
    console.log(chalk.bgYellow.black(`O seu nome é ${answers.p1} e tem ${answers.p2} anos!`))
  })
  .catch((err) => console.log(err));