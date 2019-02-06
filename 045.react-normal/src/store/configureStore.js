import {createStore} from 'redux'
import reducer from '../reducers/index'

const configureStore = () => {
  const store = createStore(reducer)
  return store
}

export default configureStore;