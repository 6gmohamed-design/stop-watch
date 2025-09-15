import React, { useContext } from 'react';
import { Usecontextcontent } from './usecontext';

const CompB = () => {
  const { name, age } = useContext(Usecontextcontent);

  return (
    <div style={{ backgroundColor: 'green' }}>
      <p>CompB: {name} - {age}</p>
      <p>hello</p>
    </div>
  );
};

export default CompB;