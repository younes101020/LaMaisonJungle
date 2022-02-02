import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList() {
	const categories = Array.from(new Set(plantList.map((plant) => plant.category)))

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({name, cover, id, light, water}) => (
					<PlantItem name={name} cover={cover} id={id} light={light} water={water} />
				))}
			</ul>
		</div>
	)
}

export default ShoppingList