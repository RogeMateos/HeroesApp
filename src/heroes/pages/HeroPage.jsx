import { useParams, Navigate } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  // Obtener el id del héroe desde los parámetros de la ruta
  const { id } = useParams();

  // Obtener la información del héroe usando el id
  const hero = getHeroById(id);

  // Si el héroe no existe, redirigir a otra página
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  // Si existe, mostrar la información del héroe
  return (
    <div>
      <h1>{hero.superhero}</h1>
      {/* Aquí se mostrará la información detallada del héroe */}
    </div>
  );
};