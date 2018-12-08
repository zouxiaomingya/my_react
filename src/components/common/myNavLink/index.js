import React from 'react'
import styled from 'styled-components'
import {NavLink ,withRouter} from 'react-router-dom'

//给原组件得NavLink 增加加active  样式
const HisStyleNavLink = styled(NavLink)`
  &.active{
    color:pink
  }
  &.myactive{
    color:#2cbd16
  }
  color:'#333'
`
const MyTagNavLink = (props)=>{
    const Tag = props.tag
    //传过来的class 
    let _class = props.className || ''
    //准备自己加的class  自己设置一个activeClassName 如果没有 就添加active
    let _activeClassName = props.activeClassName || 'active'
    // 判断是否加active
    let isActive = props.exact ? props.location.pathname === props.to: props.location.pathname.startsWith(props.to)
    
    //将传过来的 加上选中的对应的active 组成className
    let className = (props.xiaoming && isActive )? _class + ' ' + _activeClassName : _class

    return <Tag  className={className} onClick={ ()=>props.history.push(props.to) } > {props.children} </Tag>
}

//给自己得组件得NavLink 增加加active  样式
const MyStylLink = styled(MyTagNavLink)`
  &.active{
    color:#2cbd16
  }
  &.myactive{
    color:red
  }
  color:#333
`
const MyNavLink = (props) =>{
    if (!props.tag) return <HisStyleNavLink {...props} /> 

    // 通过withRouter  可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入
    const Components = withRouter(MyStylLink) 
    return <Components {...props} xiaoming /> 

    // return <MyStylLink {...props}/>
}
export {
    MyNavLink,
    HisStyleNavLink
}
