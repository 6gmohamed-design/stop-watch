import React from 'react'
import { useContext } from 'react';
import {Usecontext }from './usecontext';
const Contact = () => {
  const {email,phone}=useContext(Usecontext);
  return (
    <>
    <div>Contact</div>
   <p>phone:{phone}</p>
   <p>email:{email}</p>
    </>
  )
}

export default Contact;