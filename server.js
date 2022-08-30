//REQUIRE DEPENDENCIES
const express = require("express");

//INITIALIZING EXPRESS APP
const app = express();

//SUPERHEROES ARRAY
const supes = [
    {
        name: 'Superman',
        powers: ['Flight', 'Laser Vision', 'Cold Breath', 'Super Speed'],
    },
    {
        name: 'Wonder Woman',
        powers: ['Truth Whip', 'Super Strength', 'Flight'],
    },
    {
        name: 'Batman',
        powers: ['Giga-Rich', 'MMA Master', 'Bachelor'],
    }
];

//VILLAINS ARRAY
const villains = [
    {
        name: 'Brainiac',
        powers: ['Twelth Level Intellect', 'Conciosness Transferrence', 'Super Strength'],
    },
    {
        name: 'Ares',
        powers: ['Super Strength', 'Super speed', 'Immortality'],
    },
    {
        name: 'Joker',
        powers: ['Insanity', 'Fearless', 'Super Smart'],
    }
]

//CALL SUPES ARRAY
app.get('/supes', (req, res) => {
    res.send(supes)
})

//CALL VILLAINS ARRAY
app.get('/villains', (req, res) => {
    res.send(villains)
})


//CALL SUPES INDEX
app.get('/supes/:index', (req, res) => {
    res.send(
        `<h1>${supes[req.params.index].name}</h1>
    <ul>
        <li>${supes[req.params.index].powers.join("</li><li>")}</li>
    </ul>
    <h3>Nemesis: ${villains[req.params.index].name}</h3>
    <ul>
        <li>${villains[req.params.index].powers.join("</li><li>")}</li>
    </ul>`)
})

//CALL VILLAINS INDEX
app.get('/villains/:index', (req, res) => {
    res.send(
        `<h1>${villains[req.params.index].name}</h1>
    <ul>
        <li>${villains[req.params.index].powers.join("</li><li>")}</li>
    </ul>
    <h3>Nemesis: ${supes[req.params.index].name}</h3>
    <ul>
        <li>${supes[req.params.index].powers.join("</li><li>")}</li>
    </ul>`)
})

//CAN YOU HEEEAAAAR MEEEEE
app.listen(3000, () => {
    console.log("Of course I can!")
})