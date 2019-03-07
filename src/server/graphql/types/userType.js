const knex = require('../../db/connection')

const dataTimeScalar = require('../scalars/dataTimeScalar')
const cartType = require('./cartType')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql')

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString,
      description: 'User\'s real name'
    },
    surname: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    address: {
      type: GraphQLString
    },
    is_active: {
      type: GraphQLBoolean
    },
    registration_time: {
      type: dataTimeScalar
    },
    carts: {
      type: cartType,
      resolve (parent) {
        return knex.table('carts')
          .where('user_id', parent.id)
          .first()
      }
    }
  })
})

module.exports = UserType
