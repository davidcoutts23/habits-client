import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { login } from "../services/AuthService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        setLoginFailed(true);
      });
  };

  const AlertDialog = () => {
    if (loginFailed) {
      return (
        <Alert
          variant="danger"
          onClose={() => setLoginFailed(false)}
          dismissible
        >
          <Alert.Heading>Login failed</Alert.Heading>
          <p>
            Please check your email and password and try again.
          </p>
        </Alert>
      );
    }
    else return <div></div>
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-4">
        <Form className="mb-2" onSubmit={handleSubmit}>
          <Form.Group role="form">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="mt-2" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
        <AlertDialog/>
      </div>
    </div>
  );
}
