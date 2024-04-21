#! /usr/bin/env/ node 
import inquirer from "inquirer";
let balance = 10000;
const myPin = 1234;
let pin = await inquirer.prompt([
    {
        name: "q1",
        message: "Enter your pin number",
        type: "number",
    },
    //pin number = 1234
]);
if (pin.q1 === myPin) {
    console.log(`you entered correct pin number`);
    let select = await inquirer.prompt([
        {
            name: "q2",
            message: "What do you want to do?",
            type: "list",
            choices: ["check balance", "withdraw"]
        },
    ]);
    if (select.q2 === "withdraw") {
        let amount = await inquirer.prompt([{
                name: "q3",
                message: "Enter the amount you want to withdaw",
                type: "number"
            }]);
        if (0 <= amount.q3 && 10000 >= amount.q3) {
            console.log(`your remaining balance is :${balance - amount.q3}`);
        }
        else {
            console.log("please enter a valid number");
        }
    }
    else if (select.q2 === "check balance") {
        console.log(`your current balnce is ${balance}`);
    }
    else {
        console.log("please select one of the options");
    }
}
else {
    console.log("pin invalid try again");
}
