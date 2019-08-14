import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters: users}));
	}

	// in order to get the right context of 'this' for your own function, you need to use arrow function
	handleChange = (e) => {
		this.setState({ searchField: e.target.value })
	}

	render() {
		const { monsters, searchField } = this.state; //destructuring, pull properties off of an object in this case monsters and searchField and set them to constant
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return(
			<div className="App">
				<h1>Monster Search</h1>
				<SearchBox placeholder='search monsters'
						   handleChange={this.handleChange}
				/>
				<CardList monsters= {filteredMonsters}/>
			</div>
		);
	}
}


export default App;
