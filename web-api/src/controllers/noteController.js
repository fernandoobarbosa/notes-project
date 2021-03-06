import { create, update, remove } from '../services/noteService'
import { get } from '../services/userService'

export const createNote = (id, title, content, res) => {
  create(id, title, content)
    .then((response) => {
      res.status(201).send(response)
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg)
    })
}

export const getNoteById = (id, noteId, res) => {
  get(id)
    .then((response) => {
      const filtered = response[0].notes.filter(function (el) {
        return el._id.toString() === noteId
      })
      res.status(200).send(filtered)
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg)
    })
}

export const updateById = (id, noteId, title, content, res) => {
  update(id, noteId, title, content)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg)
    })
}

export const removeById = (id, noteId, res) => {
  remove(id, noteId)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg)
    })
}
