import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema ({
  title: String,
  complete: Boolean,
  game: { type: Schema.Types.ObjectId, ref: "Game" }
}, {
  timestamps: true,
})

const Task = mongoose.model('Task', taskSchema)

export {
  Task
}