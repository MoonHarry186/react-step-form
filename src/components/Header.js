import React from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
const Header = ({children, name}) => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            {name}
          </Typography>
        </Container>
      </AppBar>
      {children}
    </>

  )
}

export default Header
