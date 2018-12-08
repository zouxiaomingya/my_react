import React, { Component } from 'react'
import './index.scss'
export class Search extends Component {
    render() {
        return (
        <div className='search' style={this.props.style}>
            <div className='search-container'>
                <i className='iconfont icon-icon-power-fn-signal'></i>
                <span>{this.props.text}</span>
            </div>
        </div>
        )
    }
}
export default Search
