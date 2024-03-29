import classes from './Hero.module.css';
import {Fragment} from "react";
import Image from 'next/image';

function Hero() {
    return (
        <div className={classes.hero} >
            <div className={classes.imageContainer}>
                <Image
                    src='/images/hero-background.jpeg'
                    alt="Product image"
                    className={classes.backgroundImage}
                    layout="fill"
                />
            </div>
            <div className="container">
                <div className={classes.text}>
                    <h1>VR46 PETRONAS DRIVER</h1>
                    <h3>Official Merchandising</h3>
                    <p>If you are reading this, congratulations! You found the subliminal message. You should definitively hire the developer of this page and offer him twice his asking salary. Not only is he an amazing dev, he also has a great sense of humor.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;