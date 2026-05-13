describe('Core user flow', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/');
  });

it('can edit a task', () => {
  // setup
  cy.contains('button', 'Add project').click();
  cy.get('input[name="name"]').type('My Project');
  cy.get('button[type="submit"]').click();
  cy.contains('My Project').click();

  cy.contains('button', 'Add task').click();
  cy.get('input[name="title"]').type('Original title');
  cy.get('button[type="submit"]').click();

  // wait for task to appear
  cy.contains('Original title').should('exist');

  // edit the task
  cy.get('[aria-label="Edit task"]').click();
  
  //is this bug #2? 🐛
  cy.get('input[name="title"]').should('have.value', 'Original title');
  cy.get('[role="dialog"]').should('exist');
cy.get('input[name="title"]').clear().type('Updated title');  cy.get('button[type="submit"]').click();

  // wait for dialog to close
  cy.get('[role="dialog"]').should('not.exist');

  cy.contains('Updated title').should('exist');
  cy.contains('Original title').should('not.exist');
})
})