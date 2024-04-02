import {JSX} from 'react';
import CardInfo from '../../types/card-info.ts';
import PlaceCardInfoChildren from '../cards-common/place-card-info-children.tsx';
import PremiumMark from '../cards-common/premium-mark.tsx';
import {Link} from 'react-router-dom';

export default function FavoritesCard({cardInfo}: {cardInfo: CardInfo}): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {cardInfo.isPremium && <PremiumMark />}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${cardInfo.id}`}>
          <img
            className="place-card__image"
            src={cardInfo.previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <PlaceCardInfoChildren cardInfo={cardInfo} />
      </div>
    </article>
  );
}
