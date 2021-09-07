/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.server()
  })

  it('should list all characters and add to the cart', () => {
    cy.route('**/show/houses', 'fixture:houses/houses.json').as('getHouses')
    cy.route(
      '**/show/characters/byHouse/**',
      'fixture:characters/byHouse.json'
    ).as('getCharacters')

    cy.visit('/')

    cy.wait('@getHouses')

    cy.get('input[type="search"]').should('exist')

    cy.get('.wrapper-house').within(() => {
      cy.findByText(/lannister/i).should('exist')

      cy.findByText(/lannister/i).click()
    })

    cy.wait('@getCharacters')

    cy.get('.grid-wrapper').within(() => {
      cy.get('.character').should('have.length', 3)
    })

    cy.findByTestId('character_1').within(() => {
      cy.findByRole('button', { name: /add/i }).should('exist').click()
    })

    cy.get('.shopping-cart-content').within(() => {
      cy.get('.cart-items').should('exist').should('have.text', '1')
    })

    cy.findByTestId('character_2').within(() => {
      cy.findByRole('button', { name: /add/i }).should('exist').click()
    })

    cy.get('.shopping-cart-content').within(() => {
      cy.get('.cart-items').should('exist').should('have.text', '2')
    })
  })

  it('should list one character when search by name in search field', () => {
    cy.shouldAddToCart()

    cy.shouldCharacterExists()
  })

  it('should open the cart and remove a character', () => {
    cy.shouldAddToCart()

    cy.shouldCharacterExists()

    cy.get('.shopping-cart-content').click()

    cy.get('.cart').should('have.class', 'is-open')

    cy.get('.cart').within(() => {
      cy.get('.cart__body .cart-item__info').within(() => {
        cy.findByRole('heading', { name: /mord/i }).should('exist')
      })

      cy.get('.cart__body .cart-item__remove').should('exist').click()
    })

    cy.get('.shopping-cart-content').within(() => {
      cy.get('.cart-items').should('exist').should('have.text', '0')
    })

    cy.get('.cart').within((el) => {
      cy.get('.cart__header').within(() => {
        cy.get('.close-cart').should('exist').click()
      })

      cy.root().should('not.have.class', 'is-open')
    })
  })

  it('should render empty content when character not found', () => {
    cy.route('**/show/houses', 'fixture:houses/houses.json').as('getHouses')

    cy.route('**/show/characters/**').as('getCharacter')

    cy.visit('/')

    cy.wait('@getHouses')

    cy.get('input[type="search"]').should('exist').type('Luke')

    cy.wait('@getCharacter').its('status').should('eq', 404)

    cy.get('.empty').should('exist')
  })
})
