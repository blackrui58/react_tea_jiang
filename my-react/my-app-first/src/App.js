import React, { Component } from 'react';
//import React, { Component } from 'react' //相当于[import React from 'react']
//对Component进行解构赋值  即 react.Component 现在写为  {Component} = react
import TodoHeader from './Components/TodoHeader'
import TodoItem from './Components/TodoItem'
import TodoFooter from './Components/TodoFooter'

import './App.css'



class App extends Component {
	constructor(props){
		super(props)
		
		this.state = {
			//原始数据:::一条数组
			arr:[
				{
					name:'guo',
					isChecked:true
				},
				{
					name:'jia',
					isChecked:true
				},
				{
					name:'na',
					isChecked:true
				},
				{
					name:'chuan',
					isChecked:true
				}
			],
			
		}
		
		this.toggleAll = this.toggleAll.bind(this)
		this.toggleItem = this.toggleItem.bind(this)
		
		this.parentStatus = this.parentStatus.bind(this)
		
	}
  render() {
  	//为了方便操作,先解构赋值
  	let {arr} = this.state
  	let {toggleAll,toggleItem,parentStatus} = this;
  	let TodoItems = arr.map( (ele,i  ndex)=>{
  		return <TodoItem task={ele} key={index} toggleItemParent ={ ()=>toggleItem(index) }></TodoItem>
  	})
    return (
      <div className="App">

					<TodoHeader arr={arr} toggleAllsss={toggleAll}></TodoHeader>
					
					<ul>
						{TodoItems}
					</ul>
					
					<TodoFooter  parentStatusCan={parentStatus} ></TodoFooter>
					
      </div>
    );
  }
  parentStatus(param){
  	
  	console.log('进入了parentStatus')
  	console.log(param)
  }
  toggleItem(index){
  	let {arr} = this.state
  	console.log('进入了toggleItem')
  	console.log(index)
  	arr[index].isChecked = !arr[index].isChecked
  	this.setState({
  		arr
  	})
  }
  toggleAll(eve){
  	console.log('进来了')
  	//该函数的作用是改变数组的所有isChecked属性值
  	
  	//不仅reder里面,有需要的地方都可以进行解构赋值,方便变量的调用
  	let {arr} = this.state
  	//用一个变量来接收是否选中的属性
  	let isAllChecked = eve.target.checked
  	
  	if(isAllChecked){
  		//将arr中的所有元素的isChecked属性变为true
  		arr.forEach((ele)=>{
  			ele.isChecked = true;
  		})
  	}else{
  		arr.forEach((ele)=>{
  			ele.isChecked = false;
  		})
  	}
  	this.setState({
  		arr:arr
  	})
  	
  }
}

export default App;
