import React, { Component } from 'react'
import './index.scss'
export class RightList extends Component {
  constructor(props){
    super(props)
    this.state = {
      goodList:null,
    }
  } 
  componentWillMount(){
    this.axios.get('/mock/classify-all.json').then((res)=>{
      if(res){
        this.setState({
          goodList : res.data,
        })
      }
    })
  }
  render() {
    return (
      <div className='classify-right-content'>
        
        {this.renderGoodList()}
      </div>
    )
  }
  renderGoodList = ()=>{
    if(!this.state.goodList) return 
    return this.state.goodList.map((item,index)=>
      <div className='goodList' key={index}>
        <div className='photo'><img src={`https://m.caigoubest.com${item.FIMG}`} alt='img' /></div>
        <div className='message'>
          <p>{item.FNAME}</p>
          <p>{item.FSTOCKPREWEIGHT}</p>
          <p>{item.FSALESSPEC}</p>
        </div>
      </div>
    )
  }
}

export default RightList
