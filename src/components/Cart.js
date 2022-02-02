import '../styles/Cart.css'

const Cart = () => {
    const monsPrice = 8
    const ivyPrice = 10
    const flowPrice = 15
    return (<div className='lmj-cart'>
        <h2>Panier</h2>
        <ul>
            <li>Monstera : {monsPrice}€</li>
            <li>Lierre : {ivyPrice}€</li>
            <li>Fleurs : {flowPrice}€</li>
        </ul>
        Total : {monsPrice + ivyPrice + flowPrice}€
    </div>)
}

export default Cart