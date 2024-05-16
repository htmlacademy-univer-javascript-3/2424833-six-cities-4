import {JSX} from 'react';
import {useAppSelector} from '../../hooks';
import Tabs from './tabs.tsx';
import {cities} from '../../consts.ts';
import {getCity} from '../../store/app-process/selectors.ts';
import Cities from './cities.tsx';
import {hasCityOffers, isOffersLoading} from '../../store/app-data/selectors.ts';
import classNames from 'classnames';
import MainEmpty from './main-empty.tsx';

// TODO: fix main page scroll
export default function Main(): JSX.Element {
  // TODO: city resets on page refresh
  const cityName = useAppSelector(getCity);
  const isEmptyOffers = !useAppSelector(hasCityOffers);
  const isLoading = useAppSelector(isOffersLoading);

  return (
    <div className="page page--gray page--main">
      <main className={classNames('page__main', 'page__main--index', {
        'page__main--index-empty': isEmptyOffers && !isLoading
      })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={cities} activeCityName={cityName}/>
        {isEmptyOffers ? <MainEmpty/> : <Cities cityName={cityName}/>}
      </main>
    </div>
  );
}
