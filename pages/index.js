import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [listItems, setListItems] = useState([
    {
      id: 1, title: 'Let\'s try to conquer the world!', completed: false
    },
    { id: 2, title: 'To wash the dishes', completed: true },
    { id: 3, title: 'To eat', completed: false }
  ])

  const [editingText, setEditingText] = useState('');


  function createItem(newItem) {
    setListItems([newItem, ...listItems])
  }
  function removeItem(id) {
    setListItems([...listItems].filter((p) => p.id !== id))
  }
  function editItem(id) {
    let updateItem = [...listItems].map((item) => {
      if (item.id === id) {
        item.title = editingText;
      }
      return item;
    })
    setListItems(updateItem);
    setEditingText('')
  }
  /*  function sortItem(a, b) {
     return a.completed - b.completed
   }
 
   useMemo(() => {
     [...listItems].sort(sortItem);
     return listItems;
   }, [listItems]) */

  return (
    <div className={styles.Home}>
      <Head>
        <title>Create todolist</title>
        <meta name="description" content="Create todolist" />
      </Head>
      <main>
        <div className={styles.Wrapper}>
          <Typography variant='h2' mb={2}>Todo List</Typography>
          <TodoForm create={createItem} />
          {listItems.length !== 0
            ? <TodoList listItems={listItems} remove={removeItem} editItem={editItem} setEditingText={setEditingText} editingText={editingText} />
            : (<Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Typography variant='h3' color='error'> No todo list</Typography>
            </Box>)
          }
        </div>
      </main>
    </div>
  )
}