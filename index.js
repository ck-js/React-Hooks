import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App1 extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="container">
        <h1>React Hooks</h1>
      </div>
    )
  }
}

const App2 = (props) => {
  const [textValue,textUpdate] =useState("");

  return (
    <div>
      <h2>An example...</h2>
      <label for="name">Whats your name?</label>
      <input 
      id="name"
      type="text"
      value={textValue}
      onChange={(e) => {
        textUpdate(e.target.value)
      }}
      placeholder="egDoe Cord"
      />
      <p>Powered by React Hooks</p>
    </div>
  )
}

const App3 = (props) => {
  const [count, updateCount] = useState(0);
  const handleClick = () => {
    updateCount(count + 1);
  }
  return (
    <div>
      <h1>I am a functional component with a use state </h1>
      <p>I have been clicked {count} too many times</p>
      <button
      onClick={handleClick}>
        Anger
      </button>
    </div>
  )
}

const App4 = () => {
  const [userName, updateUserName] = useState("");
  return (
    <div>
      <h1>Enter Username</h1>
      <p>Username</p>
      <input
      type="text"
      placeholder="Username"
      value={userName}
      onChange={(e) => 
      updateUserName(e.target.value)
    }
    />
    <p>{userName} is already taken</p>
    </div>
  )
}

const App5 = () => {
  var items = [
    {id:"1111A", text: "T Shirt"}
  ]

  return (
    <div>
    <h2>Your Cart</h2>
    <p>Your cart contains the following items</p>
    <ul>
      { items.map(item =>{return < li
      key={item.id}>{item.text}</li>})
      }</ul>  
    </div>
  )
}

const App6 = () => {
  const [clicked, toggleClick] = useState(false);
  let text = "I want to be clicked, so click me";
  if (clicked) 
    text= "I am done being clicked, unclick me";

    return (
      <button onClick={() => {toggleClick(!clicked)}}>
        {text}
      </button>
    )
}


ReactDOM.render(
<App6
  />,
  document.getElementById("root")
)