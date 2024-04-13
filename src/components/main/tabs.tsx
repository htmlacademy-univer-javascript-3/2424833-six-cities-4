import {JSX} from 'react';
import Tab from './tab.tsx';
import City from '../../types/city.ts';

type TabsProps = {
  cities: City[];
  activeCityName: string;
}

export default function Tabs({cities, activeCityName}: TabsProps): JSX.Element {
  const createTabs = () => (
    <ul className="locations__list tabs__list">
      {cities.map((city) =>
        <Tab key={city.name} city={city} isActive={city.name === activeCityName} />)}
    </ul>
  );

  return (
    <div className="tabs">
      <section className="locations container">
        {createTabs()}
      </section>
    </div>
  );
}
