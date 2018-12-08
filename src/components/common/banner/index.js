import React, { Component } from 'react'
import './index.scss'
import Swiper from 'swiper'

export class Banner extends Component {
  constructor(props){
      super(props)
      this.state = {
          img:props.img
      }
  }
  createImg(){
      return this.state.img.map((item,index)=>{
            return <img className="swiper-slide" key={index} alt='图片' src={ item.imgUrl } />
        }
      )
  }
  render() {
    return (
      <div className='banner'>
        <div className='swiper-container'>
            <div className='swiper-wrapper'>
                {this.createImg()}
                {/* <img className="swiper-slide" src={require('@as/images/ban1.jpg')} />
                <img className="swiper-slide"  src={require('@as/images/ban2.jpg')} /> */}
            </div>
            {/* 分页器 */}
            <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    new Swiper ('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      // 分页器
      pagination: {
        el: '.swiper-pagination',
      },
      //自动轮播
      autoplay:true,
    })        
  }
}
export default Banner
