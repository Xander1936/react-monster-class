import React, { useReducer, useState, useEffect, createContext, useRef } from "react";
import "./index.css";
// in the terminal: npm install react-icons --save
import { FaCartArrowDown } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Add from "./components/Add.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import JSXRules from "./components/JSXRules.jsx";
import Greeting from "./components/Greeting.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import Lists from "./components/Lists.jsx";
import UserList from "./components/UserList.jsx";
import ProductList from "./components/ProductList.jsx";
import User from "./components/User.jsx";
import Person from "./components/Person.jsx";
import Product from "./components/Product.jsx";
import Card from "./components/Card.jsx";
import Password from "./components/Password.jsx";
import Cart from "./components/Cart.jsx";
import Weather from "./components/Weather.jsx";
import UserStatus from "./components/UserStatus.jsx";
import Styling from "./components/Styling.jsx";
import StyleCard from "./components/StyleCard.jsx";
import ProfileCard from "./components/ProfileCard";
// in the terminal type: npm install react-icons
import IconComponent from "./components/IconComponent";
import ComponentOne from './components/ComponentOne.jsx';
import ComponentTwo from './components/ComponentTwo.jsx';
// import ExampleOne from './components/ExampleOne.jsx';
// import ExampleTwo from './components/ExampleTwo.jsx';
// import ExampleThree from './components/ExampleThree.jsx';
import TodoList from './components/TodoList.jsx';
import Profile from './components/Profile.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import CopyInput from './components/CopyInput.jsx';
import Switcher from './components/Switcher.jsx';
import Test from './components/Test.jsx';
import BasicEffect from './components/BasicEffect.jsx';
import CounterEffect from './components/CounterEffect.jsx';
import FetchDataEffect from './components/FetchDataEffect.jsx';
import ComponentA from './components/Prop Drilling/ComponentA.jsx';
import { UserProvider } from "./components/UseContext/UserContext.jsx";
import UserProfile from "./components/UseContext/UserProfile.jsx";
import UpdateUser from "./components/UseContext/UpdateUser.jsx";
import Counter from "./components/UseReducer/Counter.jsx";
import FocusInput from "./components/useRef/FocusInput.jsx";
import Timer from "./components/useRef/Timer.jsx";



const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 10))
  return (
    <button 
      onClick={handleClick}
    >
      Click
    </button>
  );
};

const Copy = () => {
  const copyHandler = () => {
    console.log("Stop stealing my content.");
  };

  return (
    <p onCopy={copyHandler}>
      This is the replacement text of Lorem Ipsum 30 and many more text from the ages. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione dolorem eos, doloribus natus minima quis? Reiciendis et doloremque maiores error rerum, ratione blanditiis libero, sunt sequi necessitatibus accusantium, perspiciatis saepe!
    </p>
  );
}

const Move = () => {
  function moveHandler() {
    alert('Mouse move event fired !');
    console.log("Mouse move event fired now !");
  }

  return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptates eaque facilis culpa magni nostrum quo dolorem fugit obcaecati facere.
    </p>
  );
}

export const Data = createContext();

export const Data1 = createContext();

// useReducer
const initialState = {count: 0};

