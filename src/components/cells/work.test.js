import React from 'react'
import renderer from 'react-test-renderer'
import Work from './work'

it('renders without crashing', () => {
  const component = renderer.create(
    <Work/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
