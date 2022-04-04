import { useRef, FormEvent, ChangeEvent} from 'react';

import {useAppDispatch} from '../hooks';

import {AuthData} from '../types/auth-data';
import {loginAction} from '../store/api-actions';

import Logo from '../components/logo/logo';
import  Footer from '../components/footer/footer';

import { ErrorMessages } from '../consts';

function SignInPage(): JSX.Element {
  //заменить на UseState
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const emailToggleHandler = (evt:ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null) {
      const email = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i;
      if (emailRef.current.value.match(email)) {
        evt.target.setCustomValidity('');
      } else {
        evt.target.setCustomValidity(ErrorMessages.EMAIL);
      }
    }

    evt.target.reportValidity();
  };

  const passwordToggleHandler = (evt:ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    if (passwordRef.current !== null) {
      const passWord = /^[^\s][0-9][a-zA-Zа-яА-ЯёЁ\s]*$/;

      if (passwordRef.current.value.match(passWord)) {
        evt.target.setCustomValidity('');
      } else {
        evt.target.setCustomValidity(ErrorMessages.PASSWORD);
      }
    }

    evt.target.reportValidity();
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo classLogo="logo__link" />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form"  action="#" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                ref={emailRef}
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onInput={emailToggleHandler}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                ref={passwordRef}
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
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
      </div>

      <Footer />
    </div>
  );
}

export default SignInPage;
