import React, { useContext } from 'react';
import { Usecontextcontent, Usecontextcontent2 } from './usecontext';

const CompC = () => {
  const { name, age } = useContext(Usecontextcontent);
  const { mail } = useContext(Usecontextcontent2);

  return (
    <div style={{ backgroundColor: 'yellow' }}>
      CompC: {name} - {age} - {mail}
    </div>
  );
};

export default CompC;