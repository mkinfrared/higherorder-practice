import React, {Component} from 'react';

export default class Collapse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};

	}

	render() {
		const close = {
			maxHeight : 0,
			opacity   : 0,
			transition: 'all 0.3s linear'
		};

		const open = {
			maxHeight : '500px',
			opacity   : 1,
			transition: 'all 0.3s linear'
		};

		return (
			<div>
				<p>{this.props.name}</p>
				<button onClick={() => this.setState({open: !this.state.open})}>
					{(this.state.open) ? 'CLOSE' : 'OPEN'}
				</button>
				<div style={(this.state.open) ? open : close}>
					{this.props.children()}
				</div>
			</div>
		);
	}

}