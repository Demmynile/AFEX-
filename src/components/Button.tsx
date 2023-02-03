import React from 'react'
import { buttonType } from '../typings'


const Button = ({className , type , children , rest } : buttonType) => {

  return (
	<div>
         <button
			type={type}
			className={
				
				className
			}
			
			{...rest}
		>
			{children}
		</button> 
	</div>
  )
}

export default Button