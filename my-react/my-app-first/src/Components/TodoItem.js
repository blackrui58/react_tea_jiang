import React, { Component } from 'react';
//这里引入一个类型验证的库
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
	constructor(props){
		super(props)

	}
	render(){	
		//通过this.props来接收父组件传递过来的值
		//对其进行解构赋值,方便这边的操作
		let {task,toggleItemParent} = this.props
		return(
			<div>
				<input type="checkbox" checked={task.isChecked} onChange={toggleItemParent}>
				</input><li>{task.name}</li>				
				<button>删除</button>
			</div>
			
		)
	}
}
//这里的propTypes是固定的,首字母是小写的,和上面引入的库的别名PropTypes不是同一个东西(他的首字母大写)
TodoItem.propTypes = {
	task:PropTypes.object,
	
}
export default TodoItem;