
require("dotenv").config()

const pokemon = require("pokemontcgsdk");
const { cardmock } = require("./mockdata/card");

pokemon.configure(process.env.APIKEY);

async function getPokemonCardByName(name,pageSize=10,page=1){
    const result = await pokemon.card.where({ q: `name:${name}`,pageSize: pageSize,page: page });
    let data = result.data;

    // special field adjustments
    for(let i=0;i<data.length;i++){
        data[i].image = data[i].images.small;
    }

    return data;
}

module.exports.getPokemonCardByName = getPokemonCardByName;
