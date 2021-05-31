import React from 'react'
import NewNoteForm from '../newNote/NewNoteForm'
import NavBar from '../common/Navbar'
import api from '../services/api'
import { useHistory } from 'react-router-dom'
export default function NewNote ({ logout }) {
  const history = useHistory()
  function onSubmit (data) {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }
    const bodyParameters = {
      title: data.title,
      content: data.content
    }

    api.post('/note',
      bodyParameters,
      config
    ).then(function (response) {
      history.push('/dashboard')
    })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      <NavBar logout={logout} />
      <NewNoteForm onSubmit={onSubmit} />
    </div>
  )
}
