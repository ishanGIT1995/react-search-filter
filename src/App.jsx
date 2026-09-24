import { useState } from "react";
import "./App.css";
import { usersData } from "./data/usersData.jsx";
import Table from "react-bootstrap/Table";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>React Search Filter Demo Updated</h1>
      <br />
      <input
        type="search"
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          {usersData
            .filter((dataObj) => {
              // let dataLowerCase = data.
              let searchTermLowerCase = searchTerm.toLowerCase();
              let firstNameLowerCase = dataObj.first_name.toLowerCase();
              return firstNameLowerCase.includes(searchTermLowerCase);
            })
            .map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
