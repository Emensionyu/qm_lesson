import React, { Component } from 'react';
import './recommend.styl';
import { getCarousel, getNewAlbum } from '@/api/recommend'
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
import { CODE_SUCCESS } from '../api/config';
import * as AlbumModel from '@/model/album';
import Loading from '@/common/loading/loading'
import LazyLoad,{forceCheck} from 'react-lazyload';
// 视野区
class Recommend  extends Component {
  constructor (props) {
    super(props);
    this.state = {
      sliderList: [],
      newAlbums: [],
      loading: true
    }
  }
  componentDidMount () {
    getCarousel().then(res => {
      console.log(res);
      if (res.code === CODE_SUCCESS) {
        this.setState({
          sliderList: res.data.slider
        }, () => {
          if (!this.sliderSwiper) {
            this.sliderSwiper = new Swiper(".slider-container", {
              loop: true,
              autoplay: 3000,
              pagination: {
                el:
                '.swiper-pagination'
              }
            })
          }
        })
      }
    }).catch(err => {
      console.log(err);
    })
    // 获取最新专辑
    getNewAlbum()
      .then(res => {
        if (res) {
          if (res.code === CODE_SUCCESS) {
            let albumList = res.albumlib.data.list;
            console.log(albumList);
            this.setState({
              newAlbums: albumList,
              loading: false
            }, () => {
              // setState 数据值 同步
              // 组件有哪部分（专辑列表）改变了，对应的UI结点 replace
              // 生成新的部要DOM结点
              console.log('页面专辑列表这块动态更新了');
              console.log(this.state.loading+"-----------")
            })
          } 
        }
      })
  }
  render () {
    let albums = this.state.newAlbums.map(item => {
      let album = AlbumModel.createAlbumByList(item);
      return (
        <div className="album-wrapper" key={album.id}>
          <div className="left">
          <LazyLoad height={60}>
            <img src={album.img} width="100%" height="100%" alt={album.name}/>
          </LazyLoad>
          </div>
          <div className="right">
            <div className="album-name">
            {album.name}
            </div>
            <div className="singer-name">
            {album.singer}
            </div>
            <div className="public-time">
            {album.publicTime}
            </div>
          </div>
        </div>
      )
    })
    return (<div className="music-recommend">
      <div className="slider-container">
        <div className="swiper-wrapper">
        {
          this.state.sliderList.map(slider => {
            return (
              <div className="swiper-slide" key={slider.id}>
                <a href="#" className="slider-nav">
                  <img src={slider.picUrl}
                  width="100%" height="100%"
                  alt="推荐"/>
                </a>
              </div>
            )
          })
        }
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <div className="album-container">
        <h1 className="title">最新专辑</h1>
        <div className="album-list">
        {albums}
        </div>
      </div>
      <Loading  title='正在加载中' show={this.state.loading}/>
    </div>);
  }
}
export default Recommend;
