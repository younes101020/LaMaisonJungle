import '../styles/Categories.css'

const Categories = ({categories, cats, setCats}) => {
    return (
        <div className='lmj-categories'>
                <select
                value={cats}
                onChange={(e) => setCats(e.target.value)}
                className='lmj-categories-select'
                >
                    <option value=''>----</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                <button onClick={() => setCats('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories