import './App.css';
import {Switch, Route, Redirect, Router} from 'react-router-dom';
import Register from "./component/Register";
import Login from './component/Login';
import { history } from './helper';
import Home from './component/Home';
// import { PrivateRoute } from './helper';



function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Redirect from ="*" to="/" />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
