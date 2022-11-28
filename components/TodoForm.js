import { Box, IconButton } from "@mui/material";
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from "react";

function TodoForm({ create }) {
   const [todoItem, setTodoItem] = useState({ title: '' })


   function addItem(e) {
      e.preventDefault();
      let newItem = {
         ...todoItem, id: Date.now(), completed: false
      };
      create(newItem);
      setTodoItem({ title: '' })
   }
   return (
      <Box
         component='form'
         mb={3}
         sx={{
            width: '100%',
            border: '2px solid #000',
            padding: '10px 20px',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'space-between'
         }}>
         <TextField id="standard-basic" label="Add a todo" variant="standard" type='text' value={todoItem.title} onChange={e => setTodoItem({ ...todoItem, title: e.target.value })} />
         <IconButton color="warning" onClick={addItem}>
            <AddCircleOutlineIcon fontSize="large" />
         </IconButton>
      </Box>
   )
}
export default TodoForm;