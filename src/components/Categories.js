import '../styles/Categories.css'

function Categories({ categories, cats, updateCats }) {
    return (
        <div className='lmj-categories'>
            <select
                value={cats}
                onChange={(e) => updateCats(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>---</option>
                {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>
                )}
            </select>
            <button onClick={() => updateCats('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories