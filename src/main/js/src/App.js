import logo from './logo.png';
import {useEffect, useState} from "react";
import {Container, Navbar} from "react-bootstrap";
import {Introduction} from "./components/Introduction.tsx";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/example')
        .then(response => response.text()).then(message=> setMessage(message))
  },[])

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" ><img
              src={logo}
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
          /></Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Introduction/>
      </Container>
    </div>
  );
}

export default App;
