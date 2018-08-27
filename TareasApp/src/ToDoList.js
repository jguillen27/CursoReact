import React, { Component } from 'react';
import logo from './logo.svg';
import './ToDoList.css';
import ToDoAction from './ToDoAction';

class ToDoList extends Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return (
			<div className="row padded">
				<div className="col-lg-12">
					<h4>Tasks</h4>
					<hr/>
					<ul className="list-group">
						{
							this.props.tasks.map(function(task, index){
								var cssClass = 'list-group-item list-group-item-';
								
								if( task.completed ){
									cssClass += 'info';
								} else {
									cssClass += 'success';
								}
								
								return (
									<li key={index} className = {cssClass}>
										<span style={{marginRight:'20px'}}>{task.text}</span>
										<ToDoAction index={index} completed={task.completed} setStatus={this.props.taskAction} edit={this.props.edit} remove={this.props.remove}/>
									</li>
								)
							}, this)
						}
					</ul>
				</div>
			</div>
		) 
	}
}

export default ToDoList;
