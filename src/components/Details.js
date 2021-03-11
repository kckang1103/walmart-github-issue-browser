import React from "react";
import { JsonToTable } from "react-json-to-table";
import "../App.css";

const Details = ({ issue }) => {
  return <JsonToTable json={issue} class="jsonTable" />;
};

export default Details;
