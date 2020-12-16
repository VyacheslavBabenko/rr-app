import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteRoute } from "../redux/actions";

const TableRow = ({ route }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const toPage = () => {
    history.push(route.route);
  };

  const deleteUrl = routeToDelete => {
    dispatch(deleteRoute(routeToDelete));
  };

  return (
    <tr>
      <td>{route.route}</td>
      <td>{route.title}</td>
      <td>
        <button type="button" onClick={toPage} className="btn btn-link">
          Перейти
        </button>{" "}
      </td>
      <td>
        <button
          type="button"
          onClick={() => deleteUrl(route)}
          className="btn btn-danger"
        >
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
