type ProductDetails = {
    key: string,
    name: string,
}

function ProductDetails(props: ProductDetails) {
    return(
        <li>
            <p>{props.name}</p>
        </li>
    )
}

export default ProductDetails;