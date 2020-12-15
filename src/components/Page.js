import React from "react";
import Header from "./Header";
import RouteForm from "./RouteForm";
import RoutesTable from "./RoutesTable";

export default function Page() {
  return (
    <div>
      <Header />
      <RouteForm />
      <RoutesTable />
    </div>
  );
}
