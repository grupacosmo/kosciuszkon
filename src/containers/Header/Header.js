import { useState } from "react"

const MenuItems = ({setIsMenuOpen}) => {
    const handleClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <li><a onClick={handleClick} href="#o wydarzeniu">O wydarzeniu</a></li>
            <li><a onClick={handleClick} href="#tematy">Tematy turnieju</a></li>
            <li><a onClick={handleClick} href="#harmonogram">Harmonogram</a></li>
            <li><a onClick={handleClick} href="#zapisy">Zapisy</a></li>
            <li><a onClick={handleClick} href="#partnerzy">Partnerzy</a></li>
            <li><a onClick={handleClick} href="#kontakt">Kontakt</a></li>
        </>
    )
}

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="header__wrapper">
            <nav className="header">
                <ul className="header__menu--desktop">
                    <MenuItems 
                        setIsMenuOpen={setIsMenuOpen}
                    />
                </ul>
                <span className="header__menu--mobile"
                    onClick={() => {
                        setIsMenuOpen((prev) => (!prev))
                    }}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="1em" 
                        height="1em" 
                        preserveAspectRatio="xMidYMid meet" 
                        viewBox="0 0 512 512"
                    >
                        <path 
                            fill="white" 
                            d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
                        />
                    </svg>
                </span>
            </nav>
            <nav 
                className={`header__hamburger-menu ${isMenuOpen ? "open " : " " }`}
            >
                <ul>
                    <MenuItems 
                        setIsMenuOpen={setIsMenuOpen}
                    />
                </ul>
            </nav>
        </div>
    )
}

export default Header
