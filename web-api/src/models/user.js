import mongoose from '../config/database'
import uniqueValidator from 'mongoose-unique-validator'
import NoteSchema from '../models/note'
const UserSchema = mongoose.Schema({
  login: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  notes: [NoteSchema]
})

const User = mongoose.model('User', UserSchema)
UserSchema.plugin(uniqueValidator)
export default User
