import React from 'react';
import './SearchBox.css';


const SearchBox = ({ searchChange }) => {
    //console.log(searchChange);

    return (
        <div className="pa2">
            <input className="tc pa2 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search Robots..."
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;