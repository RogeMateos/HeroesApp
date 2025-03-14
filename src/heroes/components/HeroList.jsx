import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { useMemo } from 'react';
import { HeroCard } from './';
export const HeroList = ({ publisher }) => {
  //const heroes = getHeroesByPublisher(publisher);

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            heroes.map( hero => (
                <HeroCard 
                    key={ hero.id } 
                    { ...hero }
                />
            ))
        }
    </div>
)
}