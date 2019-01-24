import React from 'react';
import  Detail from './detail/index'
import Login from './login/index.js'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import '@scss/base.scss';
import './index.scss'


class Instagram extends React.Component{
    render(){
        return(
          <Router>
              <Switch>
                  <Route exact path="/" component={Detail}></Route>
                  <Route path="/login" component={Login} />
              </Switch>
          </Router>
            
        )
    }
    
}
export default Instagram;