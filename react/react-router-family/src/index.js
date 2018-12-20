import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Link,Prompt,Redirect,withRouter } from 'react-router-dom';

// 鉴权
const fakeAuth={
    isAuthenticated:false,
    authenticate(cb){
        this.isAuthenticated=true;
        setTimeout(cb,1000);
    },
    signout(cb){
        this.isAuthenticated=false;
        setTimeout(cb,1000);
    }
}
function AuthExample(){
    return(
        <Router>
            <div>
                <AuthButton  /> 
                {/* 下面没加exact表示严格匹配  */}
                {/* <Route path="/" component={AuthButton}/> */}
                <ul>
                    <li>
                        <Link to="/public">public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected"> Protected Page</Link>
                    </li>
                </ul>
                <Route path="/public" component=
                {Public}/>
                 <Route path="/login" component=
                {Login}/>
                 <PrivateRoute path="/protected" component=
                {Protected}/>
            </div>
        </Router>
    )
}

function Public(){
    return <div>Public</div>
}
function Protected(){
    return <div>Protected</div>
}

function PrivateRoute({component:Component,...rest}){
    //合并
    return (
        <Route 
        {...rest}//解构
        render={
            props=>
            fakeAuth.isAuthenticated?(
                <Component/>
            ):
            <Redirect to={{
                pathname:"/login",
                state:{from:props.location}
                
            }}/>
        }

        
        />
    )
}
class Login extends React.Component{
    state={
        redirectToReference:false//组件值改变
    }
    login=()=>{
        fakeAuth.authenticate(()=>{
            this.setState({
                redirectToReference:true
            })
        })
       
    }
    render(){
        let { from }=this.props.location.state||{from :{
            pathname:"/"
        }};
        console.log(from);
        let redirectToReference=this.state.redirectToReference;
        if(redirectToReference)return  <Redirect to={from}/>
        return(
            <div>

                <p>You must log in to view  the page at{from.pathname}</p>
                <button onClick={this.login}> Login</button>
            </div>
            
        )
    }
}
//装饰 返回的不是简单组件而是一个单一功能的路由
const AuthButton=withRouter(({history})=>{
    return fakeAuth.isAuthenticated?(
     <p>Welcom!
         <button onClick={()=>{
             fakeAuth.signout(()=>{
                 //Redirect?
                 //js 并非jsx输出
                //  console.log()
                 history.push('/')



             });
         }}
         >Sign out</button>
    </p>
    ):(
        <p> Ypu are not logged in.</p>
     );
})
ReactDOM.render ( <AuthExample />, document.getElementById('root'))