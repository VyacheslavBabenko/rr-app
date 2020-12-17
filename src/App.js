import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Page from "./components/Page";

function App() {
  const routes = useSelector(state => state.routes.routes);
  return (
    <Router>
      {routes.map(r => (
        <Route exact path={r.route} component={Page} key={r.id} />
      ))}
    </Router>
  );
}

export default App;
