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
