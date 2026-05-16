const elements = {
    field: {
        itemName: '[data-test="inventory-item-name"]',
        itemQuantity: '[data-test="item-quantity"]',
    },
    buttons: {
        btnCheckOut: '#checkout',
    
    },

    title: {
        YourCart: '[data-test="title"]',
    },

    message: {

    },
    check: {

    },
}
export default {

    checkUrlCart() {
        cy.url().should('contain','cart')
    },
    checkTitleYourCard() {
        cy.get(elements.title.YourCart).should('contain','Your Cart')
    },
    checkNameItem() {
        cy.get(elements.field.itemName).should('contain','Sauce Labs Bolt T-Shirt')
    },
    checkQuantity() {
        cy.get(elements.field.itemQuantity).should('contain','1')
    },
    clickCheckOut() {
        cy.get(elements.buttons.btnCheckOut).click()
    },
}