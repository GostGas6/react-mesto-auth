import logo from '../images/__logo/Vector.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Header(
    {
        profileEmail,
        onSignOut
    }
) {
    const location = useLocation()

    function Header() {
        return ((
            <header className="header">
                <img className="header__logo" src={logo} alt="Логотип" />
                {
                    location.pathname === '/sign-in'
                    && <Link
                        to="/sign-up"
                        className="header__auth"
                    >
                        Регистрация
                    </Link>
                }
                {
                    location.pathname === '/sign-up'
                    && <Link
                        to="/sign-in"
                        className="header__auth"
                    >
                        Вход
                    </Link>
                }
                {
                    location.pathname === '/'
                    && <nav
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
            </header>
        ))
    }}
