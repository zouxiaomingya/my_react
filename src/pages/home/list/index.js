import React, { Component } from 'react'
import './index.scss'
export class List extends Component {
    constructor(){
        super()
        this.state={
            listData:[]
        }
    }
    componentWillMount(){
        this.axios.get('/mock/home-list.json').then((res)=>{
            if(res){
                this.setState({
                    listData:res.data
                })
            } 
            
        })
    }
    render(){
        return (
            <div className='home-list'>
                {this.state.listData.map((item,index)=>
                    <img src={item.FIMAGEURL} key={index} alt='img' />
                )}
            </div>
        )
    }
}

export default List
