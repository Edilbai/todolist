import React from 'react'
import Buttons from './Buttons/Buttons'
import './Post.css'

const Post2 = props => {
	return (
		<div className='main_post'>
			<div className='post_left'>
				<div>
					<h4>
						{props.number}.{props.notpost.title2}
					</h4>
				</div>
				<span>Описание:{props.notpost.body2}</span>
			</div>
			<div className='post_right'>
				<Buttons>Удалить</Buttons>
			</div>
		</div>
	)
}

export default Post2
