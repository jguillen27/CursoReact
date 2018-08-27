import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

class App extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			edit: {},
			tasks: this.getInitialState()
		};
		
		this.addTask = this.addTask.bind(this);
		this.saveTask = this.saveTask.bind(this);
		this.removeTask = this.removeTask.bind(this);
		this.editTask = this.editTask.bind(this);
		this.taskAction = this.taskAction.bind(this);
	}
	
	getInitialState() { 
		var tasks = [
				{ text: "Tarea 1", completed: false },
				{ text: "Tarea 2", completed: false },
				{ text: "Tarea 3", completed: false },
				{ text: "Tarea 4", completed: true }
			];
		
		return tasks;
		
	}
	
	addTask(task) {
		if( task.text ){
			this.state.tasks.push(task);
			this.setState( this.state );
		}
	}
	
	saveTask(index, task) {
		if( task.text ){
			this.state.tasks[index] = task;
			this.state.edit = null;
			this.setState( this.state );
		}
	}
	
	removeTask(index) {
		if( index >= 0 && this.state.tasks.length > 0 ){
			this.state.tasks.splice(index, 1);
			this.setState( this.state );
		}
	}
	
	editTask(index) {
		if( index >= 0 && this.state.tasks.length > 0 ){
			var task = this.state.tasks[index];
			task.index = index
			this.setState({edit:task});
		} 
	}
	
	taskAction(index){
		this.state.tasks[index].completed = !
		this.state.tasks[index].completed;
		this.setState( this.state );
	}
	
	render() {
		return (
			<div>
				<ToDoForm
				add={this.addTask}
				save={this.saveTask}
				edit={this.state.edit} />
				<ToDoList
				tasks={this.state.tasks}
				remove={this.removeTask}
				edit={this.editTask}
				taskAction={this.taskAction} />
			</div> );
	}
	
}

export default App;
