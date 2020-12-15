import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Header.scss";

export default function Header() {
  const routes = useSelector(state => state.routes.routes);
  const history = useHistory();

  const getTitle = () => {
    let location = history.location.pathname;
    let title = routes.find(el => el.route === location).title;
    return title;
  };

  const goToMain = () => {
    history.push("/main");
  };

  return (
    <header>
      <div className="container">
        <h1> {getTitle()} </h1>
        <button onClick={goToMain} type="button" className="btn btn-primary">
          Перейти к родительскому узлу
        </button>
      </div>
    </header>
  );
}
