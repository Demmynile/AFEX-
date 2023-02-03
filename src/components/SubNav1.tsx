import Button from './Button'

const SubNav1 = () => {
  return (
	<div className='flex gap-x-[1rem] mt-[2rem]'>
		<div className=''>
			<Button
			className='w-[75px] h-[30px] rounded-2xl text-black  bg-[#F8FAFB]  ml-3'
			type = "submit"

			>
             Board
			</Button>
		</div>
		<div className=''>
			<Button
			className='w-[99px] h-[35px] rounded-2xl  text-white bg-[#D71E0E]'
			type = "submit"

			>
             X-Traded
			</Button>
		</div>
		<div className=''>
			<Button
			className='w-[75px] h-[30px] rounded-2xl  text-black bg-[#F8FAFB]'
			type = "submit"

			>
             OTC
			</Button>
		</div>
		<div className=''>
			<Button
			className='w-[75px] h-[30px] rounded-2xl  text-black bg-[#F8FAFB]'
			type = "submit"

			>
             FI
			</Button>
		</div>
		<div className=''>
			<Button
			className='w-[110px] h-[30px] rounded-2xl text-black bg-[#F8FAFB]'
			type = "submit"

			>
             Derivatives
			</Button>
		</div>

		
	</div>
  )
}

export default SubNav1