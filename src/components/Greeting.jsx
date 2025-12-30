import React from 'react';


const Greeting = ({timeOfDay}) => {
  return timeOfDay === "morning" ? (
    <h1>Good Morning!</h1>
  ) : (
    <h1>Good afternoon.</h1>
  );
  
  // const Name = "Alex";
  // const todayDate = new Date();

  // return (
  //   <div>
  //     <h1>My Name is: {Name}.</h1>
  //     <p>Today is : {todayDate.getDate()}.</p>
  //   </div>
  // );
}

export default Greeting;