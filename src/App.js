import "./App.css";
import React, { useState, useEffect } from "react";
import MainHeader from "./components/MainHeader";
import Page from "./components/Page";
import Pagination from "./components/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

const organization = "walmartlabs";
const repo = "thorax"
const url = "https://api.github.com/repos/" + organization + "/" + repo + "/issues";

const App = () => {
  const [issues, setIssues] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage] = useState(10);
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  //Get all the issues using fetch
  useEffect(() => {
    const getIssues = async () => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setIssues(json);
          setLoaded(true);
        });
    };
    getIssues();
  }, []);

  //Get currentIssues for the current page
  const indexLastIssue = currentPage * issuesPerPage;
  const indexFirstIssue = indexLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexFirstIssue, indexLastIssue);

  //Change page when clicked
  const changePage = (pageNumber) => setCurrentPage(pageNumber);

  //Show details when clicked
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Set number of current issues to display

  console.log(issues.length);

  return (
    <div className="app">
      <header className="header">
        <MainHeader
          setSearchTerm={setSearchTerm}
          text={" GitHub Issue Browser"}
          className="mainheader"
        />
      </header>
      <main className="Content">
        <Page
          searchTerm={searchTerm}
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          issues={currentIssues}
          isLoaded={isLoaded}
        />
      </main>
      <Pagination
        changePage={changePage}
        issues={issues}
        issuesPerPage={issuesPerPage}
      />
    </div>
  );
};

export default App;
