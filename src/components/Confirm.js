import React from 'react'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'
const Confirm = ({values, prevStep, nextStep}) => {
  return (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360, margin: 'auto', marginTop: '32px' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem><ListItemText primary={values.firstName}></ListItemText></ListItem>
        <ListItem><ListItemText primary={values.lastName}></ListItemText></ListItem>
        <ListItem><ListItemText primary={values.email}></ListItemText></ListItem>
        <ListItem><ListItemText primary={values.occupation}></ListItemText></ListItem>
        <ListItem><ListItemText primary={values.city}></ListItemText></ListItem>
        <ListItem><ListItemText primary={values.bio}></ListItemText></ListItem>
        <ListItem>
          <Button
            variant="outlined"
            onClick={prevStep}
            sx={{marginRight: '8px'}}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={nextStep}
          >
            Confirm the details
          </Button>
        </ListItem>
      </List>
    </>
  )
}

export default Confirm
