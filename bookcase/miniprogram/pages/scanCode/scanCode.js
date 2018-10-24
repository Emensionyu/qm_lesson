Page({
  scanCode: function() {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode'],
      success: res => {
        console.log(res);
        wx.cloud.callFunction({
          name: 'bookinfo',
          data: {
            isbn: res.result
          },
          success: res => {
            // console.log(res);
            const bookString = res.result;
            const db = wx.cloud.database();
            const book = db.collection('mybook');
            db.collection('mybook').add({
              data: JSON.parse(bookString)
            }).then(res => {
              console.log(res);
            }).catch(err => {
              console.log(err);
            })
          }
        })
      }
    })
  }
})
