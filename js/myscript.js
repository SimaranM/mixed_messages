console.log("myScript");

let markMass = 50;
let markHeight = 1.3;
let johnMass = 40;
let johnHeight = 1.2;
let markBMI = 0;
let johnBMI = 0;
let HBMI = false;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
HBMI = markBMI > johnBMI;

if (HBMI) {
    console.log("Mark's (" + markBMI + ") BMI is higher than john's (" + johnBMI + ")");
} else {
    console.log("john's (" + johnBMI + ")BMI is higher than mark's (" + markBMI + ")");
}