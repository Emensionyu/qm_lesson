const defaultValue = {
  order:""
}

const historyOrder = (state = defaultValue, action) => {
    switch (action.type) {
      case 'ADD_HISTORY':
        return Object.assign({}, state, action.order)
      case 'DELECT_HISTORY':
        return   Object.assign({}, state, action.order)
      default:
        return state
    }
  }
  export default historyOrder