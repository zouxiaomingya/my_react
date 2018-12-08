import React, { Component } from 'react'
import  { MyNavLink } from '@common/myNavLink'
import  './index.scss'
import nav1 from '@as/images/nav_1.png'
import nav2 from '@as/images/nav_2.png'
import nav3 from '@as/images/nav_3.png'
import nav4 from '@as/images/nav_4.png'
const item = [
  {id:1, imgUrl:nav1, text:'开始采购', to:'/classify'},
  {id:2, imgUrl:nav2, text:'常用商品', to:''},
  {id:3, imgUrl:nav3, text:'我的钱包', to:''},
  {id:4, imgUrl:nav4, text:'我的订单', to:''},
]

export class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='warp'>
        {item.map((item,index)=>(
            <MyNavLink tag='div' to={item.to} className='item' key={index}>
              <img src={item.imgUrl} alt='img' />
              <p>{item.text}</p>
            </MyNavLink>
          ))}
        </div>
      </div>
    )
  }
}

export default Nav
