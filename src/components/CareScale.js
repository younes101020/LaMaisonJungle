import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const carePrint = careType === 'light' ? "de lumière" : "d'arrosage"
	const alertScale = () => {
		if(scaleValue === 1) {
			alert(`Cette plante requiert peu ${carePrint}`)
		} else if(scaleValue === 2) {
			alert(`Cette plante requiert modérement ${carePrint}`)
		} else {
			alert(`Cette plante requiert beaucoup ${carePrint}`)
		}
	}
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? (
		<img src={Sun} alt='sun-icon' />
	) : (
		<img src={Water} alt='water-icon' />
	)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} onClick={alertScale}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale