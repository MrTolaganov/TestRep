const age = +prompt("How old are you?", "");

if (age > 25) {
    console.log("25+");
} else {
    console.log("18-");
}

(age > 25) ? console.log("25+") : console.log("25-");