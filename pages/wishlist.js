export default function Wishlist() {
  return (
    <>
      <h1 className='text-center text-5xl font-black py-16'>My Wishlist</h1>

      <div style={{ columnCount: 2, columnGap: 32 }}>
        <div class='inline-block mb-4'>
          <img src='https://static.cmra.nu/139/1392301483_624.jpg' className='rounded-sm' />
          <div className='py-4'>
            <span className='block font-bold tracking-wide'>Sony A6000</span>
            <span className='text-gray-400 text-sm tracking-wide'>cameranu.nl</span>
          </div>
        </div>
        <div class='inline-block mb-4'>
          <img src='https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,w_982,dpr_1.0,q_auto:good,b_rgb:f5f6f4/v4/catalog/product/asset/1/4/b/4/14b4a2efc7826c30c9e50bd8f39a93ce6c4198d2_BIKVEL003GRE_UK_MadexVeloretti_3_Speed_Caferacer_City_Bike_Green_ar3_2_LB02_LS.jpg' className='rounded-sm' />
          <div className='py-4'>
            <span className='block font-bold tracking-wide'>Veloretti Caféracer</span>
            <span className='text-gray-400 text-sm tracking-wide'>veloretti.nl</span>
          </div>
        </div>
        <div class='inline-block mb-4'>
          <img src='https://static.gamma.nl/dam/273877/123' className='rounded-sm' />
          <div className='py-4'>
            <span className='block font-bold tracking-wide'>Veloretti Caféracer</span>
            <span className='text-gray-400 text-sm tracking-wide'>veloretti.nl</span>
          </div>
        </div>
      </div>
    </>
  )
}
