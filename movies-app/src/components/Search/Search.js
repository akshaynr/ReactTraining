import { useState } from 'react';
import './Search.css'

const Search = ({initialSearchQuery, onSearch}) => {
    const [query, setQuery] = useState(initialSearchQuery || '');

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    }

    const handleKeyDown = (event) => {
        if(event.code === 'Enter'){
            onSearch(query);
        }
    }


    return (
        <section className="banner">
            <div className = "search-wrapper">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="What do you want to watch?"
                        value={query}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        data-testid="search-input"
                    />
                    <button type="submit" className="btn btn-search" data-testid="search-btn">Search</button>          
                </form>
            </div>
        </section>
            
    )
}

export default Search;