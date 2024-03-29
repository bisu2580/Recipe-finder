import React, { useState } from "react"

const Search = ({ onSearch }) => {
	const [query, setQuery] = useState("")

	const handleInputChange = (event) => {
		setQuery(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		onSearch(query)
	}

	return (
		<form onSubmit={handleSubmit} className='flex gap-4 w-[90%] mx-auto'>
			<input
				type='text'
				value={query}
				onChange={handleInputChange}
				placeholder='Search for recipes...'
				className='p-3 w-[90%] rounded-full text-xl outline-none border border-2 border-green-500'
			/>
			<button
				type='submit'
				className='bg-green-500 hover:bg-green-600 focus:ring-2  
                        text-white font-semibold py-3 px-6  
                        rounded-full transform hover:scale-105 transition-transform  
                        focus:outline-none focus:ring-offset-2  
                        focus:ring-offset-green-700 flex items-center'
			>
				Search
			</button>
		</form>
	)
}

export default Search
