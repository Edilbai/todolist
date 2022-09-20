import React, { useMemo } from 'react'

import { useState } from 'react'

import PostFilter from './PostFilter'

import Postform from './Postform'
import PostList from './PostList'

const Todolist = () => {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Стирка', body: 'Влажная' },
		{ id: 2, title: 'Готовка', body: 'Котлеты	' },
	])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const sortedPost = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) =>
				a[filter.sort].localeCompare(b[filter.sort])
			)
		}
		return posts
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPost.filter(post =>
			post.title.toLowerCase().includes(filter.query.toLowerCase())
		)
	}, [filter.query, sortedPost])

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}
	const remove = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div>
			<Postform
				style={{ display: 'flex', justifyContent: 'center' }}
				create={createPost}
			/>
			<PostFilter filter={filter} setFilter={setFilter} />
			{sortedAndSearchedPosts.length !== 0 ? (
				<PostList
					posts={sortedAndSearchedPosts}
					title='Список дел'
					remove={remove}
				/>
			) : (
				<div>
					<h1>Посты не найдены!</h1>
				</div>
			)}
		</div>
	)
}

export default Todolist
