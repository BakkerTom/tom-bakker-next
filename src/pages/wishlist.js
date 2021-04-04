import Head from 'next/head'
import Link from 'next/link'

import Grid from '~/components/wishlist/grid'
import Item from '~/components/wishlist/item'

import data from '~/data/wishlist'

export default function Wishlist () {
  const items = data.map(item => (
    <Item
      key={item.url}
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
          <div class='flex items-center text-gray-500'>
            <svg className='w-4 h-4 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Home</span>
          </div>
        </Link>
        <h1 className='text-4xl font-semibold mt-2 mb-1'>Wishlist</h1>
        <p className='text-gray-600'>Products I'm interested in</p>
      </div>
      <Grid columns={2} gap={16}>
        {items}
      </Grid>
    </>
  )
}
