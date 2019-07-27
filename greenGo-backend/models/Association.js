const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const associationSchema = new Schema(
  {
    name: String,
    description: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Association', associationSchema)
