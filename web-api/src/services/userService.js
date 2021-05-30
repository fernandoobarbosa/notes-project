import User from '../models/user'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json'
import hash from 'object-hash'

export const loginValidation = async (login, password) => {
  const hashPassword = hash(password)

  const user = await User.findOne({
    login: login,
    password: hashPassword
  }).exec()

  if (user) {
    const id = login

    const token = jwt.sign({ id }, authConfig.secret, {
      expiresIn: 86400 // expira em 1 dia
    })

    return { auth: true, token: token }
  }
  throw new Error('You have entered an invalid username or password')
}

export const getAll = async () => {
  const users = await User.find()
  return users
}

export const get = async (login) => {
  const user = await User.find({ login: login })
  return user
}

export const create = async (login, password) => {
  const hashPassword = hash(password)
  const user = await User.insertMany([
    { login: login, password: hashPassword }
  ])
  return user
}
