describe('To-Do List', () => {
  beforeEach(() => {
      cy.visit('index.html');
  });

  it('Adiciona uma tarefa à lista', () => {
      const taskText = 'Fazer compras';
      cy.get('#taskInput').type(taskText);
      cy.get('#addTask').click();
      cy.get('#taskList').should('contain', taskText);
  });

  it('Não adiciona uma tarefa vazia à lista', () => {
      cy.get('#addTask').click();
      cy.get('#taskList').should('be.empty');
  });

});
