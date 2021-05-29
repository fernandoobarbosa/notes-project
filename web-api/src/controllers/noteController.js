import { create } from '../services/noteService'

export const createNote = (id, title, content, res) => {
  create(id, title, content)
    .then((response) => {
      res.status(201).send(response)
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg)
    })
}
