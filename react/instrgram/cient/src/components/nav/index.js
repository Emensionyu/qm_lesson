import React from 'react';
import { Menu,Dropdown,notification} from 'antd';
import {Link} from 'react-router-dom';
import Style from './index.scss'

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            toggle:true,
            focusStatus:false,
            search:''
        }
    }
    focusSearchInput(){
        this.setState({
            'focusStatus':!this.state.focusStatus
        })
    }
    focusSearchInput(){
        this.setState({
            'focusStatus':!this.state.focusStatus
        })
    }
    handleChange(){
        this.setState({
           search:event.target.value
        })
    }
    searchContent=(e)=>{
        if(e.key==='Enter'){
            console.log('search api')
        }
    }
    render(){
        const aboutMenu=(
            <Menu>
                <Menu.Item>关于我</Menu.Item>
                <Menu.Item>退出登入</Menu.Item>
            </Menu>
        );
        return(
        
            <nav className={Style['page-header']}>
                <div className={`${Style['header']} ${Style['toggle']}`}>
                    <div className={Style['logo-space']} >
                    {
                        this.state.toggle?
                        <Link className={Style['instagram']} to={'/'}/>
                        :
                        <Link className={Style['icon']} to={'/'}/>
                    }

                    </div>
                    <div className={Style['search']} >
                    {
                   
                        this.state.focusStatus?
                        <div className={Style['search-content']}>
                            <input type='text' className={Style['search-input']} placeholder="搜索" autoFocus={this.state.focusStatus} 
                            onChange={this.handleChange.bind(this)}
                            onBlur={this.focusSearchInput.bind(this)}
                            onKeyPress={this.searchContent}/>
                            <span className={Style['icon']}></span>
                        </div>
                        :
                      
                            <div className={Style['search-block']} onClick={this.focusSearchInput.bind(this)}>
                                <span className={Style['block-icon']}></span>
                                <span className={Style['block-text']}>搜索</span>
                            </div>
                       
                    }
                     </div>
                   

                   
                    <div className={Style['navigate']}>
                    <Link className={Style['expore']} to={'/'}/>
                    <Link className={Style['love']} to={'/'}/>
                    <Dropdown overlay={aboutMenu}>
                        <Link to={'/about'} className={Style['user']}></Link>
                    </Dropdown>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav;
