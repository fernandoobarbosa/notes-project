import User from '../models/user'

export const create = async (id, title, content) => {
  const user = await User.updateOne(
    { login: id },
    {
      $push: {
        notes: {
          $each: [
            { title: title, content: content }
          ]
        }
      }
    }
  )

  return user
}

export const update = async (id, noteId, title, content) => {
  const user = await User.updateOne(
    { login: id, 'notes._id': noteId },
    {
      $set: {
        'notes.$.title': title,
        'notes.$.content': content
      }
    }
  )

  return user
}

export const remove = async (id, noteId) => {
  console.log(id)
  console.log(noteId)
  const user = User.updateOne(
    { login: id }, { $pull: { notes: { _id: noteId } } }, { safe: true, upsert: true })
  return user
}
