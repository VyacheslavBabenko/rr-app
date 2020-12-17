import React from "react";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";

const RoutesTable = ({ styles }) => {
  const routes = useSelector(state => state.routes.routes);

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr style={styles}>
            <th scope="col">Route</th>
            <th scope="col">Title</th>
            <th scope="col">Nodes</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {routes.map(r => (
            <TableRow route={r} key={r.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoutesTable;
