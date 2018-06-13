import React, {Component} from 'react';
import People from './components/People/People';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			people: [],
			open  : false
		};
	}

	componentWillMount() {
		axios.get('https://swapi.co/api/people')
			 .then((resp) => this.setState({people: resp.data.results}))
			 .catch((err) => console.error(err));
	}


	render() {

		return (
			<div className="App">
				<People people={this.state.people}/>
			</div>
		);
	}
}

export default App;
