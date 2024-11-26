const inquirer = require('inquirer')
//const chalk = require('chalk')

const fs = require('fs')
const { get } = require('http')

operation()

function operation() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            mensagem: 'O que você deseja fazer?',
            choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair'],
        },
    ])
        .then((answer) => {

            const action = answer['action']

            if (action === 'Criar Conta') {
                createAccount()
            } else if (action === 'Depositar') {
                deposit()
            } else if (action === 'Consultar Saldo') {
                getAccountBalance()
            } else if (action === 'Sacar') {
                withDraw()
            } else if (action === 'Sair') {
                console.log('Obrigada por usar nosso banco!')
                process.exit
            }

        })
        .catch((err) => console.log(err))
}

function createAccount() {
    console.log('Obrigado por escolher o Banco!')
    console.log('Defina as opções da sua conta a seguir')

    buildAccount()
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            mensagem: 'Digite um nome para a sua conta: ',
        },
    ]).then(answer => {

        const accountName = answer['accountName']

        console.info(accountName)

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log('Essa conta já existe, escolha outro nome!'),
                buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function (err) {
            console.log(err)
        },
        )

        console.log('Parabéns! Sua conta foi criada.')
        operation()

    })
        .catch(err => console.log(err))
}

function deposit() {

    inquirer.prompt([
        {
            name: 'accountName',
            mensagem: 'Qual o nome da sua conta?'
        }
    ]).then((answer) => {

        const accountName = answer['accountName']

        if (!checkAccount(accountName)) {
            return deposit()
        }
        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quando você deseja depositar?'
            }
        ]).then((answer) => {
            const amount = answer['amount']

            addAmount(accountName, amount)
            operation()
        })
            .catch(err => console.log(err))
    })
        .catch(err => console.log(err))

}

function getAccountBalance() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if (!checkAccount(accountName)) {
            return getAccountBalance()
        }

        const accountDate = getAccount(accountName)

        console.log(`Olá, o saldo da sua conta é de R$${accountDate.balance}!`)
        operation()

    })
        .catch(err => console.log(err))
}

function withDraw() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if(!checkAccount(accountName)) {
            return withDraw()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto você deseja sacar?'
            }  
        ]).then((answer) =>{

            const amount = answer['amount']

            removeAmount(accountName, amount)

        }).catch(err => console.log(err))

    }).catch(err => console.log(err))
}

function checkAccount(accountName) {

    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log('Essa conta não existe, tenta novamente!')
        return false
    }
    return true
}

function addAmount(accountName, amount) {
    const accountDate = getAccount(accountName)

    if (!amount) {
        console.log('Ocorreu um erro, tenta novamente mais tarde!')
        return deposit()
    }

    accountDate.balance = parseFloat(amount) + parseFloat(accountDate.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountDate),
        function (err) {
            console.log(err)
        }
    )

    console.log(`Depósito de R$${amount} foi realizado com sucesso!`)
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf-8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)
}

function removeAmount(accountName, amount) {
    const accountDate = getAccount(accountName)

    if(!amount) {
        console.log('Ocorreu um erro, tenta novamente mais tarde!')
        return withDraw()
    }

    if(accountDate.balance < amount) {
        console.log('Valor indisponível')
        return withDraw()
    }

    accountDate.balance = parseFloat(accountDate.balance) - parseFloat(amount)

    fs.writeFileSync(`accounts/${accountName}.json`,
        JSON.stringify(accountDate),
        function(err) {
            console.log(err)
        }
    )

    console.log(`Saque de R$${amount} foi realizado com sucesso!`)
    operation()

}