import React from 'react';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
// import Notice from './pages/Notice/notice.js'
import { Menu, Dropdown, Icon } from 'antd';

import '@scss/base.scss';
import Style from './index.scss'
import Dropdownmenu from '@components/Dropdownmenu'

function Notice(){
    return (<div className={Style.notice}>【公告】文化和旅游部提示广大游客涉水有风险，参与需谨慎</div>
    )
}
class Flypig extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSignUp:true,
            visible:false,
            hover1:false,
            hover2:false,
            hover3:false,
            hover4:false,
            hover5:false
        }
    }
    onMouseEnter(index){
       if(index==1)
        this.setState({
           hover1:true
        });
        else if(index==2)
        this.setState({
            hover2:true
         });
         else if(index==3)
        this.setState({
            hover3:true
         });
         else if(index==4)
        this.setState({
            hover4:true
         });
         else
         this.setState({
            hover5:true
         });
    }
    
    onMouseLeave(index){
        
        if(index==1)
        this.setState({
           hover1:false
        });
        else if(index==2)
        this.setState({
            hover2:false
         });
         else if(index==3)
        this.setState({
            hover3:false
         });
         else if(index==4)
        this.setState({
            hover4:false
         });
         else
         this.setState({
            hover5:false
         });
    }
   
    render(){
        const { isSignUp }=this.state;
        const imghome=require('@assets/image/home.png');
        const qrcode=require('@assets/image/qrcode.png')
        const menu = (
            <Menu>
                 <Menu.Item>
                 <img src={qrcode} alt="" className="qrcode"/>   
                 </Menu.Item>
                
            </Menu>
            );
            const taobaomenu = (
                <Menu>
                   <Menu.Item>
                        <a target="_blank" className="menu-a" rel="noopener noreferrer" href="http://www.alipay.com/">已买到的宝贝</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a target="_blank" className="menu-a" rel="noopener noreferrer" href="http://www.alipay.com/">我的足迹</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a target="_blank" className="menu-a" rel="noopener noreferrer" href="http://www.alipay.com/">飞猪旅行达人</a>
                    </Menu.Item>
                </Menu>
                );
            
        return(
        <div>{isSignUp&&<Notice/>}
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
            <Dropdownmenu  title="手机客户端" to="/mobile"
                hover={this.state.hover1}  
                onMouseEnter={this.onMouseEnter.bind(this,1)}
                onMouseLeave={this.onMouseLeave.bind(this,1)}
                 menu={menu}/>
            <Dropdownmenu   title="我的淘宝"  to="/taobao"
                hover={this.state.hover2} 
                menu={taobaomenu}
                onMouseEnter={this.onMouseEnter.bind(this,2)}
                onMouseLeave={this.onMouseLeave.bind(this,2)}/>
            <Link className="nav-link" to="/carts">购物车</Link>  
            <Dropdownmenu   title="收藏夹"  to="/collection"
                hover={this.state.hover3} 
                menu={menu}
                onMouseEnter={this.onMouseEnter.bind(this,3)}
                onMouseLeave={this.onMouseLeave.bind(this,3)}/>     
             <Link className="nav-link" to="/carts">服务中心</Link>  
             <Dropdownmenu   title="商家中心"  to="/collection"
                hover={this.state.hover4} 
                menu={menu}
                onMouseEnter={this.onMouseEnter.bind(this,4)}
                onMouseLeave={this.onMouseLeave.bind(this,4)}/>    
            <Link className="nav-link" to="/carts">淘宝</Link>
            <Dropdownmenu   title="网站导航"  to="/nets"
                hover={this.state.hover5} 
                menu={menu}
                onMouseEnter={this.onMouseEnter.bind(this,5)}
                onMouseLeave={this.onMouseLeave.bind(this,5)}/> 
            
               
            
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