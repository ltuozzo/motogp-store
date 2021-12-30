import classes from './ProductList.module.css';
import {ProductProps} from "../../pages";
import ProductDetails from "./ProductDetails";

function ProductsList(props: ProductProps) {
    return (
        <ul className={classes.list}>
            {props.products.map(product => (
                <ProductDetails
                    key={product.name}
                    name={product.name}
                />
            ))}
        </ul>
    );
}

export default ProductsList;