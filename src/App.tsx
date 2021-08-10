import './App.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Register from "./Register";
// import {LoginPage} from './LoginPage';

function App() {
  return (
    <div className="app">
      <Router>
      <Switch>
          {/* <Route path="/login" component={LoginPage}></Route>  */}
          <Route path="/register" component={Register}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
