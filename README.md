## Unofficial GraphQL for Pokemon TCG API 
<br />

**Example query:**

```graphql
query($name: String!, $pageSize: Int){
  pokemoncards(name: $name,pageSize: $pageSize) {
    name,
    hp,
    number,
    rarity,
    image
  }
}
```
<br />
<br />

**Example response:**

```json
{
  "data": {
    "pokemoncards": [
      {
        "name": "Charizard-GX",
        "hp": "250",
        "number": "9",
        "rarity": "Rare Holo GX",
        "image": "https://images.pokemontcg.io/sm115/9.png"
      },
      {
        "name": "Reshiram & Charizard-GX",
        "hp": "270",
        "number": "20",
        "rarity": "Rare Holo GX",
        "image": "https://images.pokemontcg.io/sm10/20.png"
      },
      {
        "name": "Charizard-GX",
        "hp": "250",
        "number": "20",
        "rarity": "Rare Holo GX",
        "image": "https://images.pokemontcg.io/sm3/20.png"
      },
      {
        "name": "Charizard-GX",
        "hp": "250",
        "number": "SV49",
        "rarity": "Rare Shiny GX",
        "image": "https://images.pokemontcg.io/sma/SV49.png"
      },
      {
        "name": "Charizard-GX",
        "hp": "250",
        "number": "SM60",
        "rarity": "Promo",
        "image": "https://images.pokemontcg.io/smp/SM60.png"
      }
    ]
  }
}
```

<br />
<br />



### Installation

npm install

Create a .env file with Pokemon TCG API Key which you can <a href="https://dev.pokemontcg.io/" target="_blank">get from here</a>

**To start:**

npm run dev

Visit the GraphQL explorer at http://localhost:4000

