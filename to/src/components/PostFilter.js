import React from 'react'
import Input from './Input/Input'
import Select from './Select'

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<Input
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				placeholder='Поиск...'
			/>
			<Select
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue='Сортировка по'
				option={[
					{ value: 'title', name: 'По названию' },
					{ value: 'body', name: 'По описанию' },
				]}
			/>
		</div>
	)
}

export default PostFilter
