import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import ProtectedRoute from './protectedRoute/ProtectedRoute'
import Login from './login/Login'
import Dashboard from './dashboard/Dashboard'
import Register from './register/Register'
import Note from './noteEdit/Note'
import NewNote from './newNote/NewNote'
function App () {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.setItem('auth', false)
    localStorage.setItem('token', '')
    setIsAuthenticated(false)
  }

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') {
      login()
    } else {
      logout()
    }
  })

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            {isAuthenticated ? (
              <Redirect to='/dashboard' />
            ) : (
              <Login
                isAuthenticated={isAuthenticated}
                logout={logout}
                login={login}
                component={Login}
              />
            )}
          </Route>
          <Route path='/register' exact>
            {isAuthenticated ? (
              <Redirect to='/dashboard' />
            ) : (
              <Register />

            )}
          </Route>
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            exact path='/note'
            logout={logout}
            login={login}
            component={NewNote}
          />
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path='/dashboard'
            logout={logout}
            login={login}
            component={Dashboard}
          />
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path='/note/:id'
            logout={logout}
            login={login}
            component={Note}
          />

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  )
  function NotFound () {
    return <h2>404 Not Found</h2>
  }
}

export default App
