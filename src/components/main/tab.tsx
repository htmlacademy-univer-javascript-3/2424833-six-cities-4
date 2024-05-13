import {JSX} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {selectCity} from '../../store/app-process/app-process.ts';
import classNames from 'classnames';

type TabProps = {
  city: string;
  isActive: boolean;
}

export default function Tab({city, isActive}: TabProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(selectCity(city));

  const linkClass = classNames('locations__item-link', 'tabs__item', {
    'tabs__item--active': isActive
  });

  return (
    <li className="locations__item">
      <Link className={linkClass} to={'/'} onClick={handleClick}>
        <span>{city}</span>
      </Link>
    </li>
  );
}
