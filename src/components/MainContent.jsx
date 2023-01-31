import Card from './Card'
import data from '../data'

export default function MainContent() {
  let cards = data.map(card => {
    return <Card {...card} />;
  })

  return (
    <div className='main'>
       { cards }
    </div>
  )
}