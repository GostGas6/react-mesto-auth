function Footer() {
    const currentYear = new Date().getFullYear()
    return ((
        <footer className="footer">
            <p>© {currentYear} Mesto Russia</p>
        </footer>
    ))
}

export default Footer;