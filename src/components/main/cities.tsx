import CardsList from './cards-list.tsx';
import Spinner from '../on-load/spinner.tsx';
import Map from './map.tsx';
import Location from '../../types/location.ts';
import {useAppSelector} from '../../hooks';
import {getCityOffers, isOffersLoading} from '../../store/app-data/selectors.ts';
import {useCallback, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {SortOrder, SortType} from '../../types/sort.ts';
import Sort from './sort.tsx';

export default function Cities({cityName}: {cityName: string}) {
  const cards = useAppSelector(getCityOffers);
  const isLoading = useAppSelector(isOffersLoading);
  const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(undefined);
  const [searchParams] = useSearchParams();
  const sortType = searchParams.get('sort') ?? SortType.Popularity;
  const sortOrder = searchParams.get('order') ?? SortOrder.Descending;

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
          <Sort/>
          <CardsList
            cards={cards}
            onListItemHover={handleListItemHover}
            listClassNames={'cities__places-list places__list tabs__content'}
            sortType={sortType as SortType}
            sortOrder={sortOrder as SortOrder}
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
