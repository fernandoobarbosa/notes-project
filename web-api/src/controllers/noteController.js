import { create } from '../services/noteService'
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
        console.log(el._id.toString())
        return el._id.toString() === noteId
      })
      console.log(filtered)
      res.status(200).send(filtered)
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg)
    })
}
