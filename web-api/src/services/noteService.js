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
// model.update(
//   { _id: 1, 'items.id': '2' },
//   {
//     $set: {
//       'items.$.name': 'yourValue',
//       'items.$.value': 'yourvalue'
//     }
//   }
// )
export const update = async (id, noteId, title, content) => {
  const user = await User.update(
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
