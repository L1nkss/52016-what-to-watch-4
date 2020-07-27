import {Footer} from "@components/footer/footer";
import {Redirect} from "react-router";
import Header from "@components/header/header.connect";
import {AuthorizationStatus} from "@redux/reducers/user/constants/constants";
import {RoutePathes} from "../../constants/constants";
import * as React from "react";
import {TUserAuthStatus} from "../../constants/types";

interface ISignIn {
  onSubmit: ({login: string, password: number}) => void,
  authorizationStatus: TUserAuthStatus
}

export class SignIn extends React.PureComponent<ISignIn> {
  private loginRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;
  constructor(props) {
    super(props);
    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();
    this.obSubmitHandler = this.obSubmitHandler.bind(this);
  }
  obSubmitHandler(evt) {
    evt.preventDefault();
    this.props.onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value
    });
  }
  render() {
    if (this.props.authorizationStatus === AuthorizationStatus.AUTH) {
      return <Redirect to={RoutePathes.ROOT} />;
    }
    return (
      <div className="user-page">
        <Header isUserPage={true} hideAvatar={true} >
          <h1 className="page-title user-page__title">Sign in</h1>
        </Header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this.obSubmitHandler}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" required={true} ref={this.loginRef} type="email" placeholder="Email address" name="user-email" id="user-email"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" required={true} autoComplete="on" ref={this.passwordRef} type="password" placeholder="Password" name="user-password" id="user-password"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
