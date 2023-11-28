// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('Todo app', () => {
  beforeEach(() => {
    cy.request('POST', '/reset', { todos: [] })
    cy.visit('/')
    cy.get('.loaded')
  })

  it('adds 2 todos', function () {
    cy.get('.new-todo').type('learn testing{enter}').type('be cool{enter}')
    cy.get('.todo-list li').should('have.length', 2)
  })
})
