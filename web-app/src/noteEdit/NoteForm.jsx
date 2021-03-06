import React, { useState } from 'react'
import Copyright from '../common/Copyright'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import NoteIcon from '@material-ui/icons/Note'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function NoteForm ({ onSubmit, data }) {
  const [title, setTitle] = useState(data.title)
  const [content, setContent] = useState(data.content)
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <NoteIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Edit Note
        </Typography>
        <form
          className={classes.form} noValidate onSubmit={(event) => {
            event.preventDefault()
            console.log(title)
            onSubmit({ title, content })
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                multiline
                name='title'
                onChange={(event) => { setTitle(event.target.value) }}
                defaultValue={data.title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='content'
                multiline
                rows={14}
                onChange={(event) => { setContent(event.target.value) }}
                defaultValue={data.content}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Save
          </Button>

        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
