import { Loggedinpage } from "../../pages/Loggedinpage";

describe('Sign up page - linkedIn', () => {

    const loggedin = new Loggedinpage();

    it('After login check few things', () => {
        loggedin.verifyAfterLogin();

    })

    it('Verify urls of nav bar after clicking', () => {
        loggedin.verifyUrlOfNavBar();

    })

    it('After loging in check all options under Me', () => {
       loggedin.verifyOptionsUnderMe();
    })

    it('Verify Launchpad options', ()=> {
        loggedin.verifyOptionsInLaunchpad();
    })

    it('Verify saved items url', () => {
        loggedin.verifySavedItemsAndGrowNetworksUrl();
    })

})