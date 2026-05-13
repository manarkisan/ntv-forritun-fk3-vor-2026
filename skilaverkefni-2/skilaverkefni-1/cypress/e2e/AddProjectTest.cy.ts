describe('Core user flow', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/');
  });

  it('can create a project, add a task and mark it complete', () => {
    cy.contains('button', 'Add project').click();
    cy.get('input[name="name"]').type('My Project');
    cy.get('input[name="description"]').type('A test project');
    cy.get('button[type="submit"]').click();

    cy.contains('My Project').click();

    cy.contains('button', 'Add task').click();
cy.get('input[name="title"]').type('My Task');
cy.get('button[type="submit"]').click();

// wait for the dialog to close and task to appear
cy.get('[role="dialog"]').should('not.exist');

cy.get('[role="checkbox"]').click();
cy.get('[role="checkbox"]').should('have.attr', 'data-state', 'checked');
  });
});