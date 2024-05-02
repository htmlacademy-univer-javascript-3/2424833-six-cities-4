import {JSX, useState} from 'react';
import {SortOrder, SortType} from '../../types/sort.ts';
import classNames from 'classnames';
import browserHistory from '../../browser-history.ts';

const createSortOptionsListItems = (selectedOptionName: string, setOptionName: (value: string) => void): JSX.Element => {
  const options = [
    {name: 'Popular', type: SortType.Popularity, order: SortOrder.Descending},
    {name: 'Price: low to high', type: SortType.Price, order: SortOrder.Ascending},
    {name: 'Price: high to low', type: SortType.Price, order: SortOrder.Descending},
    {name: 'Top rated first', type: SortType.Rating, order: SortOrder.Descending},
  ];

  return (
    <>
      {options.map(({name, type, order}) => (
        <li
          key={name}
          className={classNames('places__option', {
            'places__option--active': name === selectedOptionName
          })}
          tabIndex={0}
          onClick={() => {
            setOptionName(name);
            browserHistory.push(`?sort=${type}&order=${order}`);
          }}
        >
          {name}
        </li>
      ))}
    </>
  );
};

export default function Sort(): JSX.Element {
  const [sortName, setSortName] = useState('Popular');
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleSortOptionsMenu = () => setIsOpened(!isOpened);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleToggleSortOptionsMenu}
      >
        {sortName}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={classNames('places__options', 'places__options--custom', {
        'places__options--opened': isOpened
      })}
      >
        {createSortOptionsListItems(sortName, setSortName)}
      </ul>
    </form>
  );
}
