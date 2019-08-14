import React from 'react';
import './search-box.styles.css';

// functional components, no access to internal stete or lifecycle methods
export const SearchBox = ({ placeholder, handleChange }) => (
	<input  className="search"
			type='search'
			placeholder={placeholder}
			onChange={handleChange}
	/>
);
