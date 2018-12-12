import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import './index.css';
// import App from './App';
import Beer from './Beer';
import Single from './Single';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={Beer}/>
            <Route  path='/search/:searchTerm' component={Beer}/>
            <Route  path='/beer/:beerId/:beerSlug' component={Single}/>
        </div>
    </Router>
    , document.getElementById('root'));


serviceWorker.unregister();
