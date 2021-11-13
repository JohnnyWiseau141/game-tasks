import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema ({
  title: String,
  complete: Boolean
}, {
  timestamps: true,
})

const Task = mongoose.model('Task', taskSchema)

export {
  Task
}