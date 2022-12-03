import { useState } from "react"

const MenuItems = () => {
    return (
        <>
            <li><a href="#temat">Temat</a></li>
            <li><a href="#">Kalendarz</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Partnerzy</a></li>
            <li><a href="#">Kontakt</a></li>
        </>
    )
}

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="header__wrapper">
            <nav className="header">
                <ul className="header__menu--desktop">
                    <MenuItems />
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
                    <MenuItems />
                </ul>
            </nav>
        </div>
    )
}

export default Header
