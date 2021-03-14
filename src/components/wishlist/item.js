import extractHostname from '~/utils/extract-hostname'

export default function Item ({ name, url, imageUrl, price }) {
  return (
    <a href={url} className='block bg-white rounded-2xl overflow-hidden relative'>
      <div className='absolute top-4 right-4 bg-gray-900 text-white font-mono rounded p-2'>
       {price}
      </div>
      <img src={imageUrl} className='rounded-sm' />
      <div className='p-4'>
        <span className='block font-bold tracking-wide'>{name}</span>
        <span className='text-gray-500 text-sm tracking-wide'>{extractHostname(url)}</span>
      </div>
    </a>
  )
}
