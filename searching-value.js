const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin,
});

let names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
rl.question("Enter a name to search for: ", (name) => {
    let position = names.indexOf(name);
    if (position >= 0) {
        console.log(`Found ${name} at position ${position}`);
    } else {
        console.log(`${name} not found in array`);
    }
});

