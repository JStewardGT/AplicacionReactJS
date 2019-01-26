import React, { Component } from 'react';

class TodoForm extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			responsible: '',
			description: '',
			priority: 'low'
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(e) {
		// console.log(e.target.value, e.target.name);
		const { value, name } = e.target;
		this.setState({
			[name]: value
		})
		console.log(this.state);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onAddTodo(this.state);
		console.log('Enviando los datos');
	}

	render() {
		return (
			<div className="card">
				<form
					className="card-body"
					onSubmit={this.handleSubmit}
				>
					<div className="form-group">
						<input
							type="text"
							name="title"
							onChange={this.handleInput}
							className="form-control"
							placeholder="Titulo"
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							name="responsible"
							onChange={this.handleInput}
							className="form-control"
							placeholder="Responsable"
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							name="description"
							onChange={this.handleInput}
							className="form-control"
							placeholder="descripción"
						/>
					</div>
					<div className="form-group">
						<select
							name="priority"
							onChange={this.handleInput}
							className="form-control"
						>
							<option>Baja</option>
							<option>Media</option>
							<option>Alta</option>
						</select>
					</div>
					<button
						type="submit"
						className="btn btn-primary"
					>
						Guardar
					</button>
				</form>
			</div>
		)
	}

}

export default TodoForm;
