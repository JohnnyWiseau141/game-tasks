import mongoose from 'mongoose'

const Schema = mongoose.Schema
const gameSchema = new Schema ({
  title: String,
  complete: Boolean
})

const Game = mongoose.model('Game', gameSchema)

export {
  Game
}