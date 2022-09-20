import React from 'react'
import Buttons from './Buttons/Buttons'

import './Post.css'

const Post = props => {
	return (
		<div className='main_post'>
			<div className='post_left'>
				<div>
					<h4>
						{props.number}.{props.post.title}
					</h4>
				</div>
				<span>{props.post.body}</span>
			</div>
			<div className='post_right'>
				<Buttons onClick={() => props.remove(props.post)}>Удалить</Buttons>
			</div>
		</div>
	)
}

export default Post
