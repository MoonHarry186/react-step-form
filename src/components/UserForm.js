import React, { useState } from 'react'
import UserFormDetails from './UserFormDetails'
import UserPersonalDetails from './UserPersonalDetails'
import Success from './Success'
import Confirm from './Confirm'
import Header from './Header'

const UserForm = () => {
  const [step, setStep] = useState(1)
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  })

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }
  const prevStep = () => {
    setStep((prev) => prev - 1)
  }
  const handleChange = input => e => {
    setUserInfo({...userInfo, [input]: e.target.value})
  }
  let component;
  let name;
  switch (step) {
    case 1: {
      component = <UserFormDetails 
        nextStep={nextStep} 
        values={userInfo} 
        handleChange={handleChange}
      />
      name = 'User Form Details'
      break;
    }
    case 2: {
      component = <UserPersonalDetails nextStep={nextStep} prevStep={prevStep} values={userInfo} handleChange={handleChange} />
      name = 'User Personal Details'
      break;
    }
    case 3: {
      component = <Confirm nextStep={nextStep} prevStep={prevStep} values={userInfo} handleChange={handleChange} />
      name = 'Confirm Details'
      break;
    }
    case 4: {
      component = <Success prevStep={prevStep} values={userInfo} />
      name = 'Success'
      break;
    }
    default: {
      break;
    }
  }

  return (
    <Header name={name}>
       {component}
    </Header>
  )
}

export default UserForm
