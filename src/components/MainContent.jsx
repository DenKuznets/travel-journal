import Card from './Card'
import data from '../data'

export default function MainContent() {

  return (
    <Card {...data[0]} />
  )
}