import React, { createContext } from 'react';

export const Usecontext = createContext();

const UsecontextProvider = ({ children }) => {
  let name="John";
  let age = 30;
  let phone = "123456789";
  let email = "123456789";

  return (
    <Usecontext.Provider value={{name,age,phone,email}}>
      {children}
    </Usecontext.Provider>
  );
};

export default UsecontextProvider;