import React from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Home from '@pages/home'
import Classify from '@pages/classify'
import Previous from '@pages/previous'
import Cart from '@pages/cart'
import User from '@pages/user'
export default ()=>(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact render ={() => {
                //所有在这里可以做权限得验证...或其他得事
                return <Redirect to='/home'></Redirect>
            }}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/classify' render={()=><Classify/>}></Route>
            <Route path='/previous' component={Previous}></Route>
            <Route path='/cart' component={Cart}></Route>
            <Route path='/user' component={User}></Route>
        </Switch>
    </BrowserRouter> 
)
