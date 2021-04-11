import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Grid from '~/components/wishlist/grid'
import Item from '~/components/wishlist/item'


export default function Wishlist ({ products }) {
  const items = products.map(item => (
    <Item
      key={item.slug}
      name={item.name}
      url={item.url}
      imageUrl={item.imageUrl}
      price={item.price}
    />
  ))
  return (
    <>
      <Head>
        <title>Wishlist – Tom Bakker</title>
      </Head>
      <div className='my-6'>
        <Link href='/'>
          <div class='flex items-center text-gray-500 cursor-pointer hover:text-green-600'>
            <svg className='w-4 h-4 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Home</span>
          </div>
        </Link>
        <h1 className='text-4xl font-semibold mt-2 mb-1'>Wishlist</h1>
        <p className='text-gray-600'>Products I'm interested in</p>
      </div>
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Grid columns={2} gap={16}>
          {items}
        </Grid>
      </motion.div>
    </>
  )
}

export async function getStaticProps(context) {
  let url = 'https://api.sheety.co/2743bb35d14dc7bca4c373890c7a270e/wishlist/products';
  let response = await fetch(url)
  let data = await response.json()

  return {
    props: { products: data.products }
  }
}
