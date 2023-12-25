import './App.css'
import { CardList, NewsContainer, Search } from './components'

export default function App() {
  return (
    <div className='app'>
      <NewsContainer />
      <Search />
      <CardList />
    </div>
  )
}