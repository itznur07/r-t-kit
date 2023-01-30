import React from "react";
import { Link } from "react-router-dom";

const Person = ({ user, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/user/${user.id}`} className="btn btn-primary rounded">
          Details
        </Link>
      </td>
    </tr>
  );
};

export default Person;
