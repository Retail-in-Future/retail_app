import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  loginComponent: {
    padding: 20,
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#397af8'
  },
  inputFields: {
    width: 300,
    height: 44
  },
  loginButton: {
    width: 300,
    marginTop: 40
  },
  errorMessage: {
    fontSize: 11,
    color: 'indianred',
    marginTop: 20
  }
})
