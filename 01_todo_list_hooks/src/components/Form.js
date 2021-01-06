import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actSetItemsForm,actAddItems,actSetIsShowForm } from '../store/actions';


function Form({
  itemSelected,
  onClickSubmit,
  onClickCancel
}) {

  const dispatch    = useDispatch();
  const itemsForm   = useSelector(state => state.itemsForm);
  const isShowForm  = useSelector(state => state.isShowForm);

  const [task, setTask] = useState({ id: '', name: '', level: 0 });

  useEffect(() => {
    if (itemSelected) {
      setTask({
        id: itemSelected.id,
        name: itemSelected.name,
        level: itemSelected.level
      })
    }
  }, [itemSelected])

  function handleChange(event) {
    const target = event.target;    // input selectbox
    const value  = target.type === 'checkbox' ? target.checked : target.value;
    const name   = target.name;
    dispatch(actSetItemsForm(name,value));


    // setTask({
    //   ...task,
    //   [name]: value
    // });
  }

  function handleSubmit(event) {
    let item = {
        name: task.name,
        id: task.id,
        level: Number(task.level),
    };

    dispatch(actAddItems(item));
    //event.preventDefault();
  }
  
  function handleCancel(){
    dispatch(actSetIsShowForm(false));
  }

  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
          <form onSubmit={handleSubmit} className="form-inline">

              <div className="form-group">
                  <label className="sr-only">label</label>
                  <input value={task.name} onChange={handleChange} name="name" type="text" className="form-control" placeholder="Task Name" />
              </div>

              <div className="form-group">
                  <label className="sr-only">label</label>
                  <select value={task.level} onChange={handleChange}  name="level" className="form-control" required="required" >
              Small
                      <option value={0}>Small</option>
                      <option value={1}>Medium</option>
                      <option value={2}>High</option>
                  </select>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button onClick={handleCancel} type="button" className="btn btn-default">Cancel</button>
          </form>
      </div>
    </div>
  )
}

export default Form;