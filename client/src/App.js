import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { PrivateRoute } from "./RouteGuard/PrivateRoute";
import { AdminPage } from './page/AdminPage';
import { LoginPage } from "./page/LoginPage";
export const App = () => {
  return (
    <Router>
      <div className="main-app">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/login" component={LoginPage}/>
          <PrivateRoute path="/admin" auth={false} component={AdminPage}/>
        </Switch>
      </div>
    </Router>
  );
};
