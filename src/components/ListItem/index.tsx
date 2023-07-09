import { useState } from 'react'
import { Item } from '../../types/Item'
import * as C from './styles'

type Props = {
  item: Item
}

const ListItem = ({ item }: Props) => {
  const [isChecked, setIsCheked] = useState(item.done)

  return (
    <C.Container done={isChecked}>
      <input 
        type='checkbox' 
        checked={isChecked}
        onChange={e => setIsCheked(e.target.checked)}  
      />
      <label>{item.name}</label> 
    </C.Container>
  )
}

export default ListItem