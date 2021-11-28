const { gql } = require("apollo-server");

const typeDefs = gql`
  type PokemonCard {
    name: String
    supertype: String
    level: String
    hp: String
    number: String,
    evolvesFrom: String
    artist: String
    rarity: String,
    convertedRetreatCost: Int,
    image: String,
    flavorText: String
  }

  type Query {
    pokemoncards(name: String!,pageSize: Int,page: Int): [PokemonCard]
  }
`;

module.exports.typeDefs = typeDefs;
