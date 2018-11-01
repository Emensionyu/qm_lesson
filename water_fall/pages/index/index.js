let col1H = 0;
let col2H = 0;

Page({
  data: {
    col1: [],
    col2: [],
    scrollH: 0,
    imgWidth: 0,
    loadingCount: 0,
    images: []
  },
  onImageLoad (e) {
    // console.log(e.detail.width, e.detail.height);
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width;
    let oImgH = e.detail.height;
    let imgWidth = this.data.imgWidth;
    let scale = imgWidth / oImgW;
    let imgHeight = oImgH * scale;

    let images = this.data.images;
    let imageObj = null;
    for (let img of images) {
      if (img.id === imageId) {
        imageObj = img;
        break;
      }
    }
    // console.log(imageObj);
    imageObj.height = imgHeight

    let loadingCount = this.data.loadingCount -1 ;
    
    let col1 = this.data.col1;
    let col2 = this.data.col2;
    
    if (col1H <= col2H) {
      col1H += imgHeight;
      col1.push(imageObj);
    } else {
      col2H += imgHeight;
      col2.push(imageObj);
    }

    let data = {
      loadingCount,
      col1,
      col2
    }
    if (!loadingCount) {
      data.images = [];
    }
    this.setData(data);
  },
  onLoad() {
    wx.getSystemInfo({
      success: (res) => {
        // success
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        // console.log(res);
        let imgWidth = ww * 0.48;
        // 图片大小， 在页面上显示的大小， 等比例的缩放
        let scrollH = wh;
        // console.log(scrollH);
        this.setData({
          scrollH: scrollH,
          imgWidth: imgWidth
        });
        this.loadImages();
      }
    })
  },
  loadImages() {
    // image 有onload 事件 
    let images = [
      { pic: "../../images/1.png", height: 0},
      { pic: "../../images/2.png", height: 0},
      { pic: "../../images/3.png", height: 0},
      { pic: "../../images/4.png", height: 0},
      { pic: "../../images/5.png", height: 0},
      { pic: "../../images/6.png", height: 0},
      { pic: "../../images/7.png", height: 0},
      { pic: "../../images/8.png", height: 0},
      { pic: "../../images/9.png", height: 0},
      { pic: "../../images/10.png", height: 0},
      { pic: "../../images/11.png", height: 0},
      { pic: "../../images/12.png", height: 0},
      { pic: "../../images/13.png", height: 0},
      { pic: "../../images/14.png", height: 0}
    ];

    let baseId = "img-" + (+new Date());
    for (let i = 0; i < images.length; i++) {
      images[i].id = baseId + "-" + i;
    }
    // console.log(images);
    this.setData({
      loadingCount: images.length,
      images: images
    })
  }
})
