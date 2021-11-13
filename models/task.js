import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema ({
  objective: String,
  complete: Boolean
})