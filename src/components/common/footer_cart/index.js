import React, { Component } from 'react'
import './index.scss'
export class FooterCart extends Component {
  render() {
    return (
      <div className='common-footer_cart'>
          <div className='icon'>
            <i className='iconfont icon-ios-gwc-outline'></i>
            <p className="num-hint" >1</p>
          </div>
          <div className='message'>
            <p className='weight'>总重量：<span className='num'>0.00</span> kg</p>
            <p className='price'>总价格：￥<span className='num'>0.00</span></p>
          </div>
          <div className='gopay'>去结算(<span className='gopay-price'>0</span>)</div>
      </div>
    )
  }
}

export default FooterCart
