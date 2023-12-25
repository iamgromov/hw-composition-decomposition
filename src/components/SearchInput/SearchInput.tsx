import React from 'react'

type SearchInputProps = {
  handlerSearch: (event: React.FormEvent) => void
}

/**
 * Выводит форму для поискового запроса
 */

const SearchInput: React.FC<SearchInputProps> = ({ handlerSearch }) => {
  return (
    <form className='search__form' onSubmit={handlerSearch}>
      <input className='search__input' type="text" />
      <input className='search__btn' type="submit" value="Найти" />
    </form>
  )
}

export default SearchInput