import React, { Component } from 'react'
import  HocTabbar from  '../../components/hoc/tabbar'
export class user extends Component {
  render() {
    return (
      <div className='user'>
          user
      </div>
    )
  }
}
export default HocTabbar(user) 
