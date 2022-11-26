import React, { useMemo } from 'react'

import { useState } from 'react'
import Input from './Input/Input'

import PostFilter from './PostFilter'

import Postform from './Postform'
import PostList from './PostList'

const Todolist = () => {
	const today = Date.now()
	const Maxtoday = new Date(today)
	const Maxtoday2 = new Date(today + 86400000)
	const atTheMoment = Maxtoday.toISOString('yyyy MM dd').substr(0, 10)
	const [now, setNow] = useState(atTheMoment)
	const atTheMoment2 = Maxtoday2.toISOString('yyyy MM dd').substr(0, 10)

	const [posts, setPosts] = useState([
		{
			id: 1,
			title: 'Стирка',
			body: 'Влажная',
			x: false,
			date: atTheMoment2,
		},
		{ id: 2, title: 'Готовка', body: 'Котлеты	', x: false, date: atTheMoment2 },
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
			<div>
				<b>Сегоднешняя дата </b>
				<Input type='date' value={now} onChange={e => setNow(e.target.value)} />
				<div>{now}</div>
			</div>
			<Postform
				style={{ display: 'flex', justifyContent: 'center' }}
				create={createPost}
			/>
			<PostFilter filter={filter} setFilter={setFilter} />
			{sortedAndSearchedPosts.length !== 0 ? (
				<PostList
					posts={sortedAndSearchedPosts}
					time={now}
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
