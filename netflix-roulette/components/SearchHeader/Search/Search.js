'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import './Search.css'

const Search = ({ initialSearchQuery, searchParams }) => {
    const [query, setQuery] = useState(initialSearchQuery || '');
    const router = useRouter();

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        router.replace()
    }

    const handleKeyDown = (event) => {
        if(event.code === 'Enter'){
            onSearch(query);
        }
    }


    return (
        <section className="banner">
            <div className = "search-wrapper">
                <h1>Find your movie?</h1>
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