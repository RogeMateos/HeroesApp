import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';
 
export const SearchPage = () => {  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the search query from URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get('q') || '';
  
  // State for heroes and search text
  const [searchText, setSearchText] = useState(q);
  const [heroes, setHeroes] = useState([]);
  
  // Effect to perform search when query parameter changes
  useEffect(() => {
    // Search heroes based on the query parameter
    const heroesFound = getHeroesByName(q);
    setHeroes(heroesFound);
  }, [q]);
  
  // Handle form submission
  const onSearchSubmit = (e) => {
    e.preventDefault();
    
    // Update URL with the query parameter
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              placeholder="Search hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            
            <button 
              className="btn btn-outline-primary mt-1"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          
          {/* Initial state - no search performed yet */}
          {q === '' && (
            <div className="alert alert-primary">
              Search a hero
            </div>
          )}
          
          {/* No results found */}
          {q !== '' && heroes.length === 0 && (
            <div className="alert alert-danger">
              No results with <b>{q}</b>
            </div>
          )}
          
          {/* Display heroes if found */}
          {heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );   
};