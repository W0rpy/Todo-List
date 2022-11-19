import { Box } from "@mui/system";
import TodoItem from "./TodoItem";
import styles from '../styles/TodoList.module.scss';

function TodoList({ listItems, remove, editItem, setEditingText, editingText }) {
   return (
      <Box
         sx={{
            padding: '20px',
            borderRadius: '10px',
            border: '3px solid #000',
         }}
         className={styles.TodoList}
      >
         {listItems.map(item => <TodoItem key={item.id} item={item} remove={remove} editItem={editItem} setEditingText={setEditingText} editingText={editingText} />)}
      </ Box >
   )
}
export default TodoList;