import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  message: {
    maxWidth: '350px',
    backgroundColor: '#07bf95',
    borderRadius: '50px',
    padding: '0px',
  },
}))

const Message = (props) => {
  const classes = useStyles()

  return (
    <div style = {{maxWidth: '350px'}} >
      <div className={classes.message}>
        user message here user message here user message here
      </div>
      <Typography variant='body2' display='block' gutterBottom style={{marginLeft: '12px', textAlignLast: 'end'}}>
        20 minutes ago
      </Typography>
    </div>
  )
}

Message.propTypes = {}

export default Message
