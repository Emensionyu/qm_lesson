const URL = {
    carousel: "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
    /*最新专辑*/
    newalbum: "https://u.y.qq.com/cgi-bin/musicu.fcg"
}

const PARAM = {
  // 跨域请求json json with padding 
  format: "jsonp",
  inCharset: "utf-8",
  outCharset: "utf-8",
  notice: 0
} 

const OPTION = {
  param: "jsonpCallback",
  prefix: "callback"
} 

const  CODE_SUCCESS = 0;

export {URL, OPTION, PARAM, CODE_SUCCESS};
