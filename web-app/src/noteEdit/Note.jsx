import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import api from '../services/api'
import NavBar from '../common/Navbar'
import NoteForm from './NoteForm'
export default function Note () {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { id } = useParams()

  function onSubmitForm (dados) {
    if (dados.title === '') { dados.title = title }
    if (dados.content === '') { dados.content = content }
    console.log(dados)
    console.log(id)
    api
      .put('/note/' + id, {
        headers: { 'Access-Control-Allow-Origin': '*', Authorization: `Bearer ${localStorage.getItem('token')}` },
        title: dados.title,
        content: dados.content
      })
      .then(function (response) {
        console.log(response)
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
        console.log(response.data)
        setTitle(response.data[0].title)
        setContent(response.data[0].content)
        // setNote(response.data)
        console.log(response)
        // setNotes(response.data[0].notes)
      })
      .catch(function (error) {
        // localStorage.setItem('auth', false)
        // localStorage.setItem('token', 'no token')
        // logout()
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
      <NavBar />
      <NoteForm onSubmit={onSubmitForm} data={data} />
    </div>
  )
}
