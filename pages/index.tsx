import type { NextPage } from 'next'
import {Fragment} from "react";
import ProductsList from "../components/productList/ProductList";
import Hero from "../components/hero/Hero";

export type ProductDetails = {
  key: string,
  name: string,
  image: string,
  discount: number,
  totalPrice: number,
  discountedPrice: number,
  url: string,
}

export type ProductProps = {
  products: Array<ProductDetails>
}

const Home: NextPage<ProductProps> = (props) => {
  return (
      <Fragment>
        <Hero />
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
        key: product.name,
        name: product.name,
        image: product.images.medium,
        discount: Math.round(100 - product.price.sell * 100 / product.price.to_discount),
        totalPrice: product.price.to_discount,
        discountedPrice: product.price.sell,
        url: product.url,
      })),
    },
  };
}

export default Home;
