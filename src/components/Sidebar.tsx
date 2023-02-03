import overview from '../assets/overview.png'
import market from '../assets/trend.svg'
import briefcase from '../assets/briefcase.png'
import group from '../assets/group.png'
import reports from '../assets/reports.png'
import settings from '../assets/settings.png'
import MarketNav from './MarketNav'
import {useState} from 'react'
import SubNav from './SubNav'


const Sidebar = () => {
 

	const [showMarket , setShowMarket] = useState<boolean>(false)
    
	const marketActive = () => {
        setShowMarket(true)
	}
	
	
  return (
	<div className='flex gap-x-2'>

		<div className='bg-white shadow-lg w-[83px] h-[100vh]'>

			<div className='flex flex-col items-center justify-center gap-y-[2.2rem] mt-[4rem]'>

				<div className='flex flex-col items-center justify-center gap-y-1 mt-5'>
					<img src={overview} alt="" />
					<h6 className='text-xs font-bold'>Overview</h6>
				</div> 
				<div className='flex flex-col items-center justify-center gap-y-1' onClick = {marketActive}>
					<img src={market}  alt="" />
					<h6 className='text-xs font-bold text-[#D71E0E]'>Market</h6>
				</div> 
				<div className='flex flex-col items-center justify-center gap-y-1'>
					<img src={briefcase} alt="" />
					<h6 className='text-xs font-bold'>Portfolio</h6>
				</div> 
				<div className='flex flex-col items-center justify-center gap-y-1'>
					<img src={group} alt="" />
					<h6 className='text-xs font-bold'>Community</h6>
				</div> 
				<div className='flex flex-col items-center justify-center gap-y-1'>
					<img src={reports} alt="" />
					<h6 className='text-xs font-bold'>Reports</h6>
				</div> 
				<div className='flex flex-col items-center justify-center gap-y-1'>
					<img src={settings} alt="" />
					<h6 className='text-xs font-bold'>Settings</h6>
				</div> 

			</div>

		</div>

		<MarketNav 
		 showMarket = {showMarket}
		 
		/>
		<SubNav/>
	
	</div>
  )
}

export default Sidebar