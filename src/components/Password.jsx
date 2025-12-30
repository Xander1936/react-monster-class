import React from 'react'
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({isValid}) => {
//   if(isValid){
//     return <ValidPassword />; 
//   }
//   return <InvalidPassword />;
// Replacing Conditional Rendering here with Ternary Operators 
return isValid ? <ValidPassword /> : <InvalidPassword />;
};


export default Password;
