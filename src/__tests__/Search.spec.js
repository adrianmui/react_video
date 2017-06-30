import React from 'react'
import renderer from 'react-test-renderer'
import Search from './../Search'

import jsonData from './../data.json'
import ShowCards from './../showCards/showCards'

import {shallow} from 'enzyme'

const component = shallow(<Search />)

test('Search renders correctly', () => {
  expect(component).toMatchSnapshot()
})

test('Search renders correct amount of ShowCards', () => {
  expect(jsonData.shows.length).toEqual(component.find(ShowCards).length)
})

test('Search inputs search term and filters correct amount of ShowCards', () => {
  const term = 'Break'
  component.find('input').simulate('change',{target:{value: term}})
  expect(component.find(ShowCards).length).toBe(1)
})

test('Search input for breaking bad will return the showCard BreakingBad', () => {
  const term = 'Break'
  component.find('input').simulate('change',{target:{value: term}})
  expect(component.find(ShowCards).props().show.title).toBe('Breaking Bad')
})