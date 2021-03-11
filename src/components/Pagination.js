import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Pagination = ({ changePage, issues, issuesPerPage }) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(issues.length / issuesPerPage); i++) {
    pageNums.push(i);
  }

  return (
    <nav class="paginator">
      <ul class="paginator-list">
        {pageNums.map((num) => (
          <li key={num.id}>
            <ButtonGroup className="mr-2">
              <Button
                onClick={() => changePage(num)}
                href="!#"
                variant="primary"
              >
                {num}
              </Button>
            </ButtonGroup>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
