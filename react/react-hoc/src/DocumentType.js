import React,{ Component } from 'react';
import { Tag,Tooltip,Input,Icon,message } from 'antd';

export default class DocumentType extends Component{
    state={
        inputValue:'',
        inputVisible:false
    }
    componentDidMount(){
        this.setState({
            tags:this.props.tags
        })

    }
    input=React.createRef()

    render(){
        const {tags,selectedTags,plusBtnText,activeColor}=this.props;
        const { inputValue,inputVisible}=this.state;
        return(
            <div>
                {
                    tags.map((tag,index)=>{
                        const isLongTag=tag.length>10;
                        const isSelected=selectedTags.indexOf(tag)!==-1;
                        const tagElem=(
                            <Tag key={index}
                            color={isSelected?(activeColor?activeColor:"40a9ff"):''}
                            closable={index!=0}
                            onClick={()=>this.highlightTag(index)}
                            onClose={this.handleClose(index)}
                            >
                            {isLongTag?`${tag.slice(0,10)}...`:tag}

                            </Tag>
                        );
                        return isLongTag?(
                            <Tooltip title={tag} key={tag}>
                            {tagElem}
                            </Tooltip>
                        ):tagElem

                    })
                }
                {
                    inputVisible&&(
                        <Input
                        ref={this.input}
                        style={{width:78}}
                        type="text"
                        size="small"
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}//光标移动
                        onPressEnter={this.handleInputConfirm}
                        />
                    )
                }
                {
                    !inputVisible&&(
                        <Tag onClick={this.showInput} style={{background:"#fff",
                        borderStyle:'dashed'}}>
                        <Icon type="plus"/>{plusBtnText?plusBtnText:'New Tag'}
                        </Tag>
                    )
                }
           </div>
        )
        
    }
    highlightTag=(index)=>{
        console.log(index)
        if(this.props.onChange){
            this.props.onChange(this.getTagValueFromIndex(index));
        }

    }
    getTagValueFromIndex=(index)=>{
        const { tags }=this.state;
        return tags[index];

    }
    showInput=()=>{
        this.setState({
            inputVisible:true
        },()=>{
            this.input.current.focus();

        })
        //setState cb异步处理
       
    }
    handleInputChange=(e)=>{
        this.setState({
            inputValue:e.target.value
        })

    }
    handleInputConfirm=()=>{
        const { inputValue,tags:PrevTags}=this.state
        // const { inputValue}=this.state
        if(!inputValue){
            message.error("不能为空");
            this.setState({
                inputVisible:false,
                inputValue:''
            });
            return false;
        }
        if(inputValue&&PrevTags.indexOf(inputValue)!==-1){
            message.error('已存在同样的tag');
            this.setState(
                {
                inputValue:''
                },
                this.input.current.focus()
                )
            
            return false;
        }
        if(this.props.addTag){
            this.props.addTag(inputValue)
            this.setState({
                inputVisible:false,
                inputValue:''
            });
        }
    }
    handleClose=(index)=>{
        this.props.onClose&& this.props.onClose(index);

    }

}