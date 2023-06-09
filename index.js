import React, {useState, useEffect} from 'react';
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

const App7 = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Boogle Forms</h1>
      <label for="answer">Whats the circumference of the earth
      <span>in kilometres?</span></label>
<input
type="text"
placeholder="Kilometres"
value={text}
onChange={(event)=> {
  setText(event.target.value)
}}
/>
    </div>
  )
}

const App8 = () => {
  const [color, setColor] = useState("black");

  return (
    <div>
    <h1>Boogle Forms</h1>
    <label for="answer" style={{color:color}}>
    Whats your favorite color?</label>
    <select
    id="answer"
    value={color}
    onChange={(event) => {
      setColor(event.target.value)
    }}
    >
      <option value="black">Black</option>
      <option value="gray">Gray</option>
      <option value="purple">Purple</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>

    </select>
    <p>You picked {color}</p>
    </div>
  )
}

// react useEffect basics 

const App9 = () => {
const [message, setMessage] = useState("");

useEffect= (() => {
  setTimeout(() => {
let setTo = message.length > 0
? ""
: "Get your copy here";
setMessage(setTo);    
  }, 100)
})

return (
  <div>
    <h2>New Sale</h2>
    <p>{message}</p>

  </div>
);

}

const App10 = () => {
  const [value, updateValue] = useState(0);
  const [multiplication, setMultiplication] = useState(0);
  const [ division, setDivision] = useState(0);

useEffect(() => {
  setMultiplication(value * 3);
})  
useEffect(() => {
  setDivision(value / 3)
})
return (
  <div>
    <h1>Multiply by 3</h1>
    <p>The answer is {multiplication}</p>
    <p>The answer is {division}</p>
    <input
    type="number"
    placeholder="Input number"
    value={value}
    onChange={(event) => {
      updateValue(event.target.value)
    }}
    />
    <input
    type="number"
    placeholder="Divide by 3"
    value={value}
    onChange={(event) => {
      updateValue(event.target.value)
    }}
/>
  </div>
)
}

const App11 = () => {
  const [ count, updateCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      updateCount(count + 25)
    }, 1000)
  });

  return (
    <div>
      <h1>One second counter</h1>
      <p>{count}</p>
    </div>
  )
}

const App12 = () => {
  const [first, setFirst] =useState("");
  const [second, setSecond] = useState("");
  const [multiplication, setMultiplication] =
  useState(null);
  useEffect(() => {
    if (multiplication ===null) setMultiplication(first
      * second)
  });

  return (
    <div>
      <h1>Multiply</h1>
      <input
      type="number"
      value={first}
      onChange={(event) => {
        setFirst(event.target.value)
        setMultiplication(null)
      }}
      />
      <input
      type="number"
      value={second}
      onChange={(event) => {
        setSecond(event.target.value)
        setMultiplication(null)
      }}
      />
      <p>You are multiplying {first} by {second}
      to get {multiplication}</p>
    </div>
  )
}

const App13 = () => {
  const [text, setText] =
  useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (text.length > 21) setError("Your answer is too long...");
    else setError(null)
  });

  return (
    <div>
      <h1>Life Lessons Quote</h1>
      <h2>In 21 characters or less, tell us your best life lesson quote</h2>
      <p>{text.length}/21</p>
      <input
      value={text}
      onChange={(event) => {
        setText(event.target.value)
      }}
      />
      {
        error &&
        <p>{error}</p>
      }
    </div>
  )

}

const App14 = () => {
  const [answer, setAnswer] = useState("Very Old School")

  useEffect(() => {
    document.getElementById("answer").innerText
    =
    answer;
  });

  return (
    <div>
      <h1>Book Genres </h1>
      <select
      value={answer}
      onChange={(event) => {
        setAnswer(event.target.value)
      }}
      >
        <option value="Very Old School">Classic</option> 
        <option value="smartly written">Detective</option>
        <option value="very magical">Fantasy</option>
        <option value="quite scary">Horror</option>
        <option value="Lovey Dovey">Romance</option>
      </select>
      <p>Your favorite genre is obviously 
        <strong id="answer"></strong>
      </p>
    </div>
  )
}

// useEffect advanced
  
const App15 = () => {
  const [currentTime, setCurrentTime] =
  useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      let d = new Date();
      setCurrentTime(d.toLocaleTimeString())
    }, 100);

    return () => {
clearInterval(timer);      
    }
  }, []);

return (
  <div>
    <h1>Current Local Time in Bangkok</h1>
    <h2>{currentTime}</h2>
  </div>
)
}

// use effect hooks with dependacy arrays

const App16 = () => {
  const [first, updateFirst] = useState("");
  const [second, updateSecond] = useState("");
  const [multiple, multiplier] = useState(0);

useEffect(() => {
  multiplier(first * second);
}, [first, second]);

return (
  <div>
    <h1>Multiplier Calculator</h1>
    <input
    type="number"
    value={first}
    onChange={(e) => {
 updateFirst(e.target.value)     
    }}
    />
    <p>Multiplied by...</p>
    <input
    type="number"
    value={second}
    onChange={(e) => {
      updateSecond(e.target.value)
    }}
    />
    <p>Equals</p>
    <h3>{multiple}</h3>
  </div>
)

}

const App17 = () => {
  const [time, setTime] = useState(0);
const [visible, isVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      setTime(d.toLocaleTimeString);
    }, 100);

return () => {
  clearInterval(interval);
}    
  }, [])

  return (
    <div>
    <h1>Time with clear interval method</h1>
    <h2>{time}</h2>
    {
      visible &&
      {App17}
    }
<button
onClick={() => {
  isVisible(!visible)
}}>Show / Hide </button>
</div>
  )
}


ReactDOM.render(
<App17
  />,
  document.getElementById("root")
)