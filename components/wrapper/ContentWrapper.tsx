import classes from './ContentWrapper.module.css';
import {Fragment} from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

function ContentWrapper(props: any) {
    return (
        <Fragment >
            <Navigation />
            <main className={classes.main}>{props.children}</main>
            <Footer />
        </Fragment>
    );
}

export default ContentWrapper;