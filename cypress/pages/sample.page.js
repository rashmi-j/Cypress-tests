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

    footer = '.li-footer';
    //secondsection = '.feature-learning';
    secondSection = '.learning-cta__header';
    secondSectionDiv = '.feature-learning > div';
    secondSectionShowMore = '.learning-cta__show-more';
    second = '.show-more-less-state__label-less > .caret-down-icon > .artdeco-icon';
    clickDropDown = ':nth-child(2) > .learning-cta__link > .learning-cta__topic-name';


    thirdSection = '.job-finder-cta';
    thirdSectionSearch = '.suggested-search';


    fourthSection = '.talent-finder-cta';
    fourthSectionText = '.talent-finder-cta > .pill';


    sixthSection = '.people-cta__header';
    sixthSectionButton = '.people-cta__content > .pill';
    sixthSectionNextpage = '.nav';
    sixthSectionSwitchTabs = '.switcher-tabs__placeholder-text';
    sixthSectionDropDown = ':nth-child(1) > .switcher-tabs__button';
    sixthSectionDropDowns = '.switcher-tabs__tab--active > .switcher-tabs__button';


    lastSection = '.join-cta';
    lastSectionText = '.join-cta a';


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
    sameEmailAlert = '.alert';

    iframeDialog = '.challenge-dialog__iframe';



   // joinNowEmailField = '[for="email-or-phone"]';
    email = '#email-or-phone';
    pwd = '[for="password"]';

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

    checkFooter(){
        cy.visit('https://www.linkedin.com');
        cy.get(this.footer).scrollIntoView()
        .should('be.visible');
    }

    secondSectionLinkedIn(){
        cy.visit('https://www.linkedin.com');
        cy.get(this.secondSection).scrollIntoView({duration:2000})
        .should('be.visible');
        cy.get(this.secondSectionDiv)
        .contains('Learn the skills that can help you now');
        cy.get(this.secondSectionShowMore)
        .contains('Choose a topic to learn about');
        cy.get(this.second)
        .click({force:true})
        cy.get(this.clickDropDown)
        .contains('Training and Education');
    }

    thirdSectionLinkedIn(){
        cy.visit('https://www.linkedin.com');
        cy.get(this.thirdSection).scrollIntoView({duration:2000})
        .should('be.visible')
        .contains('Find open jobs and internships');
        cy.get(this.thirdSectionSearch)
        .contains('Suggested Searches');
    }

    fourthSectionLinkedIn(){
        cy.visit('https://www.linkedin.com');
        cy.get(this.fourthSection).scrollIntoView({duration:2000})
        .should('be.visible')
        .contains('Post your job and find the people you need');
        cy.get(this.fourthSectionText)
        .contains('Post a job')
        .click()
        cy.url('includes','https://www.linkedin.com/talent/post-a-job?trk=homepage-basic_talent-finder-cta');
    }

    sixthSectionLinkedIn(){
        cy.visit('https://www.linkedin.com');
        cy.get(this.sixthSection).scrollIntoView({duration:2000})
        .should('be.visible')
        .contains('Connect with people who can help')
        cy.get(this.sixthSectionButton)
        .contains('Find people you know')
        .click()
        cy.url('includes','https://www.linkedin.com/pub/dir/+/+?trk=homepage-basic_people-cta');
        cy.get(this.sixthSectionNextpage)
        .should('be.visible')
        cy.get(this.sixthSectionSwitchTabs)
        .contains('People')
        .click()
        cy.get(this.sixthSectionDropDown)
        .contains('Jobs');
        cy.get(this.sixthSectionDropDowns)
        .contains('People')
    }

    lastSectionLinkedIn(){
        cy.visit('https://www.linkedin.com');
        cy.get(this.lastSection).scrollIntoView({duration:2000})
        .should('be.visible')
        .contains('Join your colleagues, classmates, and friends on LinkedIn.')
        cy.get(this.lastSectionText)
        .contains('Get started')
        .click()
        cy.url('includes','https://www.linkedin.com/signup/cold-join?trk=guest_homepage-jobseeker_join-cta');
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

    enterSameEmailAndPwd(){    //this uses same email but diff pwd
        cy.visit('https://www.linkedin.com/signup')
        cy.get(this.emailFieldText)
        .type('testing_robot@outlook.com')
        cy.get(this.email)
        .should('have.value', 'testing_robot@outlook.com');
        cy.get(this.pwdFieldText)
        .type('password_2020')
        cy.get(this.pwdField)
        .should('have.value', 'password_2020');
        cy.get(this.submit)
        .contains('Agree & Join')
        .click({force:true});
    }

    checkSameEmailAlert(){
        cy.get(this.sameEmailAlert)
        .should('be.visible')
        .contains('Someone’s already using that email.');
    }
}
