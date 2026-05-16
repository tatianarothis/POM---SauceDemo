const elements = {
    field: {
        inputUserName: '#user-name',
        inputPass: '#password',
    },
    buttons: {
        btnLogin: '#login-button',
    },

    title: {
        Products: '[data-test="title"]',
    },

}

export default {
    completeUserName(usuario) {
        cy.get(elements.field.inputUserName).type(usuario)
    },
    completePass(password) {
        cy.get(elements.field.inputPass).type(password)
    },
    clickLogin() {
        cy.get(elements.buttons.btnLogin).click()

    },
}
