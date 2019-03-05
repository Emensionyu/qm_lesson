import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import Notice from './pages/Notice/notice.js'
import '@scss/base.scss';
import Style from './index.scss'
import { Input,Icon } from 'antd';
import Search from './Search/index.js'
import { withRouter } from 'react-router';
const suffix=<p><Icon  type="search"></Icon>搜索</p>
class Container extends React.Component{
constructor(props){
  super(props);
  this.state={
    selected:true,
    selected2:false

  }
}
handelChange (event) {
  this.setState({
    search: event.target.value
  })
}
select(){
  console.log();
  let selected=this.state.selected;
  if(selected){
    this.setState({
      selected:true,
      selected2:false
    })
  }else{
    this.setState({
      selected:true,
      selected2:false
    })
  

  }
 
}
select2(){
  let selected2=this.state.selected2;
  if(!selected2){
    this.setState({
      selected:false,
      selected2:true
    })
  }else{
    this.setState({
      selected:false,
      selected2:true
    })

  }
      
}
    render(){
     
        const pigimg=require('@assets/image/pigavatar.png')
        return(
        <div>
          <div className={Style.container}>
            <div className="flypig-icon">
            <img src={pigimg} alt=""/>
            </div>
            <div className="searchbar">
              <div className="selectitem">
                <div className={`categora-name ${this.state.selected &&'selected'}`} 
                onClick={this.select.bind(this)}>
                        宝贝
                    </div>
                    <div className={`categora-name ${this.state.selected2 &&'selected'}`}
                     onClick={this.select2.bind(this)}>
                        店铺
                  </div>
              </div>
              <Search 
              placeholder={`${this.state.selected?'目的地/酒店/景点/签证等':''}`}
              />
            </div>
            <div className="concatways">
                <span>消费者热线(国内)9510208</span>
                <span>400-1688-688</span>
                <span>消费者热线(国际)+86-571-56888688</span>
            </div>
          </div>
        </div>

            
        )
    }
    
}
export default withRouter(Container);