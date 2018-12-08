import React, { Component } from 'react'
import './index.scss'
export class LeftList extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex: 0,
      category : {},
      original:{},
    }
  } 
  componentWillMount(){
    this.axios.get('/mock/cookbook-category.json').then((res)=>{
      if(res){
        this.setState({
          category : res.data.data.category,
          original : res.data.data.original
        })
      }
    })
  }
  render() {
    return (
      <div className='classify-left-list'>
        {this.renderItem()}
      </div>
    )
  }
  renderItem = ()=>{
    let chooseObj = this.props.subject===0?this.state.category:this.state.original
    if(!this.state.category) return 
    return Object.keys(chooseObj).map((item,index)=>
      <p className={index === this.state.activeIndex? 'active':''} 
        key={index} onClick={()=>this.changeListIndex(index)}
      >
        {item}
      </p>
    )
  }
  changeListIndex(i){
    this.setState({
      activeIndex:i
    })
  }
}

export default LeftList
