import { Link, useNavigate } from 'react-router-dom';
import { memo } from 'react';

import { logoutAction } from '../../store/api-actions';

import { AppRoute, AuthorizationStatus } from '../../consts';

import { useAppDispatch } from '../../hooks/';
import { UserData } from '../../types/user-data';

type Props = {
  userData: UserData,
  authorizationStatus: AuthorizationStatus,
}

function User({userData, authorizationStatus}: Props): JSX.Element {
  const { avatarUrl, name } = userData;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyListPage}>
            <img src={avatarUrl} alt={name} width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          to='/'
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            if (authorizationStatus===AuthorizationStatus.Auth) {
              dispatch(logoutAction());
            } else {
              navigate(AppRoute.SignInPage);
            }
          }}
        >
          {authorizationStatus===AuthorizationStatus.Auth ? 'Sign out':'Sign in'}
        </Link>
      </li>
    </ul>
  );

}

export default memo(User, (prevProps, nextProps) =>
  prevProps.userData === nextProps.userData,
);
