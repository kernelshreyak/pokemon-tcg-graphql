// mock data for testing Pokemon TCG API response without hitting the API

const cardmock = {
  id: 'base6-4',
  name: 'Dark Blastoise',
  supertype: 'Pokémon',
  subtypes: [ 'Stage 2' ],
  level: '28',
  hp: '70',
  types: [ 'Water' ],
  evolvesFrom: 'Dark Wartortle',
  attacks: [
    {
      name: 'Hydrocannon',
      cost: [Array],
      convertedEnergyCost: 2,
      damage: '30+',
      text: "Does 30 damage plus 20 more damage for each Water Energy attached to Dark Blastoise but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way."
    },
    {
      name: 'Rocket Tackle',
      cost: [Array],
      convertedEnergyCost: 3,
      damage: '40',
      text: "Dark Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Dark Blastoise during your opponent's next turn. (Any other effects of attacks still happen.)"
    }
  ],
  weaknesses: [ { type: 'Lightning', value: '×2' } ],
  retreatCost: [ 'Colorless', 'Colorless' ],
  convertedRetreatCost: 2,
  set: {
    id: 'base6',
    name: 'Legendary Collection',
    series: 'Other',
    printedTotal: 110,
    total: 110,
    legalities: { unlimited: 'Legal' },
    ptcgoCode: 'LC',
    releaseDate: '2002/05/24',
    updatedAt: '2020/08/14 09:35:00',
    images: {
      symbol: 'https://images.pokemontcg.io/base6/symbol.png',
      logo: 'https://images.pokemontcg.io/base6/logo.png'
    }
  },
  number: '4',
  artist: 'Mitsuhiro Arita',
  rarity: 'Rare Holo',
  flavorText: 'An aggressive Pokémon that tackles anything it sees.',
  nationalPokedexNumbers: [ 9 ],
  legalities: { unlimited: 'Legal' },
  images: {
    small: 'https://images.pokemontcg.io/base6/4.png',
    large: 'https://images.pokemontcg.io/base6/4_hires.png'
  },
  tcgplayer: {
    url: 'https://prices.pokemontcg.io/tcgplayer/base6-4',
    updatedAt: '2021/11/26',
    prices: { holofoil: [Object], reverseHolofoil: [Object] }
  },
  cardmarket: {
    url: 'https://prices.pokemontcg.io/cardmarket/base6-4',
    updatedAt: '2021/11/26',
    prices: {
      averageSellPrice: null,
      lowPrice: 100,
      trendPrice: 98.34,
      germanProLow: null,
      suggestedPrice: null,
      reverseHoloSell: null,
      reverseHoloLow: null,
      reverseHoloTrend: 116.85,
      lowPriceExPlus: 150,
      avg1: 116,
      avg7: 128.99,
      avg30: 128.99,
      reverseHoloAvg1: 149.99,
      reverseHoloAvg7: 81.79,
      reverseHoloAvg30: 81.79
    }
  }
}

module.exports.cardmock = cardmock;