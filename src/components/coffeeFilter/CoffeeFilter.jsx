import './coffeeFilter.scss'

const CoffeeFilter = ({onFilterName, onFilterNameChange, onFilterChange, optionCountry}) => {

    return (
        <div className="coffee__filter">
            <div className="coffee__search">
                <p className="coffee__filter-text">Looking for</p>
                <input 
                    className='coffee__input' 
                    type="text"
                    placeholder='start typing here...'
                    value={onFilterName}
                    onChange={onFilterNameChange} />
            </div>
            <div className="coffee__filter-wrapper">
                <p className="coffee__filter-text">Or filter</p>
                <button 
                    onClick={() => onFilterChange('All')} 
                    className={`coffee__option ${optionCountry === 'All' ? 'active' : ''}`}>All</button>
                <button 
                    onClick={() => onFilterChange('Brazil')} 
                    className={`coffee__option ${optionCountry === 'Brazil' ? 'active' : ''}`}>Brazil</button>
                <button 
                    onClick={() => onFilterChange('Kenya')} 
                    className={`coffee__option ${optionCountry === 'Kenya' ? 'active' : ''}`}>Kenya</button>
                <button 
                    onClick={() => onFilterChange('Columbia')} 
                    className={`coffee__option ${optionCountry === 'Columbia' ? 'active' : ''}`}>Columbia</button>
            </div>
        </div>
    );
};

export default CoffeeFilter;