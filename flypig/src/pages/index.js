import React from 'react';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
// import Notice from './pages/Notice/notice.js'
import { Menu, Dropdown, Icon } from 'antd';

import '@scss/base.scss';
import Style from './index.scss'

function Notice(){
    return (<div className={Style.notice}>【公告】文化和旅游部提示广大游客涉水有风险，参与需谨慎</div>
    )
}
class Flypig extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSignUp:true,
            visible:false
        }

    }
    render(){
        const { isSignUp }=this.state;
        const imghome=require('@assets/image/home.png');
        const menu = (
            <Menu>
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
            );
            
        return(
        <div>
            {
               isSignUp&&<Notice/>

            }
         <Router>
        <div className="header">
       
            <div className="nav-left">
                <div className="navBar">
                    <img src={imghome} alt=""/>
                    <Link className="nav-link" to="/">飞猪</Link>
                </div>
                <div className="nav-hint">Hi，最近想去哪里玩？</div>
                    <Link className="nav-link" to="/login">请登录</Link>
                    <Link className="nav-link" to="/register">免费注册</Link>
            </div>
            <div className="nav-right">
                <Dropdown overlay={menu} placement="bottomCenter"  >
                    <div className="nav-item">
                    <Link className="nav-link" to="/mobile">
                    手机客户端 
                    </Link> 
                    
                    </div>
                  
                </Dropdown><Icon type="down" className="icon-rotate"/>
               

               
               
            
            </div>
        </div>

        </Router>
        
  
        </div>

            
        )
    }
    onVisibleChange=()=>{
        this.setState({
            visible:true
        })

        
    }
    
}
export default Flypig;