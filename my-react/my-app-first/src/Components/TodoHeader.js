import React, { Component } from 'react';

class TodoHeader extends React.Component {
	constructor(props){
		super(props)
		
	}
	render(){
		let {arr,toggleAllsss} = this.props
//		let {toggleAll} = this.props
		let isAllChecked = arr.every(function(ele){
			return ele.isChecked === true
		})
//		<input value={this.state.inputValue} onChange={this.clickHandle}></input> 
//		<button onClick={() => {this.addList()}}>添加</button>
		return(
			<div className="main">
				<input type="checkbox" checked={isAllChecked} onChange={toggleAllsss}></input> 
				<input  ></input> 
				<button >添加sousous</button>
			</div>
		)
	}
}

export default TodoHeader;

	