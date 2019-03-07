const knex = require('../../db/connection')

const dataTimeScalar = require('../scalars/dataTimeScalar')
const cartItemType = require('./cartItemType')
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLBoolean
} = require('graphql')

const CartType = new GraphQLObjectType({
  name: 'Cart',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    user_id: {
      type: GraphQLID
    },
    purchase_time: {
      type: dataTimeScalar
    },
    is_paid: {
      type: GraphQLBoolean
    },
    sum: {
      type: GraphQLFloat
    },
    items: {
      type: GraphQLList(cartItemType),
      resolve (parent) {
        return knex.table('cart_items')
          .where('cart_id', parent.id)
      }
    }
  })
})

module.exports = CartType
