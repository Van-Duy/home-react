export const ACT_SET_ITEMS      = 'ACT_SET_ITEMS';
export const ACT_SET_SHOWFORM   = 'ACT_SET_SHOWFORM';
export const ACT_SET_ITEMSFORM  = 'ACT_SET_ITEMSFORM';
export const ACT_ADD_ITEMS      = 'ACT_ADD_ITEMS';



export function actSetItems(newItems) {
  return {
    type: ACT_SET_ITEMS,
    payload: {
      newItems
    }
  }
}

export function actSetIsShowForm(isShow) {
  return {
    type: ACT_SET_SHOWFORM,
    payload: {
      isShow
    }
  }
}

export function actSetItemsForm(name,value) {
  return {
    type: ACT_SET_ITEMSFORM,
    payload: {
      name,
      value
    }
  }
}

export function actAddItems(item) {
  return {
    type: ACT_ADD_ITEMS,
    payload: {
      item
    }
  }
}