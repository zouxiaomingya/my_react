##环境搭建完成
>创建的项目中安装了react-app-rewired 后，可以通过创建一个config-overrides.js 文件来对 webpack 配置进行扩展。
    配置好文件之后需要改package.json 的入口文件 react-scripts 改为 react-app-rewired

>安装 sass-loader node-sass  scss样式预编译的工具 

>styled-components

>react-router-dom

>$ npm install swiper   使用swiper轮播图   
    使用swiper  切记把css 文件引入 



# 自己对react的一些扩展

#### 封装react-redux的connect方法

[打包npm 包了](https://www.npmjs.com/package/redux-fast-tool)

```
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const _connect = function (Uicomponent, reducers = [])  {
    let mapStateToProps = (state) => {
        let result = {}
        // 如果没有传入reducer的名字，认为都想要
        if ( reducers.length <= 0 ) return state;
        reducers.forEach(reducer => {
            if (typeof reducer === 'string') {
                result[reducer] = state[reducer] ? state[reducer] : {}
            } else { // obj
                result[reducer.name] = filterObject(state[reducer.name], reducer.states)
            }
            
        })
        return result
    }
    let mapDispatchToProps = (dispatch) => {
        let result = {}
        // 如果没有传入reducer的名字，认为都想要
        if ( reducers.length <= 0 ) return {};
        if ( !_connect.actions ) return {};

        // 将对应的actionCreator的方法处理后传给UI组件
        reducers.forEach(reducer => {
            let name = (typeof reducer === 'string') ? reducer : reducer.name
            if ( !_connect.actions[name] ) return false;
            result[name + '_actions'] = bindActionCreators(_connect.actions[name], dispatch)
        })
        return result
    }
    return  connect(mapStateToProps, mapDispatchToProps)(Uicomponent)
}

_connect.configActionCreators = function (actions) {
    _connect.actions = actions
}
_connect.addActionCreator = function (actionCreator) {
    _connect.actions = { ...(_connect.actions || {}), ...actionCreator }
}
function filterObject (obj, arr) {
    if ( !arr || arr.length <= 0 ) return obj;
    let result = {}
    arr.forEach(key => {
        if ( obj.hasOwnProperty(key) ) {
            result[key] = obj[key]
        }     
    })
    return result
}
export default _connect
```

#### 模拟实现react-redux

```javascript-react
import React, { Component } from 'react'
// context上下文，准备放入store
let  Store_context = React.createContext();
// store提供者
class Provider extends Component {
    render () {
        return (
            <Store_context.Provider value = {this.props.store}>
                {this.props.children}
            </Store_context.Provider>
        )
    }
}

const connect = (
    mapStateToProps, 
    mapDispatchToProps
) => {
    
    return (Uicomponent) => { // HOC高阶组件
        
        return  class extends Component { // 容器组件

            render () {
                return (
                    <Store_context.Consumer>
                        { this.renderUiComponent.bind(this)  }
                    </Store_context.Consumer>
                )
            }
            renderUiComponent (store) {
                // 会将mapStateToProps中指定的状态传给UI组件
                let wanted_state = mapStateToProps && (mapStateToProps(store.getState()) ? mapStateToProps(store.getState()) : {})
                let dispatch = store.dispatch.bind(store) 
                // 会将mmapDispatchToProps中指定的方法传给UI组件
                let wanted_methods = mapDispatchToProps && (mapDispatchToProps(dispatch) ? mapDispatchToProps(dispatch) : {})
        
                store.subscribe(() => {
                    this.setState({})
                })
        
                return <Uicomponent 
                    dispatch = {dispatch} 
                    { ...wanted_state } 
                    {...wanted_methods }
                />
            }
        }
    }
}

export {
    Provider, connect
}


```

#### react实现vue的tag标签

> 在React-Router中Link无法指定生成的元素类型，那么我们可以封装一个，就可以实现Vue-router中tag的功能。  React Router 在实现路由跳转有个NavLink 或Link

```javascript-react
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
 
```




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
