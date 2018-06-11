describe('Rockies App', () => {
    it('.should() - assert that <title> is correct', () => {

        cy.visit('http://localhost:8080/');
        cy.get("#app > ul > li > a").should("have.text", "ROCKIES GAMEDAY")
        cy.get("#venue > div > select").find("option").should("have.length", 8)
    })
})
