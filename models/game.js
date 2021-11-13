import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gameSchema = new Schema ({
  title: String,
  complete: Boolean,
  tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
})

const Game = mongoose.model('Game', gameSchema)

export {
  Game
}