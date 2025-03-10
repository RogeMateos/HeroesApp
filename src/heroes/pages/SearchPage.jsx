
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = '' } = queryString.parse(location.search);
  
  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  
  const onSearchSubmit = (event) => {
    event.preventDefault();
    
    if (searchText.trim().length <= 1) return;
    
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
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
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
          
          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            no hero with <b>{q}</b> was found
          </div>
          {/* 
            Here we'll add the hero display logic in the next step
            This will show either:
            - A message to search a hero (if q is empty)
            - A message saying no hero was found with that query
            - A list of heroes matching the search query
          */}
        </div>
      </div>
    </>
  );
};