const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = require('graphql')

const ProductDescriptionType = new GraphQLObjectType({
  name: 'ProductDescription',
  fields: () => ({
    product_id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    meta_description: {
      type: GraphQLString
    },
    image: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  })
})

module.exports = ProductDescriptionType
