import data from '../../data/dataFreshNews.json'
import NewsItem from '../NewsItem/NewsItem';

type NewsListProps = {
  url: string
}

/**
 * Делается запрос на сервер по переданному URL 
 * получает список новостей и поштучно передает их в NewsItem
 */

const NewsList: React.FC<NewsListProps> = ({ url }) => {
  const newsList = url;
  console.log(newsList);  

  return (
    <ul className='news-list'>
      {
        data.map(item => <NewsItem news={item} key={item.id}/>)
      }
    </ul>
  )
}

export default NewsList