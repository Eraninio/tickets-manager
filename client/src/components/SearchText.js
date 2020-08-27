import React from 'react';
import './SearchText.css';

const SearchText = (props) => {
    return (
        <input id='searchInput' type='text' placeholder="Search Ticket..." onChange={(e) => (props.setSearchText(e.target.value))}/>
    )
}

export default SearchText;