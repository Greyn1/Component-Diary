import { useState } from "react";
import Data from './SearchDatabase.json';
import './SearchBar.css';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (evt) => {
        setSearchValue(evt.target.value);
    }

    return (
        <div className="container">
            <div className="search-container">
                <input type="text" 
                    placeholder="Enter Name" 
                    name="searchbar" 
                    value={searchValue}
                    onChange={handleChange} />
            </div>
            <div className="suggestions-container">
                {   searchValue &&
                    Data.filter((suggestion) => suggestion.name.toLowerCase().includes(searchValue))
                    .map((filteredSuggestion) => 
                        <div className="suggestion" key={filteredSuggestion.id} >
                            {filteredSuggestion.name}
                        </div>)
                }
            </div>
        </div>
    );
}

export default SearchBar;
