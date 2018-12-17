import React from 'react';
import ReactDOM from 'react-dom';
import './index.styl';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Pouter,Link,withRouter } from 'react-router-dom'
function AuthExample(){
    return(
        <Router>
            <div>
                <AuthButton/>
            </div>

        </Router>
    )

}
@withRouter
class AuthButton extends React.Component{
    render(){
        const {history}=this.props;
        return (
            true?(<p>
                welcome!
                <button onClick={()=>{
                    // 退出？送到"/"首页
                    history.push("/");
                }}>Sign Out!</button>
            </p>)
           :(<p>You are not logged in.</p>) 

        )
    }
}

// const AuthButton=({history })=>(
   
// );
ReactDOM.render(<AuthExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
