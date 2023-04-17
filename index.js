import React from 'react';
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






ReactDOM.render(
<App1
  />,
  document.getElementById("root")
)