import {loadNotes} from '../../utils/util'
let col1H=0;//不用放到页面上
let col2H=0

Page({
  data:{
    test_url:'',
    col1:[],
    col2:[],


  },
  onLoad(){
    loadNotes((data)=>{
      console.log(data)
      this.setData({
        test_url:data.data[0].pic,
        col1:[data.data[0]]
      })

    })
  },
  onImageLoad(event){
    let oImgW=event.detail.width;
    let oImgH=event.detail.height;
    console.log(oImgH,oImgW);




  },
  upper(){

  },
  lower(){

  }

})