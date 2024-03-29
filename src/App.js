import React, { useState } from "react"
import Header from "./components/Header"
import Search from "./components/Search"
import Details from "./components/Details"

const App = () => {
	const [searchQuery, setSearchQuery] = useState("chicken")

	const handleSearch = (query) => {
		setSearchQuery(query)
	}
	return (
		<div className='flex items-center gap-4 flex-col'>
			<Header />
			<div className='w-[1200px] flex flex-col gap-4 items-center p-3 h-[455px]'>
				<Search onSearch={handleSearch} />
				<Details searchQuery={searchQuery} />
			</div>
		</div>
	)
}

export default App
