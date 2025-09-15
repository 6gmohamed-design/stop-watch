import React from 'react'
import  './p.css';
const Footer= () => {
let name="John";
    return (
      <>
      <div className="footer" id="footer">
      <span>Footer</span>
      <p>copyright@:{new Date().getFullYear()}:{new Date().getMonth()}  {name}</p>
      </div>
      </>
    )
  }
  export default Footer;
  