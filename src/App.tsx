import './App.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {RegisterPage} from "./RegisterPage";
import {LoginPage} from './LoginPage';

function App() {
  return (
    <div className="app">
      <Router>
      <Switch>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
