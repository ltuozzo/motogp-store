import classes from './Footer.module.css';

function Footer() {
    return (
        <footer className={`${classes.column} ${classes.footer}`}>
            <div className={classes.row}>
                <div className={classes.column}>
                    <div>
                        <img src='/svg/motogp-logo.svg' className={classes.motogpLogo} />
                    </div>
                    <div className={classes.row}>
                        <p>TOP CATEGORIES</p>
                        <p>CUSTOMER CARE</p>
                    </div>
                    <div className={`${classes.row} ${classes.list}`}>
                        <ul>
                            <li>MotoGP Brands</li>
                            <li>Motorcycle Brands</li>
                            <li>eSPORTS</li>
                            <li>Outlet</li>
                        </ul>
                        <ul>
                            <li>Help & Contact</li>
                            <li>Shop info</li>
                            <li>Shipping and Delivery</li>
                            <li>Return policy</li>
                        </ul>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms and conditions</li>
                            <li>Track orders</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.wrapper}>
                    <p>MotoGP Newsletter</p>
                    <p>Subscribe to the Newsletter to get the 10% off</p>
                </div>
            </div>
            <div>
                <img src='/svg/logo-icon-white.svg' className={classes.logoIconWhite} />
            </div>
            <div className={`${classes.row} ${classes.footerNotes}`}>
                <div className={classes.notesLeft}>
                    <p>MotoGP Store © 2022  |  Kooomo By Zerogrey  |  P. IVA IT08003340018</p>
                </div>
                <div className={classes.paymentMethods}>
                    <img src='/images/visa_hr.png' className={classes.motogpLogo} />
                    <img src='/images/maestro_hr.png' className={classes.motogpLogo} />
                    <img src='/images/mastercard_hr.png' className={classes.motogpLogo} />
                    <img src='/images/paypal_hr.png' className={classes.motogpLogo} />
                </div>
                <div className={classes.notesRight}>
                    <p>Sitemap | Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;