import React,{ Component} from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types'
import {connect} from '../../redux'
 class Body extends Component{
    render(){
        return(
            <div>
                <div className="body">{this.props.body}
                </div>
                <Button/>
            </div>
            
        )
    }
}
export default connect(Body);
// Body.contextType
