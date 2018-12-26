import React, { Component } from 'react';
import './recommend.styl';
import { getCarousel, getNewAlbum } from '@/api/recommend'
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
import { CODE_SUCCESS } from '../api/config';

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
              pagination: '.swiper-pagination'
            })
          }
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }
  render () {
    return (<div >
        <div className="slider-container">
        <div className="swiper-wrapper">
        {
            this.state.sliderList.map(slider=>{
                    return(
                        <div className="swiper-slide" key={slider.id}>
                        <a href="#" className="slider-nav">
                        <img src={slider.picUrl} alt="" width="100%"
                        height="100%"
                        alt=""推荐/>
                        </a> 
                    </div>
                    )
                }
            )
        }
        
        </div>
        <div className="swiper-pagination">
        </div>

        
        </div>



    </div>);
  }
}
export default Recommend;
