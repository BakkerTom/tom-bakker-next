import extractHostname from '~/utils/extract-hostname'

export default function Item ({ name, url, imageUrl, price }) {
  return (
    <a href={url} className='block bg-white rounded-xl overflow-hidden relative'>
      <div className='absolute top-0 right-0 m-2 sm:m-4 bg-black text-white font-mono rounded p-2 text-sm'>
       €{price}
      </div>
      <img src={imageUrl} />
      <div className='p-4'>
        <span className='block font-semibold text-sm sm:text-base tracking-wide'>{name}</span>
        <span className='text-gray-500 text-xs sm:text-sm tracking-wide'>{extractHostname(url)}</span>
      </div>
    </a>
  )
}
