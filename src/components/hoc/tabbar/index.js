
import React, { Component ,Fragment} from 'react'
// import  { Link } from 'react-router-dom'
import  { MyNavLink } from '../../common/myNavLink'

import './index.scss'
const tarbarArr = [
  {class: 'icon-shouye',text: '首页' , link:'/home'},
  {class: 'icon-tubiao03',text: '分类' ,link:'/classify'},
  {class: 'icon-icon-power-fn-signal',text: '上次' ,link:'/previous'},
  {class: 'icon-ios-gwc-outline',text: '购物车' ,link:'/cart'}, 
  {class: 'icon-wode', text: '我的' ,link:'/user'},
]
const HocTabbar = (WarpComponent)=>class Tabbar extends Component {
  render() {
    return (
      <Fragment>
        <WarpComponent/> 
        <div className='tabbar' >
          {
            tarbarArr.map((item,index)=>(
              <MyNavLink tag='div' exact  to={item.link}  className='tabbar-item' key={index}>
                <i className={'iconfont '+ item.class} />
                <p>{item.text}</p>
              </MyNavLink>
            ))
          }
        </div>
      </Fragment>
    )
  }
}
export default HocTabbar
