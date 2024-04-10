import {JSX, MouseEvent} from 'react';
import CardInfo from '../../types/card-info.ts';
import PlaceCardInfoChildren from '../cards-common/place-card-info-children.tsx';
import PremiumMark from '../cards-common/premium-mark.tsx';
import {Link} from 'react-router-dom';
import Location from '../../types/location.ts';

type Props = {
  card: CardInfo;
  onListItemHover: (listPoint: Location) => void;
}

export default function Card({card, onListItemHover}: Props): JSX.Element {
  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(card.location);
  };

  return (
    <article className="cities__card place-card" onMouseEnter={handleListItemHover}>
      {card.isPremium && <PremiumMark />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${card.id}`}>
          <img
            className="place-card__image"
            src={card.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <PlaceCardInfoChildren cardInfo={card} />
      </div>
    </article>
  );
}
