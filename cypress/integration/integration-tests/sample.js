import { Sample } from "../../pages/sample.page";

describe('Sample tests using - LinkedIn', () => {

    const sample = new Sample();

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
 })