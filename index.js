#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 500000;
let myPin = 3344;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code",
        type: "number"
    }
]);
if (pinAns.pin === myPin) {
    console.log("pin is correct, login successfully");
    let operationAns = await inquirer.prompt([
        { name: "operation",
            message: "select an operation",
            type: "list",
            choices: ["withdraw amount", "check Balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount to withraw:",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`your Remaining Balance is:${myBalance}`);
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log(`your current Balance amount is:${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "option",
                message: "select fast cash amount",
                type: "list",
                choices: ["5000", "10000", "20000", "40000"],
            }
        ]);
        myBalance -= fastcashAns.option;
        console.log(`your Remaining current amount is: ${myBalance}`);
    }
    else {
        console.log("Incorrect pin number");
    }
}
