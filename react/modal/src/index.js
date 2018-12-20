import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


function NotMatchExample(){
    return(
        <Router>
            <div>
            <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/old-match">Old Match, to be redirected</Link>
          </li>
          <li>
            <Link to="/will-match">Will Match</Link>
          </li>
          <li>
            <Link to="/will-not-match">Will Not Match</Link>
          </li>
          <li>
            <Link to="/also/will/not/match">Also Will Not Match</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Redirect from="/old-match" to="/will-match" />
          <Route path="/will-match" component={WillMatch}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>

    )

}
const Home = () => (
    <div>Home</div>
  );
  const WillMatch = () => (
    <div>WillMatch</div>
  );
  const NoMatch = ({location}) => {
    return (
      <div>
        <h3>404: No match for <code>{location.pathname}</code></h3>
      </div>
    )
  }
  



ReactDOM.render(< NotMatchExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
