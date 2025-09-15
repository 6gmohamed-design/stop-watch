import React from 'react'
import { useContext } from 'react';
import {Usecontext }from './usecontext';
const Footer = () => {
  const {name}=useContext(Usecontext);
  return (
    <>
    <div>Footer</div>
    <p>copyright@2025 {name}</p>
    </>
  )
}

export default Footer