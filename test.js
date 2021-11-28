const pokemon = require("pokemontcgsdk");

pokemon.configure({apiKey: '123abc'})

pokemon.card.where({ q: 'name:blastoise' })
.then(result => {
    console.log(result.data[0])
})