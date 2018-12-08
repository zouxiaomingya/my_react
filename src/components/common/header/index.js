import React, { Component } from 'react'
// import {withRouter} from 'react-router-dom'
import './index.scss'
import Search from '../search'

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='back' onClick={()=> window.history.go(-1)}> 
            <i className='iconfont icon-shouye'></i> 
        </div>
        <div className='search'>
            <Search text={'寻找你想要的美味'}/>
        </div>
      </div>
    )
  }
}

export default Header
