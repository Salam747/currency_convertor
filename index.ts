#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlueBright("***CURRENCY CONVERTOR***"));


const currency: any = {
    USD:1,
    PKR:277.98,
    INR:83.28,
    AFN:71.16,
    EURO:0.92,
    BDT:109.49,
    CNY:7.23,
    SAR:3.75,
    IRR:42075.00,
    AED:3.67,
};
let userSlection = await inquirer.prompt(
    [
        {
            name:"from",
            message:"SELECT YOUR CURRENCY WHICH YOU WANT TO CONVERT",
            type:"list",
            choices:["USD","PKR","INR","AFN","EURO","BDT","CNY","SAR","IRR","AED"],
        },
        {
            name:"to",
            message:"SELECT YOUR CURRENCY IN WHICH YOU WANT TO CONVERT",
            type:"list",
            choices:["USD","PKR","INR","AFN","EURO","BDT","CNY","SAR","IRR","AED"],
        },
        {
            name:"amount",
            message:"HOW MUCH AMOUNT YOU WANT TO CONVERT",
            type:"number",
        }
    ]
);

let fromList = currency [userSlection.from];
let toList = currency [userSlection.to];
let amount = userSlection.amount;

let baseAmount = amount / fromList;
let convertedAmount = baseAmount * toList;
let result = Math.round(convertedAmount);

console.log(chalk.bgGreenBright(result));

