const elements = {
    field: {
        boltTShirt: '#add-to-cart-sauce-labs-bolt-t-shirt',
        itemCard: '[data-test="shopping-cart-link"]',
    },

    title: {
        Products: '[data-test="title"]',
    },

}
export default {

    checkUrlProducts() {
        cy.url().should('contain','inventory')
    },
    checkTitleProd() {
        cy.get(elements.title.Products).should('contain','Products')
    },
    AddTShirt() {
        cy.get(elements.field.boltTShirt).click()
    },
    CheckItemCard() {
        cy.get(elements.field.itemCard).should('contain','1')
    },
    ClickCard() {
        cy.get(elements.field.itemCard).click()
    },
}