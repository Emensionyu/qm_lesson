import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Link,Prompt } from 'react-router-dom';

function PreventingTransitionExample () {
  return (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Form</Link>
                </li>
                <li>
                    <Link to="/one">One</Link>
                </li>
                <li>
                    <Link to="/two">Two</Link>
                </li>
            </ul>
         <Route path="/" exact component={Form}/>
         <Route path="/one" exact component={One}/>
         <Route path="/two" exact component={Two}/>
         {/* //路由对应组建的显示区域 切换路由时prompt功能json函数 */}
        </div>



     
    </Router>
  );
}

const One=()=>{
    return(
        <div>One

    </div>

    )
    
}
const Two=()=>{
    return(
        <div>Two</div>

    )
    
}

class Form extends React.Component {
  state = { isBlocking: false }
  componentWillUnmount(){
      console.log('unmount');
  }//组件卸载的时候
  render () {
      let { isBlocking}=this.state
    return (
      <form 
      onSubmit={event => {
        event.preventDefault();
        event.target.reset();
        this.setState({
            isBlocking:false
        })
      }}>
      <Prompt 
        when={this.state.isBlocking}
        message={ location=>`Are you sure you want to go to ${location.pathname}`}
        
        
        />
        <p>
          <input type="text" size="50" 
          placeholder="type somthing to broke transitions"
          onChange={
            event => {
                // console.log( event.target);
              this.setState({
                isBlocking: event.target.value.trim().length > 0
              })
            }
          }
          />
        </p>
        <p>
          <button type="submit">Submit to stop blocking</button>
        </p>
      </form>
    )
    
  }
}

ReactDOM.render ( <PreventingTransitionExample />, document.getElementById('root'))
