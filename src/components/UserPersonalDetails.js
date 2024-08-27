import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserPersonalDetails = ({ nextStep, prevStep, values, handleChange }) => {
  return (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360, margin: 'auto', marginTop: '32px' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem>
          <TextField
            placeholder="Enter Your Occupation"
            defaultValue={values.occupation}
            onChange={handleChange('occupation')}
            sx={{ width: "100%" }}
          />
        </ListItem>
        <ListItem>
          <TextField
            placeholder="Enter Your City"
            defaultValue={values.city}
            onChange={handleChange('city')}
            sx={{ width: "100%" }}
          />
        </ListItem>
        <ListItem>
          <TextField
            placeholder="Enter Your Bio"
            defaultValue={values.bio}
            onChange={handleChange('bio')}
            sx={{ width: "100%" }}
          />
        </ListItem>
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
            Continue
          </Button>
        </ListItem>
      </List>
    </>
  )
}

export default UserPersonalDetails
