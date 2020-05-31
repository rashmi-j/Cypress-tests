import { Sample1 } from "../../cypress/pages/sample1.page";

describe('Pending tests', () => {

const sample1 = new Sample1();

//it functions goes here
it('First section fields under jobs', () => {
    cy.visit("https://www.linkedin.com");
    sample1.verifySearchJobs();

})


})