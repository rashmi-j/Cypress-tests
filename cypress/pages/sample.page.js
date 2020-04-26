export class Sample {
    //constructor() { }

    linkedin = '.linkedin-text';
    hero = '.hero';
    joinnow = '.nav__button-tertiary';
    signin = '.nav__button-secondary';
    jobs = '.nav ul li';
    people = '[data-searchbar-type="PEOPLE"]';
    learning = '[data-switcher-type="LEARNING"]';
    username = '#username';
    password = '#password';
    signinButton = '.login__form_action_container';
    meAfterLoginin = '.nav-item__title-container';

    verifyLinkedInLogo(){
        cy.visit('https://www.linkedin.com/');
        cy.get(this.linkedin)
        .should('be.visible');
    }

    verifyText(){
        cy.visit('https://www.linkedin.com/');
        cy.get(this.hero)
        .contains('Welcome to your professional community');
    }

    verifyText1(){
        cy.get(this.joinnow)
        .contains('Join now');
    }

    verifyText2(){
        cy.get(this.joinnow)
        .click();
        cy.url('include','https://www.linkedin.com/signup/cold-join?trk=guest_homepage-basic_nav-header-join');
    }

    verifySignInUrl(){
        cy.visit('https://www.linkedin.com/');
        cy.get(this.signin)
       .contains('Sign in')
       .click()
       cy.url().should('include', 'https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin');
    }

    verifySwitches(){
        cy.visit('https://www.linkedin.com/');
        cy.get(this.jobs)
        .contains('Jobs');

        // cy.get('.dismissable-input')
        // cy.wait(4000)
        // .contains('Search job titles or companies');
        cy.get(this.people)
        .contains('People');
        cy.get(this.learning)
        .contains('Learning');
    }

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
}
