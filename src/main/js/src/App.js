import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/example')
        .then(response => response.text()).then(message=> setMessage(message))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{message}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
