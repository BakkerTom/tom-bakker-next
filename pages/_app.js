import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <main className='max-w-3xl mx-auto px-8 mb-16'>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
