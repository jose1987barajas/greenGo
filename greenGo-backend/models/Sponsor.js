const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const sponsorSchema = new Schema(
  {
    name: String,
    description: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Sponsor', sponsorSchema)
