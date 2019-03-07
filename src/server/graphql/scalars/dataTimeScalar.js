const formatDate = require('date-fns/format')

const {
  GraphQLScalarType
} = require('graphql')

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'Custom Data Type for Date Time handling',
  serialize (value) {
    return formatDate(value, 'YYYY-MM-DD HH:mm:ss')
  },
  parseLiteral (value) {
    return value
  },
  parseValue (value) {
    return value
  }
})

module.exports = DateTime
