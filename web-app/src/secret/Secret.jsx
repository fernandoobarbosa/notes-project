import React from 'react'

export default function Secret ({ logout, ...rest }) {
  return (
    <div>
      <h1>Secret</h1>
      <button onClick={logout}>Log out</button>
    </div>
  )
}
