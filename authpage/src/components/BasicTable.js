// import React, { useMemo } from "react";
// import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
// import { COLUMNS } from "./columns";
import "./table.css";
import {useEffect } from "react";
import Table from "react-bootstrap/Table";

function StripedRowExample() {
  useEffect(() => {
    MOCK_DATA.forEach((obj) => {
      let table_body = document.getElementById("table-body");
      let row = document.createElement("tr");

      let c1 = document.createElement("td");
      let c2 = document.createElement("td");
      let c3 = document.createElement("td");
      let c4 = document.createElement("td");
      let c5 = document.createElement("td");
      let c6 = document.createElement("td");

      c1.innerText = obj.id;
      c2.innerText = obj.vaccine;
      c3.innerText = obj.description;
      c4.innerText = obj.duration;
      c5.innerText = obj.repeat;
      c6.innerHTML = `<input type='checkbox' ${
        obj.taken === "Yes" ? "checked" : ""
      }></input>`;

      row.appendChild(c1);
      row.appendChild(c2);
      row.appendChild(c3);
      row.appendChild(c4);
      row.appendChild(c5);
      row.appendChild(c6);

      table_body.appendChild(row);
    });
  }, []);

  return (
    <Table striped id="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Vaccine</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Repeat</th>
          <th>Taken</th>
        </tr>
      </thead>
      <tbody id="table-body"></tbody>
    </Table>
  );
}

export default StripedRowExample;
