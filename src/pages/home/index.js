import React, { PureComponent } from 'react'
import HocTabbar from  '../../components/hoc/tabbar'
import Banner from '../../components/common/banner'
import Search from '../../components/common/search'
import Nav from './nav'
import List from './list'

import ban1 from '@as/images/ban1.jpg'
import ban2 from '@as/images/ban2.jpg'
import {MainWrapper} from './styledComponents'
//引入函数节流
import { throttle } from '@util/tool'

//引入自己的包
import unject_unmount  from 'react-fast-unmount'

// //在数据加载还没完成 或者执行一些类似onscroll方法 ，组件销毁时后还改变数据报错如下
// // Can't perform a React state update on an unmounted component. 
// // This is a no-op, but it indicates a memory leak in your application. 
// // To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

// //函数的参数target，就是会被修饰的类
// function unject_unmount( target ){
// //首先将next = target.prototype.componentWillUnmount 方法接收 
//   let next = target.prototype.componentWillUnmount
//   target.prototype.componentWillUnmount = function(){
//   //如果用户再componentWillUnmount 钩子函数中写了内容，那么就先需要执行用户自己调用的方法 
//     if(next) next.call(this, ...arguments);
//     //然后再 将要被销毁的时候 将 一个布尔值 标记unmount 挂在被修饰的类上 
//     this.unmount = true;
//   }
//   let setState = target.prototype.setState
//   target.prototype.setState = function(){
//     //判断this.unmount 如果自己用了这个修饰的方法 那么 就让销毁之后不改变setState
//     //那么销毁的组件 就不会再改变数据勒
//     if(this.unmount)return ;
//     setState.call(this, ...arguments)
//   }
// }
// @unject_unmount 
@unject_unmount
class Home extends PureComponent {
  constructor(){
    super()
    this.state={
      img:[
        {id:2, imgUrl:ban1},
        {id:2, imgUrl:ban2}
      ],
      text:'寻找你想要的水果',
      style:{
        position: 'fixed',
        left: '50%',
        top:'.266667rem',
        marginLeft: '-3.653333rem'
      },
      isShowSearch : true
    }
  }
  render() {
    return (
      <div className='home' ref='home'>
        <MainWrapper>
          {this.state.isShowSearch?<Search text={this.state.text} style={this.state.style} />:'' }
          <Banner img = {this.state.img} />
        </MainWrapper>
        <Nav></Nav>
        <List></List>
      </div>
    )
  }
  componentDidMount(){
    document.getElementsByTagName('body')[0].onscroll=throttle(
      function(){
        window.scrollY >30? this.setState({isShowSearch:false}):this.setState({isShowSearch:true})
      }.bind(this)
      ,30)
  }
  // componentWillUnmount(){
  //   window.onscroll= null;
  // }
}
export default HocTabbar(Home)
