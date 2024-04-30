import {UserData} from '../../types/user-data.ts';
import {JSX} from 'react';
import classNames from 'classnames';

export default function HostInfo({user, description}: {user: UserData, description: string}): JSX.Element {
  const avatarClassNames = classNames(
    'offer__avatar-wrapper',
    user.isPro ? 'offer__avatar-wrapper--pro' : '',
    'user__avatar-wrapper');

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={avatarClassNames}>
          <img
            className="offer__avatar user__avatar"
            src={user.avatarUrl}
            width={74}
            height={74}
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{user.name}</span>
        <span className="offer__user-status">{user.isPro ? 'Pro' : 'Normal'}</span>
      </div>
      <div className="offer__description">
        <p className="offer__text">{description}</p>
      </div>
    </div>
  );
}
