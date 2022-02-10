import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories  from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart, cats, setCats }) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	const removeCart = (e) => {
		let name = e.target.getAttribute("nameIdentifier")
		let price = e.target.getAttribute("priceIdentifier")
		const currentPlantSaveds = cart.find((plant) => plant.name === name)
		const newTab = cart.filter((plant) => plant.name === name)
		const amountOutof = newTab.find((plant) => plant.amount > 1)
		if (currentPlantSaveds && amountOutof) {
			const arrWithoutPlant = cart.filter((plant) => plant.name !== name)
			updateCart([
				...arrWithoutPlant,
				{ name, price, amount: currentPlantSaveds.amount - 1 }
			])} else {
				const arrWithoutAll = cart.filter((plant) => plant.name !== name)
				updateCart([...arrWithoutAll])
			}
	}	

	return (
		<div className='lmj-shopping-list'>
					<Categories 
					categories={categories}
					cats={cats}
					setCats={setCats}
					/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
				!cats  || cats === category ?
					(<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
						<button nameIdentifier={name} priceIdentifier={price} onClick={removeCart}>Retirer</button>
					</div>
				) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList