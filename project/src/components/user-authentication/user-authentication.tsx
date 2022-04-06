
import { useState, ChangeEvent, FormEvent } from 'react';

import { useAppDispatch } from '../../hooks';

import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';

const ErrorMessages = {
  EMAIL: 'Введите корректный email!',
  PASSWORD: 'Пароль должен состоять минимум из одной буквы и цифры! Пробелы запрещены!',
};

function UserAuthentication(): JSX.Element {
  const [ email, setEmail ] = useState<string | null>(null);
  const [ password, setPassword ] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const emailToggleHandler = (evt:ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const emailUser = evt.target.value;
    if (emailUser !== null) {
      const emailSearch = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i;
      if (emailUser.match(emailSearch)) {
        evt.target.setCustomValidity('');
      } else {
        evt.target.setCustomValidity(ErrorMessages.EMAIL);
      }
    }

    evt.target.reportValidity();
  };

  const passwordToggleHandler = (evt:ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    const passwordUser = evt.target.value;

    if ( passwordUser !== null ) {
      const symbolsSearch = /([0-9].*[a-zA-Zа-яА-ЯёЁ])|([a-zA-Zа-яА-ЯёЁ].*[0-9])/;
      const spaceSearch =  /\s/;

      if (symbolsSearch.test(passwordUser) && !spaceSearch.test(passwordUser)) {
        evt.target.setCustomValidity('');
      } else {
        evt.target.setCustomValidity(ErrorMessages.PASSWORD);
      }
    } else {
      evt.target.setCustomValidity(ErrorMessages.PASSWORD);
    }

    evt.target.reportValidity();
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if ( email !== null && password !==null) {
      onSubmit({
        email: email,
        password: password,
      });
    }
  };

  return (
    <form className="sign-in__form"  action="#"
      onSubmit={handleSubmit}
    >
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            onInput={emailToggleHandler}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            onInput={passwordToggleHandler}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in
        </button>
      </div>
    </form>
  );
}
export default UserAuthentication;
