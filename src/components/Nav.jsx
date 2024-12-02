import React from 'react'
import { useSelector } from 'react-redux'

const Nav = () => {
    const cartLenght = useSelector((state) => state.pets.value.length)
  return (
    <div><h3>Cart {cartLenght}</h3></div>
  )
}

export default Nav