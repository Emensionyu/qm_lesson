import React,{ Component} from 'react';
import './App.css';
import Main from './Main'
import {HashRouter as Router,Route} from 'react-router-dom';

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Main}/>
                    <Route  path="/dashboard/monitor" component={Main}/> 
                </div>

            </Router>
            
        )
    }
}
export default App