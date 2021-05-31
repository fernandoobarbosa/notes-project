import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Badge from '@material-ui/core/Badge'
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function ButtonAppBar ({ logout }) {
  const history = useHistory()
  function OnClickHomeHandler () {
    history.push('/dashboard')
  }
  function OnClickNewNoteHandler () {
    history.push('/note')
  }
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title} onClick={OnClickHomeHandler}>
            Notes
          </Typography>
          <MenuItem>
            <IconButton aria-label='show 4 new mails' color='inherit' onClick={OnClickNewNoteHandler}>
              <Badge color='secondary'>
                <NoteAddIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          <Button color='inherit' onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
