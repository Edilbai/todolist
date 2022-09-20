import React from 'react'
import Post from './Post'

const PostList = ({ posts, title, remove }) => {
	return (
		<div>
			<h1>{title}</h1>
			{posts.map((post, index) => (
				<Post number={index + 1} post={post} key={post.id} remove={remove} />
			))}
		</div>
	)
}

export default PostList
