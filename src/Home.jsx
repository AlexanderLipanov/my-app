import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    inputEmail = (e) => {
        this.setState({email: e.target.value});
        console.log(this.state.email);
    }

    inputPassword = (e) => {
        this.setState({password: e.target.value});
        console.log(this.state.password);
    }

        render() {
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
                    <button className="ButtonSignInAccount">ВОЙТИ В АККАУНТ</button>
                    <NavLink to='/Registration' className="ButtonRegistretion">Зарегистрироваться</NavLink>
                    </div>
                </div>
            </div>
            );
        }
    }

export default Home;