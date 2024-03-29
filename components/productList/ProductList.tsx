import classes from './ProductList.module.css';
import {ProductProps} from "../../pages";
import ProductDetails from "./ProductDetails";

function ProductsList(props: ProductProps) {
    return (
        <div className="container">
            <ul className={classes.list}>
                {props.products.map(product => (
                    <ProductDetails
                        key={product.key}
                        name={product.name}
                        image={product.image}
                        discount={product.discount}
                        totalPrice={product.totalPrice}
                        discountedPrice={product.discountedPrice}
                        url={product.url}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ProductsList;