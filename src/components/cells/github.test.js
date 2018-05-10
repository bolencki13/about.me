import React from 'react'
import renderer from 'react-test-renderer'
import GitHub from './github'

it('renders without crashing', () => {
  const component = renderer.create(
    <GitHub/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
