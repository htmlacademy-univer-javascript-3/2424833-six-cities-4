import CardsList from './cards-list.tsx';
import Spinner from '../on-load/spinner.tsx';
import Map from './map.tsx';
import Location from '../../types/location.ts';
import {useAppSelector} from '../../hooks';
import {getOffers, isOffersLoading} from '../../store/app-data/selectors.ts';
import {useCallback, useState} from 'react';

export default function Cities({cityName}: {cityName: string}) {
  const allCards = useAppSelector(getOffers);
  const isLoading = useAppSelector(isOffersLoading);
  const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(undefined);

  const cards = allCards.filter((card) => card.city.name === cityName);
  const points = cards.map((card) => card.location);

  const handleListItemHover = useCallback((point: Location) => setSelectedPoint(point), []);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {cards.length} {cards.length === 1 ? 'place' : 'places'} to stay in {cityName}
          </b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
                  Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select"/>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <CardsList
            cards={cards}
            onListItemHover={handleListItemHover}
            listClassNames={'cities__places-list places__list tabs__content'}
          />
        </section>
        <div className="cities__right-section">
          {isLoading ? <Spinner/> :
            <Map
              city={cards[0].city}
              points={points}
              selectedPoint={selectedPoint}
              mapClass={'cities__map map'}
            />}
        </div>
      </div>
    </div>
  );
}
