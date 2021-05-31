import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import api from '../services/api'
import NavBar from '../common/Navbar'
import NoteForm from './NoteForm'
import { useHistory } from 'react-router-dom'
export default function Note ({ logout }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { id } = useParams()
  const history = useHistory()

  function onSubmitForm (data) {
    if (data.title === '') { data.title = title }
    if (data.content === '') { data.content = content }

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }

    const bodyParameters = {
      title: data.title,
      content: data.content
    }

    api.put('/note/' + id,
      bodyParameters,
      config
    ).then(function (response) {
      history.push('/dashboard')
    })
      .catch(function (error) {
        console.log(error)
      })
  }

  function loadNote () {
    api
      .get('/note/' + id, {
        headers: { 'Access-Control-Allow-Origin': '*', Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(function (response) {
        setTitle(response.data[0].title)
        setContent(response.data[0].content)
      })
      .catch(function (error) {
        logout()
        console.log(error)
      })
  }

  useEffect(() => {
    if (id !== undefined) { loadNote() }
  }, [])
  console.log(title)
  const data = { title: title, content: content }
  return (
    <div>
      <NavBar logout={logout} />
      <NoteForm onSubmit={onSubmitForm} data={data} />
    </div>
  )
}
