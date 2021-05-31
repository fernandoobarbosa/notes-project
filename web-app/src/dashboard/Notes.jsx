import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Copyright from '../common/Copyright'
import { useHistory } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

export default function Notes ({ notes, showNotes }) {
  const history = useHistory()

  const onEditButtonHandler = (event) => {
    console.log(event)
    history.push('/note/' + event)
    // toDoRequest(event)
  }

  const classes = useStyles()
  if (showNotes) {
    return (
      <>
        <CssBaseline />
        <main>
          <Container className={classes.cardGrid} maxWidth='md'>
            {/* End hero unit */}
            <Grid container spacing={4}>
              {notes.map((note) => (
                <Grid item key={note._id} xs={12} sm={6} md={4}>
                  <Card className={classes.card} key={note._id}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {note.title}
                      </Typography>
                      <Typography>
                        {note.content}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary' onClick={() => onEditButtonHandler(note._id)}>
                        Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Container>
        </main>

      </>
    )
  }
  return ('')
}
