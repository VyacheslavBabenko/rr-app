import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createRoute, showAlert } from "../redux/actions";
import { Alert } from "./Alert";

export const RouteForm = ({ styles }) => {
  const pathname = window.location.pathname;
  const [form, setForm] = useState({
    title: "",
    route: ""
  });

  const dispatch = useDispatch();
  const alert = useSelector(state => state.app.alert);

  const submitHandler = event => {
    event.preventDefault();

    const { title } = form;
    const { route } = form;

    if (!title.trim() || !route.trim()) {
      return dispatch(showAlert("Заполните все поля."));
    }

    const newRoute = {
      title,
      route: pathname + "/" + deleteSlash(route),
      nodes: 0,
      id: Date.now().toString()
    };

    dispatch(createRoute(newRoute));

    setForm({
      title: "",
      route: ""
    });
  };

  const deleteSlash = str => {
    return str.replace("/", "");
  };

  const changeInputHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          {alert && <Alert text={alert} />}
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="route">Route</label>
              <input
                type="text"
                className="form-control"
                id="route"
                value={form.route}
                name="route"
                onChange={changeInputHandler}
              />
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={form.title}
                name="title"
                onChange={changeInputHandler}
              />
            </div>
            <button style={styles} className="btn" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RouteForm;
