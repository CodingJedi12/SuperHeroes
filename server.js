//REQUIRE DEPENDENCIES
const express = require("express");

//INITIALIZING EXPRESS APP
const app = express();

const superheroes = [
    //SUPERHEROES OBJECT
    {
        supes: [
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
        ]
    },

    //VILLAINS OBJECT
    {
        villains: [
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
    }
]

//CALL SUPERHEROES
app.get('/superheroes', (req, res) => {
    res.send(superheroes)
})

//CALL SUPES ARRAY
app.get('/superheroes/supes', (req, res) => {
    res.send(superheroes[0].supes)
})


//CALL VILLAINS ARRAY
app.get('/superheroes/villains', (req, res) => {
    res.send(superheroes[1].villains)
})


//CALL SUPES INDEX
app.get('/superheroes/supes/:index', (req, res) => {
    res.send(
        `<h1>${superheroes[0].supes[req.params.index].name}</h1>
    <ul>
        <li>${superheroes[0].supes[req.params.index].powers.join("</li><li>")}</li>
    </ul>
    <h3>Nemesis: ${superheroes[1].villains[req.params.index].name}</h3>
    <ul>
        <li>${superheroes[1].villains[req.params.index].powers.join("</li><li>")}</li>
    </ul>`)
})

//CALL VILLAINS INDEX
app.get('/superheroes/villains/:index', (req, res) => {
    res.send(
        `<h1>${superheroes[1].villains[req.params.index].name}</h1>
    <ul>
        <li>${superheroes[1].villains[req.params.index].powers.join("</li><li>")}</li>
    </ul>
    <h3>Nemesis: ${superheroes[0].supes[req.params.index].name}</h3>
    <ul>
        <li>${superheroes[0].supes[req.params.index].powers.join("</li><li>")}</li>
    </ul>`)
})

//CAN YOU HEEEAAAAR MEEEEE
app.listen(3000, () => {
    console.log("Of course I can!")
})