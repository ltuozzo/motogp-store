import type { NextPage } from 'next'
import {Fragment} from "react";
import ProductsList from "../components/productList/ProductList";
import Hero from "../components/hero/Hero";
import Head from "next/head";

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
        <Head>
          <title>MotoGP Store</title>
          <meta name='MotoGP Store' content='Buy all your MotoGp clothes here!' />
        </Head>
        <Hero />
        <ProductsList products={props.products} />
      </Fragment>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://fakestoreapi.com/products', {
    method: 'GET',
  })

  const products = await response.json();

  return {
    props: {
      // I'm only using type any because writing the whole type of this particular value would be a waste of time for the purpose of this exercise
      // given how big is the information of a single product.
      products: products.map((product: any) => ({
        key: product.title,
        name: product.title,
        image: product.image,
        discount: 15,
        totalPrice: product.price,
        discountedPrice: product.price,
        url: product.image,
      })),
    },
  };
}

export default Home;
