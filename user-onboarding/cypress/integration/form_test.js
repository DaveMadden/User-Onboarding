describe('testing user-onboarding', () => {
    beforeEach(() => {
        // Before each test, we need fresh state!
        // aka, we don't want to rely on state
        // left over from a previous test
        cy.visit('http://localhost:3000');
    })

    //getters
    const fname = () => cy.get('input[name=first_name]');
    const lname = () => cy.get('input[name=last_name]');
    const email = () => cy.get('input[name=email]');
    const pwd = () => cy.get('input[name=pwd]');
    const tos = () => cy.get('input[name=tos]');
    const submit = () => cy.get("button[id='submitBtn']");

    it('sanity check to make sure tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // strict ===
        expect({}).to.eql({}); // not strict ==
    })

    it('elements are selected and showing', () => {
        fname().should('exist');
        lname().should('exist');
        email().should('exist');
        pwd().should('exist');
        tos().should('exist');
        submit().should('exist');
    })
})