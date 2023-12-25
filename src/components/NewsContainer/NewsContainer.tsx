import { useState } from 'react';
import dataNews from '../../data/dataNews.json';
import { NewsTitle } from '../../interface/NewsTitle';
import './newsContainer.css';
import NewsList from '../NewsList/NewsList';
import TitleItem from '../TitleItem/TitleItem';

/**
 * Создает контейнер новостей с вкладками
 */

const NewsContainer = () => {
  const data: NewsTitle[] = dataNews;
  const [activeTitle, setActiveTitle] = useState<NewsTitle>({
    title: data[0].title,
    url: data[0].url
  });

  return (
    <div className='news-container'>
      <ul className="news__titles">
        {
          data.map(item => <TitleItem
            key={item.title}
            item={item}
            activeTitle={activeTitle}
            setActiveTitle={setActiveTitle}
          />)
        }
      </ul>
      <NewsList url={activeTitle.url} />
    </div>
  )
}

export default NewsContainer