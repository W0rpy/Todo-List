import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../styles/TodoItem.module.scss'
import { Checkbox, TextField } from '@mui/material';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import { useState } from 'react';


function TodoItem(props) {
   const [edit, setEdit] = useState(null);

   function saveEdit() {
      props.editItem(props.item.id, props.editingText);
      setEdit(!edit);
   }
   const [checked, setChecked] = useState(props.item.completed);

   return (
      <div className={styles.TodoItem} >
         <Box sx={{
            width: '800px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #000',
            padding: '10px 15px',
            justifyContent: 'space-between',
         }}
            className={styles.ShellItem}
         >
            <Box sx={{
               display: 'flex',
               alignItems: 'center'
            }}>
               <Checkbox color='success' size='large' className={styles.BtnIcon} defaultChecked={props.item.completed} value={checked} onChange={() => setChecked(!checked)} />
               <Typography variant='h5' component='h4' className={styles.CheckboxText} color={checked === true ? 'green' : 'error'} >{props.item.title} </Typography>
            </Box>
            <Box>
            </Box>
            <Box sx={{
               display: 'flex',
            }}>
               <IconButton sx={{ mr: 1 }} color='error' onClick={() => props.remove(props.item.id)} className={styles.BtnIcon}>
                  <HighlightOffIcon fontSize='large' />
               </IconButton>
               <IconButton color='info' onClick={() => setEdit(props.item.id)} className={styles.BtnIcon}>
                  <EditIcon fontSize='large' />
               </IconButton>
            </Box>

         </Box>
         {edit === props.item.id
            ? (<Box sx={{
               display: 'flex',
               padding: '10px',
               alignItems: 'center',
            }}>
               <TextField id="standard-basic" label='Edit todo' variant="standard" value={props.editingText} onChange={e => props.setEditingText(e.target.value)} />
               <IconButton color='secondary' onClick={saveEdit}>
                  <FlipCameraAndroidIcon fontSize='large' />
               </IconButton>
            </Box>)
            : ('')
         }
      </div >
   )
}
export default TodoItem;