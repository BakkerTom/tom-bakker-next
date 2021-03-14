import Head from 'next/head'
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
      <h1 className='text-5xl font-black py-16'>My Wishlist</h1>

      <Grid columns={2} columnGap={32}>
        {items}
      </Grid>
    </>
  )
}
