import React, { Component } from 'react';
import './app.css'
// import Home from './pages/home'
import RouterMap from './router'
class App extends Component { 
  render() {
    return (
      <div className="App" ref={dom=>this.name=dom} >
        <RouterMap/>
      </div>
      // style={{height:'2000px'}}
    ); 
  } 
  // componentWillMount(){
  //   console.log('componentWillMount')
  // }
  // componentDidMount(){
  //   console.log('componentDidMount')
  //   console.log(this)
  // }
}

export default App;
