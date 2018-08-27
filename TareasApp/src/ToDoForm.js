import React, { Component } from 'react';
import logo from './logo.svg';
import './ToDoForm.css';

class ToDoForm extends Component {
	constructor(props){
		super(props);
		
		this.handleAddSave = this.handleAddSave.bind(this);
		this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
		//this.manejarEnvio = this.manejarEnvio.bind(this);
	}
	
	componentWillReceiveProps(newProps){
		if(newProps.edit){
			this.refs.task.value = newProps.edit.text;
		}
	}
	
	handleAddSave(){
		if(this.props.edit){
			var task = {
				text: this.refs.task.value,
				completed: this.props.edit.completed
			};
			
			this.props.save( this.props.edit.index,task);
		} else {
			var task = {text: this.refs.task.value, completed: false};
			this.props.add( task );
		}
		
		this.refs.task.value = '';
		
		var info = "Nombre: " + this.refs.nombre.value + ", Apellidos: " + this.refs.apellidos.value + ", Edad: " + this.refs.edad.value + ", Profesion: " + this.refs.profesion.value;
		
		this.refs.info.value = info;
		console.log(info);
	}
	
	/*manejarEnvio = (event) => {
		console.log("Nombre: " + this.refs.nombre.value + ", Apellidos: " + this.refs.apellidos.value + ", Edad: " + this.refs.edad.value + ", Profesion: " + this.refs.profesion.value);
		event.preventDefault();
	}*/
	
	render() {
		return (
		<div className="jumbotron padded">
			<form onSubmit={this.manejarEnvio}>
				<div className="row">
					<div className="col-md-9">
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Task" ref="task" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Nombre" ref="nombre" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Apellidos" ref="apellidos" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Edad" ref="edad" />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Profesion" ref="profesion" />
						</div>
						<div className="form-group">
							<input disabled type="text" className="form-control" placeholder="Info" ref="info" />
						</div>
					</div>
					<div className="col-md-3">
						<button type="button" onClick={this.handleAddSave} className="btn btnprimary btn-block">{this.props.edit ? 'Save':'Add'}</button>
					</div>
				</div>
			</form>
		</div>
		)
	}
}

export default ToDoForm;
