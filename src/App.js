import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Navigation from './components/Navigation';
import { todos } from './todos.json';
import TodoForm from './components/TodoForm';

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos
		}
		this.handleAddTodo = this.handleAddTodo.bind(this);
	}

	handleAddTodo(todo) {
		this.setState({
			todos: [...this.state.todos, todo]
		})
	}

	removeTodo(index) {
		if (window.confirm('¿Estás seguro de eliminar la tarea?')) {
			this.setState({
				todos: this.state.todos.filter((e, i) => {
					return i !== index
				})
			})
		}
	}

	render() {
		const todos = this.state.todos.map((todo, i) => {
			return (
				<div className="col-md-4">
					<div className="card mt-2">
						<div className="card-header">
							<h3>{todo.title}</h3>
							<span className="badge basge-pill badge-danger ml-2">
								{todo.priority}
							</span>
						</div>
						<div className="card-body">
							<p>{todo.description}</p>
							<cite>{todo.responsible}</cite>
						</div>
						<div className="card-footer">
							<button
								className="btn btn-danger"
								onClick={this.removeTodo.bind(this, i)}
							>
								Eliminar
							</button>
						</div>
					</div>
				</div>
			)
		})

		return (
			<div className="App">
				{/* <Navigation titulo="{ this.state.todos.length }"/> */}

				<nav className="navbar navbar-dark bg-dark">
					<div className="container">
						<a href="" className="navbar-brand text-white">
							Tareas
						<span className="badge btn-pill btn-light ml-2">
								{this.state.todos.length}
							</span>
						</a>
					</div>
				</nav>

				<div className="container">
					<div className="row mt-2">
						<div className="col-md-3 mt-2">
							<img src={logo} className="App-logo" alt="logo" />
							<TodoForm onAddTodo={this.handleAddTodo} />
						</div>
						<div className="col-md-9">
							<div className="row">
								{todos}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
