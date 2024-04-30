import {JSX, useState} from 'react';
import CardsList from './cards-list.tsx';
import Map from './map.tsx';
import Location from '../../types/location.ts';
import {useAppSelector} from '../../hooks';
import Tabs from './tabs.tsx';
import {cities} from '../../consts.ts';
import Sort from './sort.tsx';
import {useSearchParams} from 'react-router-dom';
import {SortOrder, SortType} from '../../types/sort.ts';

// TODO: fix main page scroll
// TODO: fix slash between price and period
export default function Main(): JSX.Element {
  // TODO: city resets on page refresh
  const [city, allCards] = useAppSelector((state) => [state.city, state.offers]);
  const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(undefined);
  const [searchParams] = useSearchParams();
  const sortType = searchParams.get('sort') ?? SortType.Popularity;
  const sortOrder = searchParams.get('order') ?? SortOrder.Descending;

  const cards = allCards.filter((card) => card.city.name === city.name);
  const points = cards.map((card) => card.location);

  const handleListItemHover = (listPoint: Location) => {
    const currentPoint = points.find((point) =>
      point.latitude === listPoint.latitude && point.longitude === listPoint.longitude);

    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={cities} activeCityName={city.name}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cards.length} {cards.length === 1 ? 'place' : 'places'} to stay in {city.name}
              </b>
              <Sort />
              <CardsList
                cards={cards}
                onListItemHover={handleListItemHover}
                listClassNames={'cities__places-list places__list tabs__content'}
                sortType={sortType as SortType}
                sortOrder={sortOrder as SortOrder}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={city}
                points={points}
                selectedPoint={selectedPoint}
                mapClass={'cities__map map'}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
