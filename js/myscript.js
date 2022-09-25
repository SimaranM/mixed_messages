
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

const information = {
    name: ["Simran", "salma", "Meera"],
    verb: ["do not you sleep?", "still not in bed?", "drinking water?"],
    adjective: ["pretty", "perfect", "nice"],
};
const message_gen = (obj) => {
    let message = [];
    for (let item in obj) {
        let num = Math.floor(Math.random() * obj[item].length);
        switch (item) {
            case "name":
                message.push(`Hello ${obj[item][num]}, how are you?`);
                break;
            case "verb":
                message.push(`What are you doing? ${obj[item][num]}`);
                break;
            case "adjective":
                message.push(`You look ${obj[item][num]}`);
                break;
            default:
                message.push(`This is done.`);
                break;
        }
    }
    return console.log(message.join("\n"));
};
message_gen(information);

