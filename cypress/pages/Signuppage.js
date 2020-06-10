export class Signuppage {

    welcome = '.header__content';

    username = '#username';
    password = '#password';
    signinButton = '.login__form_action_container';
    meAfterLoginin = '.nav-item__title-container';

    joinNow = '.nav__button-tertiary';
    joinNowContainer = '.main__logo-container';
    joinNowSubtitle = '.main__subtitle';

    emailFieldText = '[for="email-or-phone"]';
    pwdFieldText = '[for="password"]';

    pwdField = '#password';
    submit = '#join-form-submit';
    formBody = '.join-form__form-body';


    firstName = '#first-name';
    lastName = '#last-name';
    continue = '#join-form-submit';
    weakPwdAlert = '.alert';

    forgotPwd = '.footer-app-content-actions';
    cancelForgotPwd = '.form__action';

    verifySignInFields(){
        cy.visit('https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin');
        cy.get(this.username)
        .should('have','Email or Phone');
        cy.get(this.password)
        .should('have','Password');
        cy.get(this.signinButton)
        .contains('Sign in');
    }
    

    checkLoginByEnteringDetails(){
        cy.visit('https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin');
        cy.get(this.welcome)
        .contains('Welcome Back');
        cy.get(this.username)
        .type('testing_robot@outlook.com')
        .should('have.value', 'testing_robot@outlook.com');
        cy.get(this.password)
        .type('Beijing@123')
        .should('have.value','Beijing@123');
        cy.get(this.signinButton)
        .click();
        cy.get(this.meAfterLoginin)
        .eq(0)
        .contains('Me');
    }

    joinNowLinkedIn(){
        cy.visit('https://www.linkedin.com');
        cy.get(this.joinNow)
        .contains('Join now')
        .click()
        cy.url('includes','https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fjobs&trk=guest_homepage-jobseeker_nav-header-join');
        cy.get(this.joinNowContainer)
        .should('be.visible');
        cy.get(this.joinNowSubtitle)
        .contains('Make the most of your professional life')
        cy.get(this.emailFieldText)
        .contains('Email or phone number');
        cy.get(this.pwdFieldText)
        .contains('Password (6 or more characters)')
    }


    enterEmailAndPwd(){
        cy.visit('https://www.linkedin.com/signup')
        cy.get(this.emailFieldText)
        .type('testing_robot@outlook.com')
        cy.get(this.email)
        .should('have.value', 'testing_robot@outlook.com');
        cy.get(this.pwdFieldText)
        .type('password')
        cy.get(this.pwdField)
        .should('have.value', 'password');
        cy.get(this.submit)
        .contains('Agree & Join')
        .click({force:true});
    }

    enterFirstNameAndLastName(){
        cy.get(this.formBody)
        .should('be.visible');
        cy.get(this.firstName)
        .type('Testing')
        cy.get(this.lastName)
        .type('test');
        cy.get(this.continue)
        .contains('Continue')
        .click();

    }

    checkWeakPwdAlert(){
        cy.get(this.weakPwdAlert)
        .should('be.visible')
        .contains('Please enter a more secure password.');
    }

    verifyCancellingForgotPwdTask(){
        cy.visit('https://www.linkedin.com/login');
        cy.get(this.forgotPwd)
        .contains('Forgot password?')
        .click()
        cy.url('includes','https://www.linkedin.com/checkpoint/rp/request-password-reset');
        cy.get(this.cancelForgotPwd)
        .contains('Cancel')
        .click()
        cy.url('includes','https://www.linkedin.com/login');
    }
}