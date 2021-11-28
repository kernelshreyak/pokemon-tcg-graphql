const { getPokemonCardByName } = require("./requests");



const resolvers = {
    Query: {
      pokemoncards: async (parent, args, context, info) => {
          return getPokemonCardByName(args.name,args.pageSize,args.page);
      },
    },
};

module.exports.resolvers = resolvers;