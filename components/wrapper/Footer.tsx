import classes from './Footer.module.css';
import {Fragment} from "react";

function Footer(props: any) {
    return (
        <footer >
            <div>
                <div>
                    <div>
                        <img src='/svg/motogp-logo.svg' className={classes.motogpLogo} />
                    </div>
                    <div>
                        <p>TOP CATEGORIES</p>
                        <p>CUSTOMER CARE</p>
                    </div>
                    <div>
                        <ul>
                            <li>MotoGp Brands</li>
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
                <div>
                    <p>MotoGP Newsletter</p>
                    <p>Subscribe to the Newsletter to get the 10% off</p>
                </div>
            </div>
            <div>
                <img src='/svg/logo-icon-white.svg' className={classes.logoIconWhite} />
            </div>
            <div>
                <p>MotoGP Store © 2022  |  Kooomo By Zerogrey  |  P. IVA IT08003340018</p>
                <div>
                    <img src='/images/visa_hr.png' className={classes.motogpLogo} />
                    <img src='/images/maestro_hr.png' className={classes.motogpLogo} />
                    <img src='/images/mastercard_hr.png' className={classes.motogpLogo} />
                    <img src='/images/paypal_hr.png' className={classes.motogpLogo} />
                </div>
                <p>Sitemap | Privacy Policy</p>
            </div>
        </footer>
    );
}

export default Footer;