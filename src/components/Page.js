import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import RouteForm from "./RouteForm";
import RoutesTable from "./RoutesTable";

const Page = () => {
  const routes = useSelector(state => state.routes.routes);
  const [styles, setStyles] = useState();

  useEffect(() => {
    changeColorTheme();
  }, [routes]);

  const changeColorTheme = () => {
    const pathname = window.location.pathname;

    routes.forEach(el => {
      if (el.route === pathname) {
        if (el.nodes === 0) {
          setStyles({ ...styles, backgroundColor: "#2787F5", color: "white" }); // vk
        } else if (el.nodes === 1) {
          setStyles({ ...styles, backgroundColor: "#43d854", color: "white" }); // whatsapp
        } else {
          setStyles({ ...styles, backgroundColor: "#fa7035", color: "white" }); // gitlab
        }
      }
    });
  };

  return (
    <div>
      <Header styles={styles} />
      <RouteForm styles={styles} />
      <RoutesTable styles={styles} />
    </div>
  );
};

export default Page;
