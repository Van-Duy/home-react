import React from 'react';
import cls from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { actSetItems,actSetIsShowForm } from '../store/actions';


const mapLevelToString = {
  0: 'Small',
  1: 'Medium',
  2: 'High',
}

function TaskItem() {
  const dispatch    = useDispatch();
  const listTasks   = useSelector(state => state.Items);
  const isShowForm  = useSelector(state => state.isShowForm);
  
  function handleEdit(item) {
    dispatch(actSetIsShowForm(true));
  }

  function handleDelete(id) {
    const newListTasks = listTasks
    .filter(task => task.id !== id);
    dispatch(actSetItems(newListTasks));
  }

  

  return (
    listTasks.map(function(value, index) {
      const classLabel = cls('label', {
        'label-default': value.level === 0,
        'label-info': value.level === 1,
        'label-danger': value.level === 2,
      });
      return (
        <tr key={value.id}>
        <td className="text-center" style={{ width: '10%' }}>{ index + 1 }</td>
        <td>{ value.name }</td>
        <td className="text-center" style={{ width: '20%' }}>
          <span className={classLabel}>{ mapLevelToString[value.level] }</span>
        </td>
        <td style={{ width: '20%' }}>
          {/* Edit */}
          <button 
            onClick={() => handleEdit(value)}  
            type="button" 
            className="btn btn-warning">Edit</button>
          
          {/* Delete */}
          <button 
            onClick={() => handleDelete(value.id)} 
            type="button" 
            className="btn btn-danger">Delete</button>
        </td>
      </tr>
      );
    })
  )
}

export default TaskItem;