import React from "react";
import "../App.css";
import Details from "./Details";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Page = ({
  searchTerm,
  show,
  handleClose,
  handleShow,
  issues,
  isLoaded,
}) => {
  if (!isLoaded) {
    return <header className="header">Loading...</header>;
  }

  //Filter searched results
  let filteredIssues = issues.filter((val) => {
    if (searchTerm == null || searchTerm == "") {
      return val;
    } else if (
      val.number.toString().includes(searchTerm) ||
      val.state.toLowerCase().includes(searchTerm) ||
      val.title.toLowerCase().includes(searchTerm)
    ) {
      return val;
    }
  });

  return (
    <ul>
      {filteredIssues.map((issue) => (
        <Card style={{ width: "50rem" }} className="Card">
          <Card.Body>
            <Card.Header style={{ width: "50rem" }} as="h4">
              Issue number: {issue.number}
            </Card.Header>
            <Card.Title>State: {issue.state}</Card.Title>
            <Card.Text>{issue.title}</Card.Text>
            <Button onClick={handleShow}>Show Details</Button>

            <Modal dialogClassName="my_modal" show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Details for issue {issue.number}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Details issue={issue} />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
};

export default Page;
