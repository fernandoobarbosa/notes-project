import mongoose from '../config/database'

const NoteSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
})

export default NoteSchema
