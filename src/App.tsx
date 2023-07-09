import { useState } from 'react'
import { Item } from './types/Item'
import ListItem from './components/ListItem'
import AddArea from './components/AddArea'
import * as C from './App.styles'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 0, name: 'Tarefa 01', done: false },
    { id: 2, name: 'Tarefa 02', done: false }
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length = 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return ( 
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
          
      </C.Area>
    </C.Container>
  )
}

export default App