import data from '../../data/dataSearchTitle.json';
import SearchInput from '../SearchInput/SearchInput';
import './search.css';

/**
 * Создает блок поисковика
 */

const Search = () => {
  const handlerSearch = (event: React.FormEvent): void => {
    event.preventDefault();
  }

  return (
    <div className='search'>
      <ul className="search__titles">
        {
          data.map(item => <li key={item.title}>
            <a href={item.url}>{item.title}</a>
          </li>)
        }
      </ul>
      <SearchInput handlerSearch={handlerSearch} />
    </div>
  )
}

export default Search