import './App.css';
import { Form, Col, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';


function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('countries.json', {
      "headers": {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json())
      .then((data) => {
        setCountries([...data])
        console.log(data)
      })
  }, []);

  const services = ["First Service", "Second Service", "Third Service", "Fourth Service"];
  return (
    <div className="App">
      <h1 className="title">Inscription form</h1>
      <Form className="container">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required minlength="6" type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Insert your adress name" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Type of service: </Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            {services.map((e) => (
              <option className="services">
                {e}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Country</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              {countries.map((country, index) => (
                <option
                  key={index}
                  value={country.name}
                >
                  {country.name}

                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control required />
          </Form.Group>
        </Form.Row>

        <button className="btn" type="submit">Submit</button>
        {/* <Button className="btn" variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
    </div>
  );
}



export default App;
