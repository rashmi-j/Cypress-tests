import { Signuppage} from "../../pages/Signuppage"

describe('Sign up page - linkedIn', () => {

    const signup = new Signuppage();

    it('Login to page by adding details', () => {
        signup.checkLoginByEnteringDetails();
    }) 

    it('Verify sign in fields',() => {
        signup.verifySignInFields();
    })

    it('Join now', () => {
        signup.joinNowLinkedIn();
    })


    it('Sign up page when given weak password', () => {
        signup.enterEmailAndPwd();
        signup.enterFirstNameAndLastName();
        signup.checkWeakPwdAlert();
    })


    it('sign up page when same email is used', () => {

        // sample.enterSameEmailAndPwd();
        // sample.enterFirstNameAndLastName();
        // sample.checkSameEmailAlert();

        cy.visit('https://www.linkedin.com/signup')
        cy.get('[for="email-or-phone"]')
        .type('testing_robot@outlook.com')
        cy.get('#email-or-phone')
        .should('have.value', 'testing_robot@outlook.com');
        cy.get('[for="password"]')
        .type('password_2020')
        cy.get('#password')
        .should('have.value', 'password_2020');
        cy.get('#join-form-submit')
        .contains('Agree & Join')
        .click({force:true});
        cy.get('.join-form__form-body')
        .should('be.visible');
        cy.get('#first-name')
        .type('Testing')
        cy.get('#last-name')
        .type('test');
        cy.get('#join-form-submit')
        .contains('Continue')
        .click();
        cy.get('.alert')
        .should('be.visible')
        .contains('Someone’s already using that email.');
    })

    it('Sign up on giving correct details untill iframe comes which is pop up', () => {
        cy.visit('https://www.linkedin.com/signup')
        cy.get('[for="email-or-phone"]')
        .type('testing_robot+4@outlook.com')
        cy.get('#email-or-phone')
        .should('have.value', 'testing_robot+4@outlook.com');
        cy.get('[for="password"]')
        .type('password_2020')
        cy.get('#password')
        .should('have.value', 'password_2020');
        cy.get('#join-form-submit')
        .contains('Agree & Join')
        .click({force:true});
        cy.get('.join-form__form-body')
        .should('be.visible');
        cy.get('#first-name')
        .type('Testing')
        cy.get('#last-name')
        .type('test');
        cy.get('#join-form-submit')
        .contains('Continue')
        .click();
        cy.get('.challenge-dialog__iframe')
        .should('be.visible');
    })

    it('check cancel button when trying to do forgot pwd', () => {
        signup.verifyCancellingForgotPwdTask();

    })

})