import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleLayout from "../Layouts/Single";
import { ROUTES } from "./constants";

function App() {
  return (
    <Router>
      <SingleLayout>
        <Switch>
          {ROUTES.map((route) => (
            <Route
              key={route.path}
              exact={route.path === "/"}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </SingleLayout>
    </Router>
  );
}

export default App;
