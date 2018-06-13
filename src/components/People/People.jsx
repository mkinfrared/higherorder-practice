import React from 'react';
import Loading from '../Loading/Loading';
import Collapse from '../Collapse/Collapse';

function People(props) {
	const people = props.people.map((e, i) => (
		<Collapse key={i} name={e.name}>
			{() => (
				<div>
					{/*<p>{e.name}</p>*/}
					<p>{e.height}</p>
					<p>{e.mass}</p>
					<p>{e.hair_color}</p>
					<p>{e.eye_color}</p>
				</div>
			)}
		</Collapse>
	));

	return (
		<div>
			{people}
		</div>
	)
}

export default Loading(People);
