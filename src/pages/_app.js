import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <main className='bg-gray-100'>
      <Head>
        <title>Tom Bakker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-3xl mx-auto px-8 mb-16'>
        <Component {...pageProps} />
      </div>
    </main>
  )
}

export default MyApp
