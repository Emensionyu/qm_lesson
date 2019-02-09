import React, {Component} from 'react';
import Style from './index.scss'
import { Menu, Dropdown, Icon } from 'antd';
import { Link} from 'react-router-dom';
class Dropdownmenu extends Component{
    constructor(props){
        super(props)
        // this.state={
        //     hover:false
        // }
    }
    
    render () { 
        return (
            <div className="nav-right_item"   
                onMouseEnter={this.props.onMouseEnter}
                 onMouseLeave={this.props.onMouseLeave} >
                <Dropdown overlay={this.props.menu} placement="bottomLeft">
                    <div className={`nav-item ${this.props.hover&&'nav-item-bgc'}`}>
                    <Link className='nav-link' to={this.props.to}>
                    {this.props.title||'手机客户端'} 
                    </Link> 
                    <Icon type={`${this.props.hover?'down':'up'}`} className={`${this.props.hover?'icon-rotate-animation':'icon-rotate-animationed'}`} 
                    style={{ fontSize: '1px'}}/>
                    </div>
                </Dropdown>
                
                </div>
        )
    }
}
export default Dropdownmenu