import React from 'react';
import css from './style.module.scss';
import InputField from '../../widgets/inputField';
import BlueBaseButton from '../../widgets/blueBaseButton';
import { logIn } from '../../api';
class Login extends React.Component {

  state = {
    mailId: '',
    password: '',
    isLoginLoading: false,
    passwordMismatch: false,
  }

  isInvalidEmail = (mail) => {
    return !new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(mail);
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      passwordMismatch: false,
      isLoginLoading: false,
    });
  }

  onLogin = () => {
    const { mailId, password } = this.state;
    this.setState({ isLoginLoading: true })
    logIn(mailId, password).then(() => {
      localStorage.setItem('isLoggedIn', 'yes')
      this.setState({ isLoginLoading: false })
    }, () => { console.log('failed'); this.setState({ passwordMismatch: true, isLoginLoading: false }) });
  }

  onLogout = () => {
    window.localStorage.setItem('isLoggedIn', 'no');
    window.location.reload();
  }

  render() {
    const { isLoginLoading, mailId } = this.state;
    return (
      <>
        {
          localStorage.getItem('isLoggedIn') === 'yes' ?
            <div className={css.login_page} >
             {`Hi ${mailId}`}
              <BlueBaseButton text={'Logout'} onClick={this.onLogout} />
            </div>
            :
            <div className={css.login_page}>
              <InputField label={'Email'} type={'email'} onChange={this.handleInputChange} value={this.state.mailId} name={'mailId'} error={this.state.mailId && this.isInvalidEmail(this.state.mailId)} errorMessage={'Invalid Email'} />
              <InputField label={'Password'} type={'password'} onChange={this.handleInputChange} value={this.state.password} name={'password'} error={this.state.password && this.state.passwordMismatch} errorMessage={'Email or password do not match'} />
              <BlueBaseButton text={'Login'} isLoading={isLoginLoading} onClick={this.onLogin} disabled={this.isInvalidEmail(this.state.mailId) || this.state.passwordMismatch || !this.state.password}/>
            </div>
        }
      </>
    )
  }
}

export default Login;
