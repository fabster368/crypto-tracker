import React from 'react'

const CoinItem = (props) => {
  
  const id = props.coins.id
  console.log(id);
  
  return (
    
    <div id={id} className='gap-1 flex justify-between items-center text-xs text-white shadow-xl shadow-slate-900 rounded-lg my-2 mx-1 cursor-pointer hover:scale-105 ease-in duration-100 sm:text-base'>
       <p className='pl-2'>{props?.coins.market_cap_rank}</p>
       <div className='flex items-center'>
          <img className='h-20 mr-4 w-auto' src={props?.coins.image} alt=''></img>
          <p>{props?.coins.symbol}</p>
       </div>
       <p>${props?.coins.current_price}</p>
       <p>{props?.coins.price_change_percentage_24h}%</p>
       <p className='hidden sm:block'>${props?.coins.total_volume}</p>
       <p className='hidden sm:block pr-2'>${props?.coins.market_cap}</p>
    </div>
    
  )
}

export default CoinItem
