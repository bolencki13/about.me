import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const middlewares = [thunk, promise]
export default configureStore(middlewares)

describe('store used for testing purposes', () => {
  it('should not crash', () => {
    expect(true).toBeTruthy()
  })
})
