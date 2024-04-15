import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your PIN:",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct PIN code!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option:",
            type: "list",
            choices: ["Withdraw", "Check balance"]
        }
    ]);
    if (operationAnswer.operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount to withdraw:",
                type: "number",
            }
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient funds!");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`Your current balance is: ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "Check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect PIN number");
}
