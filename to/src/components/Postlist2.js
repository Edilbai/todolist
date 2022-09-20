import React from 'react'
import Post2 from './Post2'

const Postlist2 = ({ notpost, title }) => {
	return (
		<div>
			<h1>{title}</h1>
			{notpost.map((notpost, index) => (
				<Post2 number={index + 1} notpost={notpost} key={notpost.id} />
			))}
		</div>
	)
}

export default Postlist2
