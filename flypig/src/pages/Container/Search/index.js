import React from 'react';
import '@scss/base.scss';
import Style from  './index.scss'
import{Icon} from 'antd'
import { withRouter } from 'react-router';
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle: true,
            focusStatus: false,
            search: ''
          }
    }
    focusSearchInput () {
      this.setState({
        'focusStatus': !this.state.focusStatus
      })
    }
  
    handelChange (event) {
      this.setState({
        search: event.target.value
      })
      console.log(this.state.search)
    }
  
    searchContent = (event) =>  {
      if (event.key === 'Enter') {
        this.props.history.push(`${this.state.search}`);
        console.log('search api');
      }
    }
    render(){
        return(
        <div className={Style.fpsearch}>
        <input className="fp-input" 
        autoFocus={this.state.focusStatus} 
        onChange={this.handelChange.bind(this)}
        onBlur={this.focusSearchInput.bind(this)}
        onKeyPress={this.searchContent}
        placeholder={this.props.placeholder}/>
           <span className="fp-span" 
           onClick={this.searchContent}
            >
               <Icon class="icon" type="search"></Icon>
               搜索
           </span>
        </div>

            
        )
    }
    
}
export default  withRouter(Search);