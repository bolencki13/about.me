import React from 'react'
import renderer from 'react-test-renderer'
import TimeLine from './'

it('renders without crashing', () => {
  const component = renderer.create(
    <TimeLine/>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
