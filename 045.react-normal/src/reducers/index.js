const initialState = {
  fuga: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT': {
      return {fuga: state.fuga + 1}
    }
    default: {
      return state
    }
  }
}

export default reducer