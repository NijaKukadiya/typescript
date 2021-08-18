import './App.css';
import {Switch, Route, Redirect, Router} from 'react-router-dom';
import Register from "./Registration/Register";
import Login from './Login/Login';
import { history } from './helper';
import { HomePage } from './HomePage';
// import { PrivateRoute } from './helper';
import {AddData} from "./HomePage";

function App() {
  return (
    
      
    <div>
      <Router history={history}>
      
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/add_data" component={AddData} />
              <Route exact path="/" component={HomePage} />
              <Redirect from ="*" to="/" />
            </Switch>
        
      </Router>
    </div>
  );
}

export default App;
