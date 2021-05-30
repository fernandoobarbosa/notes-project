import { getAll, get, create, loginValidation } from '../services/userService'

export const generateToken = (login, password, res) => {
  loginValidation(login, password)
    .then((response) => {
      res.send(response)
    })
    .catch((error) => {
      res.status(401).send(error.message)
    })
}

export const getUsers = async (req, res) => {
  getAll()
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg)
    })
}
export const getUser = async (req, res) => {
  get(req.id)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg)
    })
}

export const createUser = async (login, password, res) => {
  create(login, password)
    .then((response) => {
      res.status(201).send(response)
    })
    .catch((error) => {
      res.status(400).send(error._message)
    })
}
