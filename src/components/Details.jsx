import React, { useEffect, useState } from "react"
import RecipeCards from "./RecipeCards"

const Details = ({ searchQuery }) => {
	const API_KEY = process.env.REACT_APP_API_KEY
	const APP_ID = process.env.REACT_APP_APP_ID
	const [foodRecipes, setFoodRecipes] = useState([])
	const [active, setActive] = useState(false)
	useEffect(() => {
		const getRecipes = async () => {
			try {
				const response = await fetch(
					`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${API_KEY}`
				)
				const data = await response.json()
				if (!data) throw new Error("No data found!")
				console.log(data.hits)
				setFoodRecipes(data.hits)
			} catch (err) {
				console.log(`Error: ${err}`)
			}
		}
		getRecipes()
	}, [searchQuery])

	useEffect(() => {
		if (foodRecipes.length !== 0) setActive(true)
	}, [foodRecipes])

	return (
		<div className='flex flex-col'>
			{active && <h2 className='text-center text-xl mt-3'>Search Results</h2>}
			<div className='mx-auto mt-8 p-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
					{foodRecipes.map((recipe) => (
						<RecipeCards key={recipe.recipe.label} recipe={recipe.recipe} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Details
