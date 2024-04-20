import {JSX} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {selectCityAction} from '../../store/action.ts';
import City from '../../types/city.ts';

type TabProps = {
  city: City;
  isActive: boolean;
}

export default function Tab({city, isActive}: TabProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(selectCityAction(city));

  const linkClass = isActive
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link tabs__item';

  return (
    <li className="locations__item">
      <Link className={linkClass} to={'/'} onClick={handleClick}>
        <span>{city.name}</span>
      </Link>
    </li>
  );
}
