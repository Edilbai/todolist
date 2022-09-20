import React, { useState } from 'react'
import Buttons from './Buttons/Buttons'
import Input from './Input/Input'
import Postlist2 from './Postlist2'

const Notdolist = props => {
	const [notpost, setNotpost] = useState([
		{ id: 1, title2: 'cleaning', body2: 'cleaning our house' },
		{ id: 2, title2: 'traning', body2: 'traning in the gym' },
	])
	const [title2, setTitle2] = useState()
	const [body2, setBody2] = useState()

	const New2 = e => {
		e.preventDefault()
		const NP2 = {
			id: Date.now(),
			title2,
			body2,
		}
		setNotpost([...notpost, NP2])
	}

	return (
		<div>
			<Input
				value={title2}
				placeholder='Напишите дела'
				onChange={e => setTitle2(e.target.value)}
			/>
			<Input
				value={body2}
				placeholder='Опишите дела'
				onChange={e => setBody2(e.target.value)}
			/>
			<Buttons onClick={New2}>Создать пост</Buttons>
			<Postlist2 notpost={notpost} title='Список не сделанных дел' />
		</div>
	)
}

export default Notdolist
