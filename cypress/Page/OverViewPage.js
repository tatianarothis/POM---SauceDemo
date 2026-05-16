const elements = {
    field: {
        NameProd: '[data-test="inventory-item-name"]',
        PriceTotal: '[data-test="total-info-label"]',
    },
    buttons: {
        btnFinish: '#finish',
    },

    title: {
        CheckOutOverView: '[data-test="title"]',
    },
}
export default {

    checkUrlCheckOut() {
        cy.url().should('contain','checkout')
    },
    checkTitle() {
        cy.get(elements.title.CheckOutOverView).should('contain','Checkout: Overview')
    },
    checkNameProd() {
        cy.get(elements.field.NameProd).should('contain','T-Shirt')
    },
    checkPriceTotal() {
        cy.get(elements.field.PriceTotal).should('contain','Price Total')
    },
    clickBtnFinish() {
        cy.get(elements.buttons.btnFinish).should('exist').click()
    }, 
    
}