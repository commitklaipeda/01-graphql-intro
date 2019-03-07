const knex = require('../db/connection')
const {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLID} = require('graphql')
const productType = require('./types/productType')
const productDescriptionType = require('./types/productDescriptionType')
const userType = require('./types/userType')
const cartType = require('./types/cartType')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    product: {
      type: productType,
      args: {id: {type: GraphQLInt}},
      // args: {
      //   id: {
      //     type: new GraphQLNonNull(GraphQLID)
      //   }
      // },
      resolve (parent, args) {
        if (!args.id) {
          throw new Error('please provide an ID')
        }

        return knex.table('products')
          .where('id', args.id)
          .first()
      }
    },
    productList: {
      type: GraphQLList(productType),
      resolve () {
        return knex.table('products')
      }
    },
    productDescription: {
      type: productDescriptionType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve (parent, args) {
        return knex.table('product_descriptions')
          .where('product_id', args.id)
          .first()
      }
    },
    user: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve (parent, args) {
        return knex.table('users')
          .where('id', args.id)
          .first()
      }
    },
    users: {
      type: GraphQLList(userType),
      resolve (parent, args) {
        return knex.table('users')
      }
    },
    cart: {
      type: cartType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve (parent, args) {
        return knex.table('carts')
          .where('id', args.id)
          .first()
      }
    },
    carts: {
      type: GraphQLList(cartType),
      resolve (parent, args) {
        return knex.table('carts')
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
