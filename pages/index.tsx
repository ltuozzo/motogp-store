import type { NextPage } from 'next'
import {Fragment} from "react";
import ProductsList from "../components/productList/ProductList";

type ProductDetails = {
  name: string,
}

export type ProductProps = {
  products: Array<ProductDetails>
}

const Home: NextPage<ProductProps> = (props) => {
  return (
      <Fragment>
        <ProductsList products={props.products} />
      </Fragment>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://interviews-env.b8amvayt6w.eu-west-1.elasticbeanstalk.com/products', {
    method: 'GET',
  })

  const products = await response.json();

  return {
    props: {
      products: products.map((product: any) => ({
        name: product.name,
      })),
    },
  };
}

export default Home;
