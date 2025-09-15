import React, { useState } from 'react'
import '../for_storage/p3.css'
const Card = () => {
    const [name, setName] = useState('John');
    const [age, setAge] = useState('25');
    const [address, setAddress] = useState('New York');
    const [phone, setPhone] = useState('123456789');
    const [email, setEmail] = useState('john@gmail.com');
    const [github, setGithub] = useState('https://github.com/john');
  return (      

    <div className="cardcontainer">
    <div className="card-header">Card</div>
    <div className="card-body">
    <p>my name is {name}</p>
    <p>my age is {age}</p>
    <p>my address is {address}</p>
    <p>my phone is {phone}</p>
    <p>my email is {email}</p>
    <p>my github is {github}</p>
    </div>
    </div>
    )
}

export default Card;