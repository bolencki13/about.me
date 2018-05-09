import React from 'react'
import renderer from 'react-test-renderer'
import AboutMe from './'

it('renders without crashing', () => {
  const component = renderer.create(
    <AboutMe/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
