import './App.css';
import {Switch, Route, Redirect, Router} from 'react-router-dom';
import Register from "./Registration/Register";
import Login from './Login/Login';
import { history } from './helper';
import { HomePage } from './HomePage';
// import { PrivateRoute } from './helper';
import { Layout } from 'antd';

const {Content} = Layout;


function App() {
  return (
    
      
    <div className="App">
      <Router history={history}>
      <Layout>
          <Content>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route exact path="/" component={HomePage} />
              <Redirect from ="*" to="/" />
            </Switch>
          </Content>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
