import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('Ecrivez votre adresse mail ici')
    const checkBlur = (value) => {
        if (!value.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
        }
    }
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <form>
                <input value={inputValue} onBlur={(a) => checkBlur(a.target.value)} onChange={(a) => setInputValue(a.target.value)}/>
            </form>
		</footer>
	)
}

export default Footer