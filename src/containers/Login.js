import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Amplify } from "aws-amplify";
import { useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";
import "../Login.css";

const Login = () => {
  // const history = useHistory();
  // const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });
  const validateForm = () => {
    return fields.email.length > 0 && fields.password.length > 0;
  };
  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      // await Auth.signIn(email, password);
      // userHasAuthenticated(true);
      // history.push("/");
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={fields.password}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <LoaderButton
            block
            type="submit"
            bsSize="large"
            isLoading={isLoading}
            disabled={!validateForm()}
          >
            Login
          </LoaderButton>
        </Form>
      </div>
    </>
  );
};

export default Login;
