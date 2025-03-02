const express = require("express");
const app = express();
//Arrays
//Array of Fortunes
const fortunes = [
    "You will have a great day! 😊",
    "A surprise gift is on its way! 🎁",
    "Adventure is waiting for you! 🏕️",
    "Success is closer than you think! 🚀",
    "Happiness comes from within! 💛"
];

// Array of jokes
const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts! 😂",
    "Why did the math book look sad? Because it had too many problems. 📖",
    "Parallel lines have so much in common. It’s a shame they’ll never meet. 😆"
];

// Array of fun facts
const facts = [
    "Did you know? Honey never spoils! 🍯",
    "Bananas are berries, but strawberries aren't! 🍌🍓",
    "Octopuses have three hearts! 🐙"
];

app.get("/fortune", (req, res) => {
    let random = Math.floor(Math.random() * fortunes.length);
    res.send(fortunes[random]);
});

app.get("/joke", (req, res) => {
    let random = Math.floor(Math.random() * jokes.length);
    res.send(jokes[random]);

});
app.get("/fact", (req, res) => {
    let random = Math.floor(Math.random() * facts.length);
    res.send(facts[random]);
});
app.listen(3000, () => {
    console.log("listen on port 3000");

});
