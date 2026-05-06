describe('The hoem page', () => {
  beforeEach(() => {
    cy.exec('npm run db:reset && npm run db:seed')
    cy.request('POST', '/test/seed/post', {
      title: 'First Post',
      authorId: 1,
      body: '...',
    })
        cy.request('POST', '/test/seed/user', { name: 'Jane' })
      .its('body')
      .as('currentUser')
  })
  it('succesfully loads', () => {
    cy.visit('/')
  })
})