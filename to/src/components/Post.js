import React, { useEffect, useMemo, useState } from 'react'
import Buttons from './Buttons/Buttons'

import './Post.css'
import Input from './Input/Input'

const Post = props => {
	const [doing, setDoing] = useState(props.post.x)
	const [dates, setDates] = useState(props.post.date)
	const dates2 = +new Date(dates)
	const time2 = +new Date(props.time)
	console.log(dates2)
	let time1 = true
	function numb() {
		if (dates2 > time2) {
			time1 = true
		} else if (dates2 < time2) {
			time1 = false
		}
	}

	useMemo(() => {
		numb()
	}, [time2])
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
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<b>{props.post.date}: </b>
					{time1 === true ? (
						<h4 style={{ color: 'green' }}>Время есть!</h4>
					) : (
						<h4 style={{ color: 'red' }}>Время истекло!</h4>
					)}
				</div>

				<div style={{ display: 'flex' }}>
					<Buttons onClick={() => props.remove(props.post)}>Удалить</Buttons>
					<Input
						type='checkbox'
						checked={doing}
						onChange={() => setDoing(!doing)}
						style={{ width: '30px', height: '30px' }}
					/>
				</div>

				{doing === false ? (
					<h4 style={{ color: 'blue' }}>Сделай это, я в тебя верю!</h4>
				) : (
					<h4 style={{ color: 'green' }}>Молодец, ты сделал это!</h4>
				)}
			</div>
		</div>
	)
}

export default Post
