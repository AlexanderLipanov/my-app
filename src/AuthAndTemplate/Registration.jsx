import React from "react";
import './Registration.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Registration extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            name: '',
            password: '',
            repeatPassword: '',
        }
    }

    changeRegistrationEmail = (e) => {

        // Записывает электронную почту в state

        this.setState({ email: e.target.value });
    }

    changeRegistrationName = (e) => {

        // Записывает имя в state

        this.setState({ name: e.target.value });
    }

    changeRegistrationPassword = (e) => {

        // Записывает пароль в state

        this.setState({ password: e.target.value });
    }

    changeRegistrationRepeatPassword = (e) => {

        // Записывает повторенный пароль в state

        this.setState({ repeatPassword: e.target.value });
    }

    render() {
        return (
            <div className="Registration">
                <div className="RegistrationBlock">
                    <div className="RegistrationTitlesBlock">
                        <p className="RegistrationTitle">
                            Регистрация
                        </p>
                        <p className="RegistrationRequestTitle">
                            Для входа в чат, вам нужно зарегистрироваться
                        </p>
                    </div>
                    <div className="RegistrationFormBlock">
                        <form  action="" className="RegistrationForm">
                            <div className="InputEmailRegistrationBlock">
                                <input onChange={this.changeRegistrationEmail} value={this.state.email} type="text" className="InputEmailRegistration" placeholder="E-Mail" />
                            </div>
                            <div className="InputNameRegistrationBlock">
                                <input onChange={this.changeRegistrationName} value={this.state.name} type="text" className="InputNameRegistration" placeholder="Ваше имя" />
                            </div>
                            <div className="InputPasswordRegistrationBlock">
                                <input onChange={this.changeRegistrationPassword} value={this.state.password} type="text" className="InputPasswordRegistration" placeholder="Пароль" />
                            </div>
                            <div className="InputRepeatPasswordRegistrationBlock">
                                <input onChange={this.changeRegistrationRepeatPassword} value={this.state.repeatPassword} type="password" className="InputRepeatPasswordRegistration" placeholder="Повторить пароль" />
                            </div>
                        </form>
                        <button className="RegistrationYourAccount">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                        <Link className="SignInYourAccount" to='/'>Войти в аккаунт</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;