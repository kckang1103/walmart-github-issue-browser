import React from "react";
import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import logo from "../walmartLogo.png";

const MainHeader = ({ setSearchTerm, text }) => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <img src={logo} width="200" height="50" className="walmartLogo" />
          <span className="navText">{text}</span>
        </Navbar.Brand>
        <Form inline className="ml-auto">
          <FormControl
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <Button variant="outline-info" bsClass="custom-btn">
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default MainHeader;
