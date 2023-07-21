import logo from '../images/__logo/Vector.svg';
import { Link, Route, Routes, useLocation, useLocation } from 'react-router-dom';

export default function Header(
    {
        profileEmail,
        onSignOut
    }
) {

    return ((
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип" />
            <Routes>
                <Route
                    path="/sign-in"
                    element={
                        <Link
                            to="/sign-up"
                            className="header__auth"
                        >
                            Регистрация
                        </Link>
                    }
                />
                <Route
                    path="/sign-up"
                    element={
                        <Link
                            to="/sign-in"
                            className="header__auth"
                        >
                            Вход
                        </Link>
                    }
                />
                <Route
                    path='/*'
                    element={
                        <nav
                            className="header__menu">
                            <span
                                className="header__profile-info"
                            >
                                {profileEmail}
                            </span>
                            <button
                                className="header__signout-button"
                                onClick={() => onSignOut()}
                            >
                                Выйти
                            </button>
                        </nav>
                    }
                />
            </Routes>
        </header>
    ))

}
