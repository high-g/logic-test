import Header from './Header'

const layoutStyle = {
  marginRight: 15,
  fontSize: 20
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
