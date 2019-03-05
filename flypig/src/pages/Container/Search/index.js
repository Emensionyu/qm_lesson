import React from 'react';
import '@scss/base.scss';
import Style from  './index.scss'
import{Icon} from 'antd'
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
@connect(
  store => {
      return {
          historyorder: store.historyOrder
      }
  },
  dispatch => {
      return {
        addhistoryOrder: order => {
              dispatch({
                  type: 'ADD_HISTORY',
                  order
              })
          }
      };
  }
)
//es7装饰器
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle: true,
            focusStatus: false,
            search: '',
            pannelon:false
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
    changePannelon=()=>{
      this.setState({
        pannelon:true
      })
    }
    changePanneloff=()=>{
      this.setState({
        pannelon:false
      })
    }
    render(){
     
  return(
    <div className={Style.search}>
      <div className={Style.fpsearch}>
        <input className="fp-input"  
        onChange={this.handelChange.bind(this)}
        onKeyPress={this.searchContent}
        placeholder={this.props.placeholder}
        onFocus={this.changePannelon}
        onBlur={this.changePanneloff}
        
        />
           <span className="fp-span" 
           onClick={this.searchContent}
            >
            <Icon class="icon" type="search"></Icon>
            搜索
           </span>
           
      </div>
      {
      this.state.pannelon?
      <div className={Style.historyOrder}>
          <div className="describe">
          <Icon type="clock-circle"></Icon>
        <span className="order-search">搜索历史</span>
         
          </div>
          <div className="orders">
          <div className="order-item">杭州</div>
          <div className="order-item">清空</div>
          </div>
      </div>
      :
      <div></div>
      }
      
    

    </div>
    
             
        )
  
    }
    componentDidMount(){
      // if(!this.props.historyOrder.order){
        

      // }
    }
    
}
export default  withRouter(Search);