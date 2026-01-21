describe('Login Flow', () => {
  beforeEach(() => {
    // Visit the login page
    // Ensure your frontend is running on this port
    cy.visit('http://localhost:5173'); 
  });

  it('should login successfully and display tasks', () => {
    // Fill in credentials
    cy.get('input[placeholder="Email"]').type('test@example.com');
    cy.get('input[placeholder="Mot de passe"]').type('1234');
    
    // Submit form
    cy.get('button[type="submit"]').click();

    // Verify redirect
    cy.url().should('include', '/tasks');

    // Verify user name in title
    cy.contains('Liste des tâches de test@example.com').should('be.visible');

    // Verify tasks are displayed
    // Note: This assumes the backend is running and serving these tasks
    cy.contains('Tâche 1 pour Test').should('be.visible');
  });
});
