import React from 'react'
import { NewsTitle } from '../../interface/NewsTitle'

type TitleItemProps = {
  item: NewsTitle,
  activeTitle: NewsTitle,
  setActiveTitle: (prev: NewsTitle) => void
}

/**
 * Переключает вкладки в блоке новостей
 */

const TitleItem: React.FC<TitleItemProps> = ({ item, activeTitle, setActiveTitle }) => {
  return (
    <li 
      className={activeTitle.title === item.title
        ? "news__title news__title_active"
        : "news__title"}
      key={item.title}
      onClick={() => setActiveTitle({
        title: item.title,
        url: item.url
      })}
    >{item.title}</li>
  )
}

export default TitleItem