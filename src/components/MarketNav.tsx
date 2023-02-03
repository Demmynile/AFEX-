import React , {useState} from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import trendingUp from '../assets/trending-up.png'
import book from '../assets/book.png'
import history from '../assets/history.png'
import eye from '../assets/eye.png'
import mark from '../assets/mark.png'
import xCircle from '../assets/x-circle.png'
import { marketNavTypes } from '../typings'

const MarketNav = ({showMarket} : marketNavTypes) => {

	const [show , setShow] = useState<boolean>(false)
	
	

	const showInfo = (e : React.FormEvent<HTMLInputElement> ) => {

         if(e.currentTarget.value.length > 0){
			return setShow(true)
		 }
		 else {
			return setShow(false)
		 }
	}

  return (
	<div>
       {!showMarket  && (<div className='w-[217px] h-[392px]  bg-white shadow-lg mt-[5rem]'>
		
			<div className='flex flex-col items-center justify-center gap-y-[0.1rem]'>

				
					<div className='w-[217px] h-[27px] flex  justify-center relative'>
						{!show && (<MagnifyingGlassIcon className='text-[#d6d6d6] absolute top-2 left-5 w-[17px] h-[11px]'/>)}
						{!show && (<h6 className='absolute top-0 left-10 text-[#d6d6d6]'>Search</h6>)}
						<input onChange={(e) => showInfo(e)}  className='outline-none border border-[#d6d6d6] rounded-sm'/>
					</div>
					<div className='flex items-center justify-center space-x-3  w-[191px] h-[50px]'>
						<div>
						<img src={trendingUp}  alt="" />
						</div>
						<div className='self-center'>
						<h6 className='text-md font-bold '>Product View</h6>
						</div>
						
					</div>
					<div className='flex items-center justify-center space-x-3 mr-2  w-[191px] h-[50px]' >
						<img src={book} alt="" />
						<h6 className='text-md font-bold text-[#D71E0E]'>Order Book</h6>
					</div>
					<div className='flex items-center justify-center space-x-3  w-[191px] h-[50px]'>
						<img src={history} alt="" />
						<h6 className='text-md font-bold'>Price History</h6>
					</div>
					<div className='flex items-center justify-center space-x-3  w-[191px] h-[50px]'>
						<img src={eye} alt="" />
						<h6 className='text-md font-bold'>Open Orders</h6>
					</div>
					<div className='flex items-center justify-center space-x-3 ml-3  w-[191px] h-[50px]'>
						<img src={mark} alt="" />
						<h6 className='text-md font-bold'>Closed Orders</h6>
					</div>
					<div className='flex items-center justify-center space-x-3 ml-8 w-[191px] h-[50px]'>
						<img src={xCircle} alt="" />
						<h6 className='text-md font-bold'>Cancelled Trades</h6>
					</div>
			

				

			</div>
		
		
	    </div>)}


	</div>
    
  )
}

export default MarketNav