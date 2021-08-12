import './App.css';
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import Register from "./component/Register";
import Login from './component/Login';
// import { history } from './helper';
import Home from './component/Home';



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/login" component={Login}></Route> 
          <Route path="/register" component={Register}></Route>
          <Route path="/" component={Home}></Route>
          <Redirect from ="*" to="/" />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
