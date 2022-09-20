import React, { useState } from 'react'
import Buttons from './Buttons/Buttons'
import Input from './Input/Input'
import './Postform.css'

const Postform = ({ create }) => {
	const [post, setPost] = useState({ title: '', body: '' })

	const newPosts = e => {
		e.preventDefault()
		const newPost = {
			...post,
			id: Date.now(),
		}
		create(newPost)
		setPost({ title: '', body: '' })
	}
	return (
		<div>
			<Buttons onClick={newPosts}>Создать пост</Buttons>

			<Input
				value={post.title}
				type='text'
				placeholder='Название дела'
				onChange={e => setPost({ ...post, title: e.target.value })}
			/>
			<Input
				value={post.body}
				type='text'
				placeholder='Описание дела'
				onChange={e => setPost({ ...post, body: e.target.value })}
			/>
		</div>
	)
}

export default Postform
