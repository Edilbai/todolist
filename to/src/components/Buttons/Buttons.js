import React from 'react'
import classes from './Buttons.module.css'

const Buttons = ({ children, ...props }) => {
	return (
		<div>
			<button {...props} className={classes.My_btn}>
				{children}
			</button>
		</div>
	)
}

export default Buttons
