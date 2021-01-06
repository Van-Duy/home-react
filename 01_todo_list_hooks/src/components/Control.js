import cls from 'classnames';
import Sort from './Sort';
import Search from './Search';
import { useSelector, useDispatch } from 'react-redux';
import { actSetIsShowForm } from '../store/actions';

function Control({
  orderBy,
  orderDir,
  a,
  onClickAdd,
  onClickSort,
  onClickSearchGo,
}) {

  const dispatch = useDispatch();
  const isShowForm = useSelector(state => state.isShowForm);

  function handleAdd(){
    dispatch(actSetIsShowForm(!isShowForm));
  }

  return (
    <div className="row">
      {/* SEARCH : START */}
      <Search onClickGo={onClickSearchGo}/>
      {/* SEARCH : END */}

      {/* SORT : START */}
      <Sort 
        orderBy={orderBy}
        orderDir={orderDir}
        onClickSort={onClickSort}
      />
      {/* SORT : END */}

      {/* ADD : START */}
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button 
          type="button" 
          onClick={handleAdd} 
          className={cls('btn btn-block', {
            'btn-info': !isShowForm,
            'btn-success': isShowForm,
          })}
        >
          {isShowForm ? 'Close Form' : 'Add Task'}
        </button>
      </div>
      {/* ADD : END */}
    </div>
  );
}
export default Control;