const readline = require("readline-sync");
let balance = 0;
while (true) {
    console.log("1. Deposit\n2. Widthdraw\n3. Balance\n4. Exit");
    const choice = readline.questionInt("Enter your choice: ");
    switch (choice) {
        case 1:
            const deposit = readline.questionInt("Enter the amount to be deposited: ");
            balance += deposit;
            console.log("Amount Deposited: ", deposit, "\nCurrent Balance: ", balance);
            break;
        case 2:
            const widthdraw = readline.questionInt("Enter the amount to be widthdrawn: ");
            if (widthdraw > balance) {
                console.log("Insufficient Balance");
                break;
            }
            balance -= widthdraw;
            console.log("Amount Widthdrawn: ", widthdraw, "\nCurrent Balance: ", balance);
            break;
        case 3:
            console.log("Balance: ", balance);
            break;
        case 4:
            process.exit(0)
        default:
            console.log("Invalid Choice");
            break;
    }
}