
import express from 'express'
import cors from 'cors'
import auth from '../middleware/auth'
import { getUsers, createUser, generateToken } from '../controllers/userController'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.get('/', auth, (req, res) => {
  res.status(200).send('Its working!')
})

app.get('/users', (req, res) => {
  getUsers(req, res)
})

app.post('/user', (req, res) => {
  createUser(req.body.login, req.body.password, res)
})

app.post('/auth', (req, res) => {
  generateToken(req.body.login, req.body.password, res)
  // console.log(req.body)
})

export default app
