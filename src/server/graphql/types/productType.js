const knex = require('../../db/connection')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLFloat,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql')
const productDescriptionType = require('./productDescriptionType')

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    code: {
      type: GraphQLString
    },
    price: {
      type: GraphQLFloat
    },
    rating: {
      type: GraphQLInt
    },
    is_active: {
      type: GraphQLBoolean
    },
    description: {
      type: productDescriptionType,
      resolve (parent) {
        return knex.table('product_descriptions')
          .where('product_id', parent.id)
          .first()
      }
    }
  })
})

module.exports = ProductType
