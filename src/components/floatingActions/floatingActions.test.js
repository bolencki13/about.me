import React from 'react'
import renderer from 'react-test-renderer'
import FloatingActions from './'

it('renders without crashing', () => {
  const component = renderer.create(
    <FloatingActions/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
