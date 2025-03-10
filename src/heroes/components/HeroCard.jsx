import React from 'react';
import { Link } from 'react-router-dom';
export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  
// Internal component for conditional character display
const CharactersByHero = ({ alter_ego, characters }) => {
  // If alter_ego and characters are the same, don't render anything
  if (alter_ego === characters) return <></>;
  
  // Otherwise, return the characters paragraph
  return <p>{ characters }</p>;
};
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        
        <div className="row no-gutters">
          <div className="col-4">
            <img src={ heroImageUrl } className="card-img" alt={ superhero } />
          </div>
          
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{ superhero }</h5>
              <p className="card-text">{ alter_ego }</p>
              
              {/* Using the internal component instead of inline conditional */}
              <CharactersByHero alter_ego={alter_ego} characters={characters} />
              
              <p className="card-text">
                <small className="text-muted">{ first_appearance }</small>
              </p>
              
              <Link to={`/hero/${id}`}>
                Más información
              </Link>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}