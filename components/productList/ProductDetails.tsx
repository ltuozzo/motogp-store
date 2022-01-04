import classes from './ProductDetails.module.css';
import {useRouter} from "next/router";
import {ProductDetails} from "../../pages";

function ProductDetails(props: ProductDetails) {
    const router = useRouter();

    function itemClickedHandler() {
        router.push(props.url);
    }
    return(
        <li onClick={() => itemClickedHandler()} className={classes.item}>
            <img src='/svg/favorite.svg' className={classes.favoriteIcon} />
            <img src={props.image} className={classes.productImage}/>
            <p className={classes.discount}>{props.discount}%</p>
            <p className={classes.name}>{props.name}</p>
            <div className={classes.price}>
                <p className={classes.totalPrice}>€ {props.totalPrice}</p>
                <p className={classes.discountedPrice}>€ {props.discountedPrice}</p>
            </div>
        </li>
    )
}

export default ProductDetails;