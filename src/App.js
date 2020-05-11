import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";

const App = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      // await Auth.currentSession();
      // userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  return (
    <>
      <div className="App container">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Nav.Link href="/">Foliogen</Nav.Link>
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            {isAuthenticated ? (
              <>
                <Nav.Item>
                  <Nav.Link href="/logout">logout</Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <Nav.Link href="/login">login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/login">sign up</Nav.Link>
                </Nav.Item>
              </>
            )}
          </Navbar.Collapse>

          <Nav className="justify-content-end" activeKey="/home" />
        </Navbar>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
        <Routes />
      </div>
    </>
  );
};

export default App;
