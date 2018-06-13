import React from 'react';

export default function Loading(Component) {
	return class extends React.Component {
		render() {
			return (
				<div>
					{(this.props.loading) ?
					 <h2>LOADING</h2> :
					 <Component {...this.props}/>}
				</div>
			);
		}
	}
}