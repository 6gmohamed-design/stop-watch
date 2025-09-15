import React, { useContext } from 'react';
import { Usecontext } from './usecontext';

const Profile = () => {
  const {name,age}=useContext(Usecontext);
    
  return (
    <>
      <div>Profile</div>
      <p>name: {name}</p>
   {<p>age: {age}</p>}
    </>
  );
};

export default Profile;