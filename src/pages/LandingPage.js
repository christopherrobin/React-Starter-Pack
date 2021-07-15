import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import Header from '.././components/Header';
import './LandingPage.scss';

import faker from 'faker';
// import { debounce } from 'lodash';

const fakeNames = Array.from(Array(400), () => {
	return faker.name.findName();
});

const myDebounce = (operation, wait, immediate) => {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) operation.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) operation.apply(context, args);
	};
};

const LandingPage = () => {
	const [query, setQuery] = useState('');

	let filteredNames = fakeNames;

	if (query !== '') {
		filteredNames = fakeNames.filter(name => {
			return name.toLowerCase().includes(query.toLowerCase());
		});
	}

	// Create a function that will set the query's state to the new value
	const changeHandler = event => {
		setQuery(event.target.value);
	};

	// Debounce `changeHandler` function so that it only runs after 500ms
	const debouncedChangeHandler = (() => {
		return myDebounce(changeHandler, 500);
	});

	return (
		<div>
			<input
				onChange={debouncedChangeHandler()}
				type="text"
				placeholder="Type a query..."
			/>
			{filteredNames.map(name => (
				<div key={name}>{name}</div>
			))}
			<div>{filteredNames.length === 0 && query !== '' && 'No matches...'}</div>
		</div>
	);
};

export default LandingPage;
