import { Homepage } from "../../pages/Homepage";


describe('Home page tests - LinkedIn', () => {

    const home = new Homepage();
    //cy.visit('https://www.linkedin.com');

    it('LinkedIn page', () => {
        home.verifyLinkedInLogo();
    })


    it('Verify Join now and url after clicking it',() => {
        home.verifyText();
        home.verifyText1();
        home.verifyText2();
    })


    it('Verify Sign in and url after clicking it',() => {
        home.verifySignInUrl();
    })


    it('Verify different data switcher',() => {
        home.verifySwitches();
    })


    it("View the footer of linkedIn", () => {
        home.checkFooter();

    })


    it("check the third section", () => {
        home.thirdSectionLinkedIn();
    })

    it("check the 4th section", () => {
        home.fourthSectionLinkedIn();
    })

    it("check the 6th section", () => {
        home.sixthSectionLinkedIn();
    })

    it('seventh section', () => {
        home.seventhSectionLinkedIn();
    })


    it('Last section', () => {
        home.lastSectionLinkedIn();
    })


    it("Check the second section in Home page", () => {
        home.secondSectionLinkedIn();
    })
 })