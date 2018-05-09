import reducer, { kDefaultState } from './'
import { kIdentifiers } from '../../actions/projects'

describe('Projects reducer', () => {
  const initialState = kDefaultState
  const project = {
    title: 'some title',
    location: 'some location',
    details: 'some details',
    date: 'Some date_start - some date_end'
  }

  it(`Should handle ${kIdentifiers.PROJECTS_GET_START}`, () => {
    expect(reducer(initialState, {type: kIdentifiers.PROJECTS_GET_START})).toEqual({
      ...initialState,
      fetching: true,
      error: null
    })
  })

  it(`Should handle ${kIdentifiers.PROJECTS_GET_END}`, () => {
    expect(reducer(initialState, {type: kIdentifiers.PROJECTS_GET_END, payload: [project]})).toEqual({
      ...initialState,
      github: [project],
      fetching: false,
      error: null
    })
  })

  it('Should handle ACCOUNTS_FAILED', () => {
    expect(reducer(initialState, {type: kIdentifiers.PROJECTS_FAILED, payload: new Error('An error')})).toEqual({
      ...initialState,
      fetching: false,
      error: new Error('An error')
    })
  })
})
