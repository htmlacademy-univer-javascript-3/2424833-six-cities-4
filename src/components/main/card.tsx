import {JSX, MouseEvent} from 'react';
import CardInfo from '../../types/card-info.ts';
import PlaceCardInfoChildren from '../cards-common/place-card-info-children.tsx';
import PremiumMark from '../cards-common/premium-mark.tsx';
import {Link} from 'react-router-dom';
import Location from '../../types/location.ts';

type Props = {
  card: CardInfo;
  onListItemHover: (listPoint: Location) => void;
  classPrefix: string;
}

export default function Card({card, onListItemHover, classPrefix}: Props): JSX.Element {
  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(card.location);
    // TODO: change color back to blue
  };

  return (
    <article className={`${classPrefix}__card place-card`} onMouseEnter={handleListItemHover}>
      {card.isPremium && <PremiumMark />}
      <div className={`${classPrefix}__image-wrapper place-card__image-wrapper`}>
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
