export class Sample1 {

    //locators and functions goes here

    searchJob = ':nth-child(1) > .intent-module__button';



    verifySearchJobs(){
        cy.get(this.searchJob)
        //cy.get(':nth-child(1) > .intent-module__button')
        .contains('Search for a job')
        //.click();
        
    }
}