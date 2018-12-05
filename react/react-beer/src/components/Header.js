import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProTypes from 'prop-types';

class Header extends Component {
    static proTypes ={
        siteName:ProTypes.string

    }//组建类静态方法
    render () {
      return (
       <h1>
           {/* a将完全被接管， */}
           <Link to="/">{this.props.siteName}</Link>
           {/* <Link to='./beer'>详情页</Link> */}
         
        </h1>
      )
    }
  }
  
  export default Header;