import React, { Component } from 'react';

class TodoFooter extends React.Component {
	constructor(props){
		super(props)
		
		this.childStatus = this.childStatus.bind(this)
	}
	render(){	
		let {childStatus} = this
//				<span>还有{this.state.noFinishSum}个任务未完成</span>
//				<span onClick={ ()=>{this.allTest('all')} }>所有任务</span>
//				<span onClick={ ()=>{this.noTest('no')} }>未完成的任务</span>
//				<span onClick={ ()=>{this.doTest('do')} }>完成的任务</span>	
		return(
			<div>
				<span>还有4个任务未完成</span>
				<span onClick={ ()=>{this.childStatus('all')} }>所有任务</span>
				<span onClick={ ()=>{this.childStatus('no')} }>未完成的任务</span>
				<span onClick={ ()=>{this.childStatus('do')} }>完成的任务</span>			
			</div>
		)
	}
	//这里先定义了一个自己局部的函数,然后在自己的函数中执行父组件传递过来的函数
	childStatus(param){
		console.log(param)
		let {parentStatusCan} = this.props
		parentStatusCan('知道了')
	}
		
}

export default TodoFooter;