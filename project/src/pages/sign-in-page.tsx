import Logo from '../components/logo/logo';
import UserAuthentication from '../components/user-authentication/user-authentication';
import  Footer from '../components/footer/footer';

function SignInPage(): JSX.Element {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo classLogo="logo__link" />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <UserAuthentication />
      </div>

      <Footer />
    </div>
  );
}

export default SignInPage;
