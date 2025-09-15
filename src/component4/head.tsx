import React,{useState,useCallback,useEffect} from 'react'
 
const Header= () => {

  return (
    <>
    <div className="header">
     <ul className="nav nav-pills nav-fill">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">HOME</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#about">ABOUT</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">CONTACT</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " aria-disabled="true" href="#footer">FOOTER</a>
  </li>
</ul>
    </div>
    </>
  )
}

export default Header;
