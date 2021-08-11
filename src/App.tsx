import './App.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Register from "./Register";
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/login" component={Login}></Route> 
          <Route path="/register" component={Register}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
