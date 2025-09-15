import React, { useContext } from 'react';
import { Usecontextcontent } from './usecontext';
 

const CompA = () => {
  const { name, age } = useContext(Usecontextcontent);
 

  return (
    <div style={{ backgroundColor: 'blue' }}>
      CompA: {name} - {age} 
    </div>
  );
};

export default CompA;