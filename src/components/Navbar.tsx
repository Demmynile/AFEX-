import logo from '../assets/logo.png'
import sun from '../assets/sun.png'
import chevron from '../assets/chevron.svg'
import chevronDown from '../assets/chevron_down.svg'
import Button from './Button'


const Navbar = () => {
  return (
	<div className='bg-white w-full h-[3.9rem] fixed top-0 z-10 shadow-md'>

		<div className='flex items-center'>

	
			<div className='w-[712px] flex items-center justify-between h-[3.9rem] border-r-2 border-[#EDEDED]'>
			
				<div>
					<img src={logo} alt="" />
				</div>
				<div className='w-[70.91px] h-[32px] bg-[#F4F4F6] rounded-xl flex items-center justify-around mr-8'>
					<h6 className='text-black text-xs  font-bold'>Light</h6>
					<div className='w-[24.97px] h-[25px] bg-white rounded-full flex items-center justify-center'>
					<img src={sun} alt="" />
					</div>
					
				</div>
				

			</div>

			<div className='flex items-center justify-center gap-x-9 w-[471px] h-[3.9rem] border-[#EDEDED] border-r-2'>
					
					<div>
						<img src={chevron} className = "text-black" alt="" />
					</div>
					<div className='flex flex-col items-center justify-center gap-y-1'>
						<div>
							<h6 className = "text-xs text-[#778CA2] uppercase">Cash Balance</h6>
						</div>
						<div>
							<h6 className='text-sm font-bold'>₦8,374,763</h6>
						</div>

					</div>
					<div className='flex flex-col items-center justify-center gap-y-1'>
						<div>
							<h6 className = "text-xs text-[#778CA2] uppercase">Securities Value</h6>
						</div>
						<div>
							<h6 className='text-sm font-bold'>₦8,374,763</h6>
						</div>

					</div>
					<div className='flex flex-col items-center justify-center gap-y-1'>
						<div>
							<h6 className = "text-xs text-[#778CA2] uppercase">Loan Balance</h6>
						</div>
						<div>
							<h6 className='text-sm font-bold'>₦7,542,246</h6>
						</div>

					</div>

					
			</div>
	        <div className='w-[255px] h-[3.9rem] flex items-center justify-end'>

                <div className='flex items-center justify-center gap-x-3 mr-4'>
					<Button
					className='bg-black w-[68px] h-[28px] text-white rounded-md'
					type = "button"
					
					>
					Demo
					</Button>
					
					<img src={chevronDown} alt="" />
				</div>

			</div>
	
        </div>

    </div>
  )
}


export default Navbar