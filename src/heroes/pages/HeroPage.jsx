import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';
export const HeroPage = () => {
  // Obtener el id del héroe desde los parámetros de la ruta
  const { id } = useParams();
  
  // Para la navegación
  const navigate = useNavigate();
  
  const hero = useMemo(() => getHeroById(id), [id]);

  // Función para regresar a la página anterior
  const onNavigateBack = () => {
    navigate(-1);
  };
  
  // Obtener la información del héroe usando el id
  //const hero = getHeroById(id);
  
  // Si el héroe no existe, redirigir a otra página
  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  
  // Construir la URL de la imagen
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  
  // Si existe, mostrar la información del héroe
  return (
    <div className="mt-5">
      <div className="row">
        {/* Columna de la imagen */}
        <div className="col-4">
          <img 
            src={heroImageUrl} 
            alt={hero.superhero} 
            className="img-fluid"
          />
        </div>
        
        {/* Columna de la información */}
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group">
            <li className="list-group-item"><strong>Alter ego:</strong> {hero.alter_ego}</li>
            <li className="list-group-item"><strong>Publisher:</strong> {hero.publisher}</li>
            <li className="list-group-item"><strong>First appearance:</strong> {hero.first_appearance}</li>
          </ul>
          
          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>
          
          <button 
            className="btn btn-outline-primary"
            onClick={onNavigateBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};