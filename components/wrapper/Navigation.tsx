import classes from './Navigation.module.css';

function Navigation(props: any) {
    return (
        <header >
            <img src='/svg/motogp-logo.svg' className={classes.motogpLogo} />
            <div>
                <p>MotoGp FANS</p>
                <p>MOTORCYCLE BRANDS</p>
                <p>eSPORTS</p>
                <p>BLACK FRIDAY 2020</p>
            </div>
            <div>
                <img src='/svg/search.svg' className={classes.search} />
                <img src='/svg/favorite.svg' className={classes.favorite} />
                <img src='/svg/helmet.svg' className={classes.helmet} />
                <img src='/svg/cart.svg' className={classes.cart} />
                <img src='/svg/logo-icon-white.svg' className={classes.logoIcon} />
            </div>
        </header>
    );
}

export default Navigation;