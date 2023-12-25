import Card from '../Card/Card'
import './cardList.css';

/**
 * Создает контейнер виджетов
 */

const CardList = () => {
  return (
    <div className='card-list'>
      <Card title='Погода'>
        <span>+17</span>
      </Card>
      <Card title='Посещаемое'>
        <ul>
          <li>Недвижимость</li>
          <li>Марект</li>
          <li>Авто.ру</li>
        </ul>
      </Card>
      <Card title='Телепрограмма'>
        <ul>
          <li>ТНТ Best</li>
          <li>Джинглинки</li>
          <li>Наедине со всеми</li>
        </ul>
      </Card>
      <Card title='Посещаемое'>
        <ul>
          <li>Недвижимость</li>
          <li>Марект</li>
          <li>Авто.ру</li>
        </ul>
      </Card>
      <Card title='Телепрограмма'>
        <ul>
          <li>ТНТ Best</li>
          <li>Джинглинки</li>
          <li>Наедине со всеми</li>
        </ul>
      </Card>
      <Card title='Посещаемое'>
        <ul>
          <li>Недвижимость</li>
          <li>Марект</li>
          <li>Авто.ру</li>
        </ul>
      </Card>
    </div>
  )
}

export default CardList