import fetchMock from 'fetch-mock'
import * as ProjectActions from './'
import { kDefaultState } from '../../reducers/projects/'
import mockStore from '../../store.test'

describe('Project Actions', () => {
  describe('get projects', () => {
    afterEach(() => {
      fetchMock.reset()
      fetchMock.restore()
    })

    it(`creates ${ProjectActions.kIdentifiers.PROJECTS_GET_END} when getting projects is done`, () => {
      fetchMock.postOnce('/api/accounts/register/', {
        body: {
          result: 'processing'
        },
        headers: {
          'content-type': 'application/json'
        }
      })

      const expectedActions = [{
        type: ProjectActions.kIdentifiers.PROJECTS_GET_START
      },
      {
        type: ProjectActions.kIdentifiers.PROJECTS_GET_END,
        payload: []
      }]
      const store = mockStore(kDefaultState)

      return store.dispatch(ProjectActions.github())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it(`creates ${ProjectActions.kIdentifiers.PROJECTS_FAILED} an error is encountered`, () => {
      fetchMock.postOnce('/api/accounts/register/', {
        status: 420,
        body: {
          message: "TypeError: Cannot read property 'json' of undefined"
        },
        headers: {
          'content-type': 'application/json'
        }
      })

      const expectedActions = [{
        type: ProjectActions.kIdentifiers.PROJECTS_GET_START
      },
      {
        type: ProjectActions.kIdentifiers.PROJECTS_FAILED,
        payload: new Error('Some error')
      }]
      const store = mockStore(kDefaultState)

      return store.dispatch(ProjectActions.github())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})
