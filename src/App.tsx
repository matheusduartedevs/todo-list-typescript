import { useState } from 'react'
import { Item } from './types/Item'
import ListItem from './components/ListItem'
import * as C from './App.styles'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 0, name: 'Tarefa 01', done: false },
    { id: 2, name: 'Tarefa 02', done: false }
  ])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <>
          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </>
      </C.Area>
    </C.Container>
  )
}

export default App