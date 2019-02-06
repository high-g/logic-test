import {connect} from 'react-redux'
import App from '../components/App'
import AppActions from '../actions/app'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(AppActions.increment())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)