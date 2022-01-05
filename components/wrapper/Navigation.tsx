import classes from './Navigation.module.css';
import React from "react";

function Navigation() {
    const menu = React.useRef() as React.MutableRefObject<HTMLDivElement>

    function toggleMobileMenu() {
        menu.current.classList.toggle(classes.open);
    }

    return (
        <header className={classes.navigation}>
            <img src='/svg/motogp-logo.svg' className={classes.motogpLogo} />
            <div className={classes.hamburgerIcon} onClick={() => toggleMobileMenu()} ref={menu}>
                <div className={classes.bar1}/>
                <div className={classes.bar2}/>
                <div className={classes.bar3}/>
                <ul className={classes.mobileMenu}>
                    <li><p>MotoGp FANS</p></li>
                    <li><p>MOTORCYCLE BRANDS</p></li>
                    <li><p>eSPORTS</p></li>
                    <li><p>BLACK FRIDAY 2020</p></li>
                    <li className={classes.icons}>
                        <img src='/svg/search.svg' className={classes.search} />
                        <img src='/svg/favorite.svg' />
                        <img src='/svg/helmet.svg' />
                        <img src='/svg/cart.svg' />
                        <img src='/svg/logo-icon-white.svg' />
                    </li>
                </ul>
            </div>
            <div className={classes.desktopMenu}>
                <p>MotoGp FANS</p>
                <p>MOTORCYCLE BRANDS</p>
                <p>eSPORTS</p>
                <p>BLACK FRIDAY 2020</p>
                <div className={classes.icons}>
                    <img src='/svg/search.svg' className={classes.search} />
                    <img src='/svg/favorite.svg' />
                    <img src='/svg/helmet.svg' />
                    <img src='/svg/cart.svg' />
                    <img src='/svg/logo-icon-white.svg' />
                </div>
            </div>
        </header>
    );
}

export default Navigation;