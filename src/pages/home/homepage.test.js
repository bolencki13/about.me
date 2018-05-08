import React from 'react'
import renderer from 'react-test-renderer'
import HomePage from './'

it('renders without crashing', () => {
  const component = renderer.create(
    <HomePage/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
