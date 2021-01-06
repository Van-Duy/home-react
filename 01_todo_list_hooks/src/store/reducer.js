import { ACT_SET_ITEMS,ACT_SET_SHOWFORM,ACT_SET_ITEMSFORM,ACT_ADD_ITEMS } from './actions';

const initState = {
  isShowForm : false,
  itemsForm : { id: '', name: '', level: 0 },
  Items : JSON.parse(localStorage.getItem('task')) || []
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_SET_ITEMS:
      state.Items = action.payload.newItems;
      localStorage.setItem('task', JSON.stringify(action.payload.newItems));
      return state;
    case ACT_SET_SHOWFORM:
      state.isShowForm = action.payload.isShow;
      return state;
    case ACT_SET_ITEMSFORM:
      return {
        ...state,
        ...state.itemsForm,
         [ action.payload.name] : [ action.payload.value]
      };
    case ACT_ADD_ITEMS:
      state.itemsForm = action.payload.item;
      localStorage.setItem('task', JSON.stringify(action.payload.item));
      return state;
    default:
      return state;
  }
}

export default reducer;