import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tom Bakker</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;900&display=swap" rel="stylesheet"></link>

        <body className='bg-gray-100 font-rubik'/>
      </Head>
      <div className='max-w-3xl mx-auto px-4 mb-8'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
