import React from 'react'
import PropTypes from 'prop-types'

const Start = (props) => {
  return (
    <>
    <div>start</div>
    <h2>my name is {props.name}</h2>
    <p>my age is {props.age}</p>
    <p>my address is {props.address}</p>
    <p>my phone is {props.phone}</p>
    <p>my email is {props.email}</p>
    <h2>my isactive is {props.isactive ? "active" : "inactive"}</h2>
    </>
      )
}
Start.propTypes={   
    name:PropTypes.string,
    age:PropTypes.number,
    address:PropTypes.string,
    phone:PropTypes.number,
    email:PropTypes.string,
    isactive:PropTypes.bool
}

Start.defaultProps={
    name:"mohamed",
    age:25,
    address:"New York",
    phone:123456789,
    email:"mohamed@gmail.com",
    isactive:false
}
export default Start