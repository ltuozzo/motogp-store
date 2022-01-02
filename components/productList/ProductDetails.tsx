import {useRouter} from "next/router";
import {ProductDetails} from "../../pages";

function ProductDetails(props: ProductDetails) {
    const router = useRouter();

    function itemClickedHandler() {
        router.push(props.url);
    }
    return(
        <li onClick={() => itemClickedHandler()}>
            <img src='/images/favorite-icon.svg' />
            <img src={props.image} />
            <p>{props.discount}</p>
            <p>{props.name}</p>
            <p>{props.totalPrice}</p>
            <p>{props.discountedPrice}</p>
        </li>
    )
}

export default ProductDetails;