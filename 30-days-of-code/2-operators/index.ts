// Objective
// In this challenge, you will work with arithmetic operators. Check out the Tutorial tab for learning materials and an instructional video.

// Task
// Given the meal price (base cost of a meal), tip percent (the percentage of the meal 
// price being added as tip), and tax percent (the percentage of the meal price being added as tax) 
// for a meal, find and print the meal's total cost. Round the result to the nearest integer.

// Example
// A tip of 15% * 100 = 15, and the taxes are 8% * 100 = 8. Print the value  and return from the function.

// Function Description
// Complete the solve function in the editor below.

// solve has the following parameters:

// int meal_cost: the cost of food before tip and tax
// int tip_percent: the tip percentage
// int tax_percent: the tax percentage
// Returns The function returns nothing. Print the calculated value, rounded to the nearest integer.

// Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result.

// Input Format

// There are  lines of numeric input:
// The first line has a double,  (the cost of the meal before tax and tip).
// The second line has an integer,  (the percentage of  being added as tip).
// The third line has an integer,  (the percentage of  being added as tax).

// Sample Input

// 12.00
// 20
// 8
// Sample Output

// 15


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost: number, tip_percent: number, tax_percent: number): void {
    const tip = (tip_percent/100) * meal_cost;
    const tax = (tax_percent/100) * meal_cost;
    const sum = meal_cost + tip + tax
    console.log(Math.round(sum));
}

function main() {
    const meal_cost: number = parseFloat(readLine().trim());

    const tip_percent: number = parseInt(readLine().trim(), 10);

    const tax_percent: number = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}


export {}