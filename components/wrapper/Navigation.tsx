import classes from './Navigation.module.css';
import React from "react";
import {useRouter} from "next/router";

function Navigation() {
    const menu = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const bar1 = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const bar2 = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const bar3 = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    const searchInput = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const searchInputMobile = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const router = useRouter();

    function logoClickedHandler() {
        router.push('/');
    }

    function handleSearch(e: React.MutableRefObject<HTMLInputElement>) {
        let search = e.current.value;

        search = search.replace(/ /g, '-');

        if(e === searchInputMobile){
            menu.current.classList.toggle(classes.open);
        }

        router.push('/' + search);
    }

    function toggleMobileMenu(e: React.MouseEvent<HTMLDivElement>) {
        if (e.target === bar1.current || e.target === bar2.current || e.target === bar3.current) {
            menu.current.classList.toggle(classes.open);
        }
    }

    return (
        <header className={classes.navigation}>
            <img src='/svg/motogp-logo.svg' className={classes.motogpLogo} onClick={() => logoClickedHandler()}/>
            <div className={classes.hamburgerIcon} onClick={(e) => toggleMobileMenu(e)} ref={menu}>
                <div className={classes.bar1} ref={bar1}/>
                <div className={classes.bar2} ref={bar2}/>
                <div className={classes.bar3} ref={bar3}/>
                <ul className={classes.mobileMenu}>
                    <li><p>MotoGp FANS</p></li>
                    <li><p>MOTORCYCLE BRANDS</p></li>
                    <li><p>eSPORTS</p></li>
                    <li><p>BLACK FRIDAY 2020</p></li>
                    <li className={classes.icons}>
                        <input type='text' name='search' placeholder='Search' className={classes.inputEmail} ref={searchInputMobile}/>
                        <img src='/svg/search.svg' className={classes.search} onClick={() => handleSearch(searchInputMobile)}/>
                        {/*I had to make a design decision regarding the search, so I decided to use the space
                        these four icons were occupying to make space for the search.*/}
                        {/*<img src='/svg/favorite.svg' />*/}
                        {/*<img src='/svg/helmet.svg' />*/}
                        {/*<img src='/svg/cart.svg' />*/}
                        {/*<img src='/svg/logo-icon-white.svg' />*/}
                    </li>
                </ul>
            </div>
            <div className={classes.desktopMenu}>
                <p>MotoGp FANS</p>
                <p>MOTORCYCLE BRANDS</p>
                <p>eSPORTS</p>
                <p>BLACK FRIDAY 2020</p>
                <div className={classes.icons}>
                    <input type='text' name='search' placeholder='Search' className={classes.inputEmail} ref={searchInput}/>
                    <img src='/svg/search.svg' className={classes.search} onClick={() => handleSearch(searchInput)}/>
                    {/*<img src='/svg/favorite.svg' />*/}
                    {/*<img src='/svg/helmet.svg' />*/}
                    {/*<img src='/svg/cart.svg' />*/}
                    {/*<img src='/svg/logo-icon-white.svg' />*/}
                </div>
            </div>
        </header>
    );
}

export default Navigation;