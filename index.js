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


ReactDOM.render(
<App3
  />,
  document.getElementById("root")
)