import React, { createContext, useContext, useEffect, useState } from 'react'
import UserProfile from './UserProfile'

const initalAddress = () => {
  console.log('initalAddress')
  return {
    nation: 'Vietnam',
    city: {
      street: '200 Dien Bien Phu, Da Nang',
      house: 'building'
    }
  }
}
const getAddress = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: 'USA',
        city: {
          street: '100, Nicolas, NY',
          house: 'building'
        }
      })
    }, 3000)
  })
export const UserContext = createContext()
export default function User() {
  const [firstName, setFirstName] = useState('Alex')
  const [age, setAge] = useState(24)
  const [address, setAddress] = useState(initalAddress)
  const [, forceRerender] = useState(0)
  const handleIncreaseAge = () => {
    setAge((prevState) => prevState + 1)
  }
  const changeStreet = () => {
    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city }
      newCity.street = '100 Dien Bien Phu, Da Nang'
      return {
        ...prevAddress,
        city: newCity
      }
    })
  }
  const reRender = () => {
    forceRerender((prevState) => prevState + 1)
  }
  // Thường dùng để gọi API
  useEffect(() => {
    console.log('userEffect giong nhu componentDidMount')
    getAddress().then((res) => {
      setAddress((prevState) => {
        const newAddress = { ...address }
        newAddress.city = res.city
        return newAddress
      })
    })
    //Cleanup Function
    return () => {
      console.log('Cleanup Function')
    }
  }, [])
  return (
    <div>
      <h1>UseClassComponent</h1>
      <UserContext.Provider
        value={{
          address,
          age,
          firstName,
          handleIncreaseAge
        }}
      >
        <UserProfile />
      </UserContext.Provider>
      <button onClick={forceRerender}>Re-Render</button>
    </div>
  )
}
