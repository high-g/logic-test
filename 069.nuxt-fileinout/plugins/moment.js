import moment from 'moment'

export default ({ app }, inject) => {
  inject('moment', args => moment(args))
}