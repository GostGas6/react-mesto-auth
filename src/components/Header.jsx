import logo from '../images/__logo/Vector.svg';

function Header() {
    return ((
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип" />
        </header>
    ))
}

export default Header;