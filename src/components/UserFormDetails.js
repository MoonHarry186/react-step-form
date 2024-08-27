import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const UserFormDetails = ({ nextStep, values, handleChange }) => {
  return (
    <>
      <List 
        sx={{ width: '100%', maxWidth: 360, margin: 'auto', marginTop: '32px' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem>
          <TextField
            placeholder="Enter Your First Name"
            defaultValue={values.firstName}
            onChange={handleChange('firstName')}
            sx={{width: "100%"}}
          />
        </ListItem>
        <ListItem>
          <TextField
            placeholder="Enter Your Last Name"
            defaultValue={values.lastName}
            onChange={handleChange('lastName')}
            sx={{width: "100%"}}
          />
        </ListItem>
        <ListItem>
          <TextField
            placeholder="Enter Your Email"
            defaultValue={values.email}
            onChange={handleChange('email')}
            sx={{width: "100%"}}
          />
        </ListItem>
        <ListItem>
          <Button 
            variant="contained"
            onClick={nextStep}
          >
            Continue
          </Button>
        </ListItem>
      </List>
    </>

  )
}

export default UserFormDetails
