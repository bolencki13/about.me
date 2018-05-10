import React from 'react'
import renderer from 'react-test-renderer'
import School from './school'

it('renders without crashing', () => {
  const component = renderer.create(
    <School/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
