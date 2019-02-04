const initialState = {
  tasks: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADDTASK': {
      return state.tasks.concat(action.value)
    }
    case 'ENDTASK': {
      return action.value
    }
    case 'UPDTASK': {
      return action.value
    }
    case 'DELTASK': {
      return action.value
    }
    default: {
      return state
    }
  }
}

export default reducer