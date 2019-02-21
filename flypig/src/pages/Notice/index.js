import React from 'react';
import Style from './index.scss'


class Notice extends React.Component{
    render(){
        return (<div className={Style.notice}>
        【公告】文化和旅游部提示广大游客涉水有风险，参与需谨慎
        </div>
            )
    }
    
}
export default Notice;