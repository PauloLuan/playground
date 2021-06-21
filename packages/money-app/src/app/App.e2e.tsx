import * as React from 'react'
import { mount } from '@cypress/react'
import { App } from './App'

describe('Name of the group', () => {
  it('renders learn react link', () => {
    mount(<App />)
    cy.contains('Login').should('be.visible')
  })
})
