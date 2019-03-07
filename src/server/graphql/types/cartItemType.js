const knex = require('../../db/connection')

const productType = require('./productType')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID
} = require('graphql')

const CartItemType = new GraphQLObjectType({
  name: 'CartItem',
  fields: () => ({
    product_id: {
      type: GraphQLID
    },
    quantity: {
      type: GraphQLInt
    },
    product: {
      type: productType,
      resolve (parent) {
        return knex.table('products')
          .where('id', parent.product_id)
          .first()
      }
    }
  })
})

module.exports = CartItemType
