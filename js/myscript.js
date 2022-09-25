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