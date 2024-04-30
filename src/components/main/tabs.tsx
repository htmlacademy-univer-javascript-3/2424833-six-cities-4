import {JSX} from 'react';
import Tab from './tab.tsx';

type TabsProps = {
  cities: string[];
  activeCityName: string;
}

export default function Tabs({cities, activeCityName}: TabsProps): JSX.Element {
  const createTabs = () => (
    <ul className="locations__list tabs__list">
      {cities.map((city) =>
        <Tab key={city} city={city} isActive={city === activeCityName} />)}
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
