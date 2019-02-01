const initialState = {
  tasks: [],
  text: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADDTASK': {
      return console.log(action.value)
    }
    case 'ENDTASK': {
      return console.log(action.value)
    }
    default: {
      return state
    }
  }
}

export default reducer