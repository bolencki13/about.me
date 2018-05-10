import React from 'react'
import renderer from 'react-test-renderer'
import Contact from './'

it('renders without crashing', () => {
  const component = renderer.create(
    <Contact/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
