import mongoose from 'mongoose'
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

export default mongoose
