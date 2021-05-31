import React, { useEffect, useState } from 'react'
import Notes from './Notes'
import Navbar from '../common/Navbar'
import api from '../services/api'
import { useHistory } from 'react-router-dom'
export default function Dashboard ({ logout, login, ...rest }) {
  const [notes, setNotes] = useState([])
  const [showNotes, setShowNotes] = useState(false)
  const history = useHistory()

  useEffect(() => {
    loadNotes()
  }, [])
  function loadNotes () {
    api
      .get('/user', {
        headers: { 'Access-Control-Allow-Origin': '*', Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(function (response) {
        setNotes(response.data[0].notes)
        setShowNotes(true)
      })
      .catch(function (error) {
        localStorage.setItem('auth', false)
        localStorage.setItem('token', 'no token')
        setShowNotes(false)
        logout()
        console.log(error)
      })
  }

  function deleteNote (id) {
    api
      .delete('/note/' + id, {
        headers: { 'Access-Control-Allow-Origin': '*', Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(function (response) {
        console.log(response)
        history.go(0)
      })
      .catch(function (error) {
        console.log(error)
        logout()
      })
  }
  return (
    <div>
      <Navbar logout={logout} />
      <Notes notes={notes} showNotes={showNotes} deleteNote={deleteNote} />
    </div>
  )
}
