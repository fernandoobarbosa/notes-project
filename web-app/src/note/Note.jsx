import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import api from '../services/api'
import NavBar from '../common/Navbar'
export default function Note () {
  const { id } = useParams()
  const [note, setNote] = useState({})
  function loadNote () {
    api
      .get('/note/' + id, {
        headers: { 'Access-Control-Allow-Origin': '*', Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(function (response) {
        console.log(response.data)
        // setNote(response.data)
        // console.log(note[0])
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
    loadNote()
  }, [])

  return (
    <div>
      <NavBar />
    </div>
  )
}
