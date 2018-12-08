import React, { Component } from 'react'
import Header from '@common/header'
import FooterCart from '@common/footer_cart'
import LeftList from './left_list'
import RightList from './right_content'
import './index.scss' 
// import {MainWrapper,MainTabIcon} from './styleComponent'
export class classify extends Component {
  constructor(){
    super()
    this.state={
      subject:[],
      subjectActiveIndex:0
    } 
  }
  componentWillMount(){
    this.axios.get('/mock/classify-subject.json').then((res)=>{
      if(res) {
        this.setState({
          subject:res.data
        })
      }
    })
  }
  render() {
    return (
      <div className='classify'>
          <div className='classify-header'>
            <Header/>
          </div>
          {this.renderSubject()}
          <FooterCart/>
          <LeftList subject={this.state.subjectActiveIndex}/>
          <RightList/>
      </div>
    )
  }
  renderSubject(){
    return (
      <div className='classify-subject'>
        <div className='subject-warp'>
          {this.state.subject.map((item,index)=>
                <span onClick={(e)=>this.changeSubjectActive(index,e)} 
                    className={this.state.subjectActiveIndex===index? 'active':''} 
                    key={index}>{item.FNAME}
                </span>
              )}
        </div>
          
      </div>
    )
  }
  changeSubjectActive(index,e){
    this.setState({
      subjectActiveIndex:index
    })
    //获取元素
    var that = e.target
    // 先获取当前的元素scrollLeft值
    var distance = e.target.parentNode.parentNode.scrollLeft
    // var juli = that.parentNode.parentNode.scrollLeft
    if(that.offsetLeft>distance){
      var time = setInterval(function(){
        //在当前的基础上想左移动
        distance += 20;
        //让元素的scrollLeft 慢慢的变大 就产生移动效果
        that.parentNode.parentNode.scrollLeft = distance 
        if(distance + 20 >that.offsetLeft){
          clearInterval(time);
          that.parentNode.parentNode.scrollLeft = that.offsetLeft
        }
      },18)
    }
  }
}
export default classify
