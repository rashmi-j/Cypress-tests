export class Loggedinpage {

    linkedin = '.linkedin-text';
    hero = '.hero';
    joinnow = '.nav__button-tertiary';
    signin = '.nav__button-secondary';
    jobs = '.nav ul li';
    people = '[data-searchbar-type="PEOPLE"]';
    learning = '[data-switcher-type="LEARNING"]';

    //welcome = '.header__content';

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
    


    seventhSection = '.brand-discovery';
    seventhSectionQuestion = '.brand-discovery__header';
    seventhSectionAnswer = '.brand-discovery__subtitle';
    seventhSectionFirstOption = ':nth-child(1) > .brand-discovery__button';
    seventhSectionSecondOption = ':nth-child(2) > .brand-discovery__button';
    seventhSectionThirdOption = ':nth-child(3) > .brand-discovery__button';

    lastSection = '.join-cta';
    lastSectionText = '.join-cta a';

    sameEmailAlert = '.alert';

    iframeDialog = '.challenge-dialog__iframe';

    email = '#email-or-phone';
    pwd = '[for="password"]';

    extendedNav = '#extended-nav';
    home = '#feed-nav-item';
    myNetwork = '#mynetwork-nav-item';
    jobsNav = '#jobs-nav-item';
    messaging = '#messaging-nav-item';
    notification = '#notifications-nav-item';
    appLauncher = '#app-launcher-nav-item';


    //Options under Me
    memberName = '.nav-settings__member-name';
    viewProfile = '.nav-settings__linkcard span';
    account = '.nav-settings__dropdown-options--account h5';
    settingsAndPrivacy = 'a#ember29.nav-settings__dropdown-item-link.block.t-black--light.t-bold.ember-view';
    help = 'button.nav-settings__dropdown-item-link.nav-settings__dropdown-button-link.t-14.t-black--light.t-bold.block';
    helpPopup = '[data-test-id="welcome-message-header"]';
    //helpCloseButton = '#ember682 > .artdeco-button__icon > svg';
    language = 'a#ember33.nav-settings__dropdown-item-link.block.t-black--light.t-bold.ember-view';
    postsAndActivity = 'a#ember34.nav-settings__dropdown-item-link.nav-settings__manage-link.nav-settings__view-activity-link.block.t-black--light.t-bold.ember-view';
    jobPostingAccount = 'a#ember36.nav-settings__dropdown-item-link.block.nav-settings__manage-link.t-black--light.t-bold.ember-view';

    signout = 'a#ember38.nav-settings__dropdown-item-link.block.t-black--light.t-bold.ember-view';

    launchPadArrow = '.artdeco-button__text > .v-align-middle > svg';

    addWorkExperience = '#ember7332  > span';
    launchPadtitle = '.launchpad__title';
    findConnections = '#launchpad-cards.launchpad__cards.fl';
    followHashTags = 'button#ember7339.launchpad-card__mini-cta.artdeco-button.artdeco-button--1.artdeco-button--tertiary.ember-view';

    launchPadcards = '#launchpad-cards';

    savedItems = '.feed-identity-module__anchored-widget';

    growNetworks = '.entity-list';


    //signedup page data-ids

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

    verifyAfterLogin(){
        this.checkLoginByEnteringDetails();
        cy.get(this.extendedNav)
        .should('be.visible');
        cy.get(this.home)
        .contains('Home');
        cy.get(this.myNetwork)
        .contains('My Network');
        cy.get(this.jobsNav)
        .contains('Jobs');
        cy.get(this.messaging)
        .contains('Messaging');
        cy.get(this.notification)
        .contains('Notifications');
        cy.get(this.appLauncher)
        .contains('Work');
    }

    verifyUrlOfNavBar(){
        this.checkLoginByEnteringDetails();
        cy.get(this.home) .click()
        cy.url().should('eq','https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin');
        cy.get(this.myNetwork).click()
        cy.url().should('eq','https://www.linkedin.com/mynetwork/');
        cy.get(this.jobsNav).click()
        cy.url().should('eq','https://www.linkedin.com/jobs/');
        cy.get(this.messaging).click()
        cy.url().should('eq','https://www.linkedin.com/messaging/thread/6662047799661727744/');
        cy.get(this.notification).click()
        cy.url().should('eq','https://www.linkedin.com/notifications/');

    }


    verifyOptionsUnderMe() {
        this.checkLoginByEnteringDetails();
        cy.get(this.memberName)
        .contains('Testing Robot');
        cy.get(this.settingsAndPrivacy)
        .contains('Settings & Privacy');
        cy.get(this.help)
        .contains('Help')
        cy.get(this.help)
        .click({force:true})
        cy.get(this.helpPopup).should('be.visible')
        .contains('Hi Testing, we’re here to help.');
        // cy.get(this.helpCloseButton)
        // cy.wait(4000)
        // .should('be.visible')
        // .click({force:true});
        cy.get(this.language)
        .contains('Language');
        // .click({force:true})
        // cy.url('includes','https://www.linkedin.com/psettings/select-language');
        cy.get(this.postsAndActivity)
        .contains('Posts & Activity');
        cy.get(this.jobPostingAccount)
        .contains('Job posting account');
        cy.get(this.signout)
        .contains('Sign out');
    }

    verifyOptionsInLaunchpad(){
        this.checkLoginByEnteringDetails();
        cy.get(this.launchPadArrow)
        .click();
        cy.get(this.launchPadtitle)
        .contains('Testing, complete these steps to get the most out of LinkedIn:');
        cy.get(this.launchPadcards)
        .eq(0)
        .contains('Add work experience');
        cy.get(this.findConnections)
        .eq(0)
        .contains('Find connections');
        // cy.get(this.followHashTags)
        // cy.wait(2000)
        // .eq(2)
        // .contains('Follow hashtags');
    }

    verifySavedItemsAndGrowNetworksUrl(){
        this.checkLoginByEnteringDetails();
        cy.get(this.savedItems)
        .eq(0)
        .click();
        cy.url('includes','https://www.linkedin.com/feed/saved/');
        // cy.get(this.growNetworks)
        // .click()
        // cy.url('includes','https://www.linkedin.com/mynetwork/');
    }


}