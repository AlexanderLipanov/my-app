import React from "react";
import { NavLink, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import './Home.css';
import axios from "axios";

const instance = axios.create({
    
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'f00dbd61-4234-4717-a1c5-1f810d6208a3'
    }
});

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            resultCode: null,
        }
        this.AuthMe();
    }

    inputEmail = (e) => {

        // записывает электронную почту из формы в state

        this.setState({email: e.target.value});
    }

    inputPassword = (e) => {

        // записывает пароль из формы в state

        this.setState({password: e.target.value});
    }

    SignIn = () => {

        // Отправляет данные (электронную почту и пароль) на сервер для логинизации (входа в приложение)

        instance.post('/auth/login', {
            email: this.state.email,
            password: this.state.password,
        }  ).then( response => this.setState({ resultCode: response.data.resultCode }) );
    }

    AuthMe = () => {

        // При открывании страницы входа (<Home />) в приложение проверяет, является ли пользователь залогирован и если да, 
        // то атоматически входит в приложение

        instance.get('/auth/me').then( response => this.setState({ resultCode: response.data.resultCode }) );
    }


        render() {

            if ( this.state.resultCode === 0 ) return <Redirect to='Chat' />;   // При аутентификации перенаправляет в приложение 
                                                                                // (осуществляет вход в приложение)

            return(
                <div className="Home">
                <div className="SignInBlock">
                    <div className="TitleBlock">
                        <p className="SignInAccount">
                            Войти в аккаунт
                        </p>
                        <p className="Request">
                            Пожалуйста, войдите в свой аккаунт
                        </p>
                    </div>
                    <div className="FormBlockSignInAccount">
                    <form action="" className="FormSignInAccount">
                        <div className="InputEmailBlock">
                            <input onChange={this.inputEmail} value={this.state.email} type="text" className="InputEmail" placeholder="E-Mail" />
                        </div>
                        <div className="InputPasswordBlock">
                            <input onChange={this.inputPassword} value={this.state.password} type="password" className="InputPassword" placeholder="Пароль" />
                        </div>
                    </form>
                    <button onClick={this.SignIn} className="ButtonSignInAccount">ВОЙТИ В АККАУНТ</button>
                    <NavLink exact to='/Registration' className="ButtonRegistretion">Зарегистрироваться</NavLink>
                    </div>
                </div>
            </div>
            );
        }
    }

export default Home;
