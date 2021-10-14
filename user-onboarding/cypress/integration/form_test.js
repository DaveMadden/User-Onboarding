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

    describe('filling out inputs etc', () => {
        it('can navigate to the url', () => {
            cy.url().should('include', 'localhost');
        })
        // submit button should start out disabled
        it('submit button starts out disabled', () => {
            submit().should('be.disabled');
        })
        //can type in inputs
        it('can type in the inputs and check the box', () => {
            fname()
                .should('have.value', '')
                .type('test content')
                .should('have.value', 'test content');
            lname()
                .should('have.value', '')
                .type('test content')
                .should('have.value', 'test content');
            email()
                .should('have.value', '')
                .type('test@test.com')
                .should('have.value', 'test@test.com');
            pwd()
                .should('have.value', '')
                .type('test content')
                .should('have.value', 'test content');
            tos()
                .should('not.be.checked')
                .check()
                .should('be.checked');
        })
    })
    describe('testing submit', () => {
        it('submit is enabled when shit is good', () => {
            fname().type('testing');
            lname().type('testing');
            email().type('testing@test.com');
            pwd().type('testing');
            tos().check();
            submit().should('not.be.disabled');
        })
        it('submit populates the dom', () => {
            fname().type('Wendell');
            lname().type('Berry');
            email().type('nocontact@doesnthaveone.com');
            pwd().type('worldendingfire');
            tos().check();
            submit().click();
            cy.contains('Wendell');
        })
    })
    describe('testing validation', () => {
        //no first
        it('testing no first name', () => {
            lname().type('Berry');
            email().type('nocontact@doesnthaveone.com');
            pwd().type('worldendingfire');
            tos().check();
            submit().should('be.disabled');
        })
        //no last
        it('testing no last name', () => {
            fname().type('Wendell');
            email().type('nocontact@doesnthaveone.com');
            pwd().type('worldendingfire');
            tos().check();
            submit().should('be.disabled');
        })
        //invalid email
        it('testing no last name', () => {
            fname().type('Wendell');
            lname().type('Berry');
            email().type('no.com');
            pwd().type('worldendingfire');
            tos().check();
            submit().should('be.disabled');
        })
        //password too short
        it('testing no last name', () => {
            fname().type('Wendell');
            lname().type('Berry');
            email().type('no@no.com');
            pwd().type('wow');
            tos().check();
            submit().should('be.disabled');
        })
        //tos not checked
        it('testing no last name', () => {
            fname().type('Wendell');
            lname().type('Berry');
            email().type('no@no.com');
            pwd().type('wowwowweewow');
            submit().should('be.disabled');
        })
    })
})