// state: what we are updating | action: how we are going to update it.
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, count:state.count + 1};

    case "decrement":
      return {...state, count:state.count - 1};

    case "reset":
      return {...state, count: 0};
  
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const [friends, setFriends] = useState(["Alex", "John", "Messi"]);
  const addOneFriend = () => setFriends([...friends, "HuXn WebDev", "CR7", "Ronaldinho"]);
  const removeFriend = () => setFriends(friends.filter((f) => f != "John" && f != "CR7"));
  
  const updateOneFriend = () => {
    setFriends(friends.map(f => f === 'Alex' ? 'Alex Smith' : f));
  }

  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });

  // const handleClick = () => setMovie({...movie, ratings: 5});
  //   // const copyMovie = {
  //   //   ...movie,
  //   //   ratings: 5
  //   // };

  const [movies, setMovies] = useState([
    {id: 1, title: 'Spider Man', ratings: 3},
    {id: 2, title: 'Superman', ratings: 6},
  ])

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? {...movies, title: "John Wick 5"} : m))
    );
  }

  // Context API
  const name = "Messi";
  const age = 22;

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // useRef
  const inputElement = useRef(null);

  // console.log(inputElement);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Xander";
  }

  // Fetching Data with useEffect : Custom Hooks
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setData(json));
  },[]);

  return(
    <div>
      <Header />
      <Main />
      <Footer />
      <Add />
      <WelcomeMessage />
      <JSXRules />
      <ProductInfo />
      <Lists />
      <UserList />
      <ProductList />
      {/* Calling the Props in the parent Component from the child Component <User />  */}
      <User
        img="../src/assets/alex.jpg" 
        name="Alexandre Massoda" 
        age={38}
        isMarried={false}
        hobbies="Reading"
      />
      <Person 
        name="Messi"
        age={38} 
      />
      <Product
        name="Iphone"
        price={30000}
      />
      <div>
        <Card>
          <h1>My Card 1</h1>
          <p>This is some content for card 1.</p>
        </Card>
        <Card>
          <h1>My Card 2</h1>
          <p>This is some content for card 2.</p>
        </Card>
        <Card>
          <h1>My Card 3</h1>
          <p>This is some content for card 3.</p>
        </Card> 
      </div>
      <section>
        <Password isValid={true} />
      </section>
      <Cart />
      <Weather />
      <UserStatus loggedIn={true} isAdmin={false} />
      <Greeting timeOfDay="morning" />
      <section>
        <h1>Separate File For Styling</h1>
        {/* <FaCartArrowDown />
        <FaComputer /> */}
      </section>
      <Styling />
      <StyleCard />
      <ProfileCard />
      <IconComponent />
      <section>
        <Copy />
        <Button />
        <Move />
      </section>
      <section>
        <h1> {count} </h1>
        <button onClick={increment} >+</button>
        <button onClick={decrement} >-</button>
        {friends.map((f) => (
          <li key={Math.random()}>{f}</li>
        ))}
        <button onClick={addOneFriend}>Add New Friend</button>
        <button onClick={removeFriend}>Remove One Friend</button>
        <button onClick={updateOneFriend}>Update One Friend</button>

      </section>
      {/* <section>
        <h1>Title: {movie.title}</h1>
        <h1>Ratings: {movie.ratings}</h1>
        <button onClick={handleClick}>Change Rating</button>
      </section> */}
      <section>
        {movies.map(m => (
          <li key={Math.random()}>{m.title}</li>
        ))}

        <button onClick={handleClick}>Change Name</button>
      </section>
      <section>
        <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
        <ComponentTwo count={count} onClickHandler={() => setCount(count - 1)} />
      </section>
      {/* <section>
        <ExampleOne />
        <ExampleTwo />
        <ExampleThree />
      </section> */}
      <section>
        <TodoList />
      </section>
      <section>
        <Profile />
      </section>
      <section>
        <ShoppingList />
        <CopyInput />
      </section>
      <section>
        <Switcher />
        <Test />
      </section>
      <section>
        <BasicEffect />
        <CounterEffect />
        <FetchDataEffect />
      </section>
      <section>
        <Data.Provider value={name} >
          <Data1.Provider value={age} >
              <ComponentA />
          </Data1.Provider>
        </Data.Provider>
      </section>
      <section>
        <UserProvider>
          <UserProfile />
          <UpdateUser />
        </UserProvider>
        <div>
          <h1>useReducer Situations with this Count example: {state.count}. </h1>
          <button onClick={() => dispatch({ type: "decrement"})} >-</button>
          <button onClick={() => dispatch({ type: "reset"})} >reset</button>
          <button onClick={() => dispatch({ type: "increment"})} >+</button>
        </div>
      </section>
      <section>
        <Counter />
      </section>
      <section>
        <input type="text" ref={inputElement} />

        <button onClick={() => focusInput()}>Focus & Write Xander</button>
      </section>

      <section>
        <FocusInput />
        <Timer />
      </section>
      <section>
        {data && data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      </section>
    </div>
  );
};

export default App;