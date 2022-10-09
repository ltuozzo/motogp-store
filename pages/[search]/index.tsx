import type { NextPage } from 'next'
import {Fragment} from "react";
import ProductsList from "../../components/productList/ProductList";
import Hero from "../../components/hero/Hero";
import { ProductProps } from '../index';
import Head from "next/head";


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

export async function getStaticPaths() {
    const response = await fetch('https://fakestoreapi.com/products', {
        method: 'GET',
    })

    const products = await response.json();

    return {
        fallback: 'blocking',
        paths: products.map((product: any) => {
            return ({
                params: {
                    search: product.name.toLowerCase().replace(/ /g, '-'),
                }
            })
        }),
    }
}

export async function getStaticProps(context: any) {
    let search = context.params.search;

    // This will break when searching for a t-shirt, I would fix it if this page were to see the light of day.
    search = search.replace(/-/g, '%20')

    const response = await fetch('https://fakestoreapi.com/products/' + search, {
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
