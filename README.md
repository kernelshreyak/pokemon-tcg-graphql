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

### Installation

npm install

Create a .env file with Pokemon TCG API Key which you can <a href="https://dev.pokemontcg.io/" target="_blank">get from here</a>

**To start:**

npm run dev

Visit the GraphQL explorer at http://localhost:4000

