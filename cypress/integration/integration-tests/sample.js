import { Sample } from "../../pages/sample.page";

describe('Sample tests using - LinkedIn', () => {

    const sample = new Sample();
    //cy.visit('https://www.linkedin.com');

    it('LinkedIn page', () => {
        sample.verifyLinkedInLogo();
    })


    it('Verify Join now and url after clicking it',() => {
        sample.verifyText();
        sample.verifyText1();
        sample.verifyText2();
    })


    it('Verify Sign in and url after clicking it',() => {
        sample.verifySignInUrl();
    })


    it('Verify different data switcher',() => {
        sample.verifySwitches();
    })


    it('Verify sign in fields',() => {
        sample.verifySignInFields();
    })


    it('Login to page by adding details', () => {
        sample.checkLoginByEnteringDetails();
    }) 

    it("View the footer of linkedIn", () => {
        sample.checkFooter();

    })

    it("Check the second section in Home page", () => {
        sample.secondSectionLinkedIn();
    })

    it("check the third section", () => {
        sample.thirdSectionLinkedIn();
    })

    it("check the 4th section", () => {
        sample.fourthSectionLinkedIn();
    })

    it("check the 6th section", () => {
        sample.sixthSectionLinkedIn();
    })

    it('seventh section', () => {
        sample.seventhSectionLinkedIn();
    })


    it('Last section', () => {
        sample.lastSectionLinkedIn();
    })


    it('Join now', () => {
        sample.joinNowLinkedIn();
    })

    it('Sign up page when given weak password', () => {
        sample.enterEmailAndPwd();
        sample.enterFirstNameAndLastName();
        sample.checkWeakPwdAlert();
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
        sample.verifyCancellingForgotPwdTask();

    })

    it('After login check few things', () => {
        sample.verifyAfterLogin();

    })
    


 })