import {JSX} from 'react';

export default function PremiumMark({isPremium}: {isPremium: boolean}): JSX.Element {
  if (!isPremium) {
    return (
      <>
      </>
    );
  }

  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}
