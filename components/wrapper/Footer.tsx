import classes from './Footer.module.css';

function Footer() {
    return (
        <footer className={`${classes.column} ${classes.footer}`}>
            <div className={classes.row}>
                <div className={`${classes.column} ${classes.leftColumn}`}>
                    <div>
                        <img src='/svg/motogp-logo.svg' className={classes.motogpLogo} />
                    </div>
                    <div className={`${classes.row} ${classes.list}`}>
                        <div className={classes.links}>
                            <p>TOP CATEGORIES</p>
                            <p>MotoGP Brands</p>
                            <p>Motorcycle Brands</p>
                            <p>eSPORTS</p>
                            <p>Outlet</p>
                        </div>
                        <div className={classes.links}>
                            <p>CUSTOMER CARE</p>
                            <p>Help & Contact</p>
                            <p>Shop info</p>
                            <p>Shipping and Delivery</p>
                            <p>Return policy</p>
                        </div>
                        <div className={classes.links}>
                            <br/><br/>
                            <p>Privacy Policy</p>
                            <p>Terms and conditions</p>
                            <p>Track orders</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
                <div className={classes.wrapper}>
                    <p className={classes.title}>MotoGP Newsletter</p>
                    <p>Subscribe to the Newsletter to get the 10% off</p>
                    <div>
                        <input type='email' name='email' placeholder='Insert your email' className={classes.inputEmail}/>
                        <button type='submit' title='Submit' className={classes.submit}>
                            Submit
                            <img src='/svg/arrow.svg' className={classes.arrow} />
                        </button>
                    </div>
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