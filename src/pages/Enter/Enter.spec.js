import Header from '../../components/Header'

describe.skip('Enter component', () => {
  let component

  beforeEach(() => {
    // https://github.com/facebook/react-native/issues/12440
    // component = shallow(<Enter username="admin" qrcode="admin$token" />)
  })

  it('should render a header with title 扫码进入', () => {
    expect(component.find(Header)).toHaveLength(1)
  })
})
