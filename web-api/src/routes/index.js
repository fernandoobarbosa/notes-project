
import express from 'express'
import cors from 'cors'
import auth from '../middleware/auth'
import { getUsers, getUser, createUser, generateToken } from '../controllers/userController'
import { createNote, getNoteById, updateById, removeById } from '../controllers/noteController'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// authorization

app.post('/auth', (req, res) => {
  generateToken(req.body.login, req.body.password, res)
})

// users

app.get('/users', (req, res) => {
  getUsers(req, res)
})

app.post('/user', (req, res) => {
  createUser(req.body.login, req.body.password, res)
})

app.get('/user', auth, (req, res) => {
  getUser(req, res)
})

// note
app.post('/note', auth, (req, res) => {
  createNote(req.id, req.body.title, req.body.content, res)
})

app.get('/note/:id', auth, (req, res) => {
  getNoteById(req.id, req.params.id, res)
})

app.put('/note/:id', auth, (req, res) => {
  updateById(req.id, req.params.id, req.body.title, req.body.content, res)
})

app.delete('/note/:id', auth, (req, res) => {
  removeById(req.id, req.params.id, res)
})

export default app
