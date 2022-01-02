import classes from './ContentWrapper.module.css';

function ContentWrapper(props) {
    return (
        <div >
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default ContentWrapper;