import {JSX} from 'react';
import {useAppSelector} from '../../hooks';
import Tabs from './tabs.tsx';
import {cities} from '../../consts.ts';
import {getCity} from '../../store/app-process/selectors.ts';
import Cities from './cities.tsx';

// TODO: fix main page scroll
// TODO: fix slash between price and period
export default function Main(): JSX.Element {
  // TODO: city resets on page refresh
  const cityName = useAppSelector(getCity);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={cities} activeCityName={cityName}/>
        <Cities cityName={cityName}/>
      </main>
    </div>
  );
}
