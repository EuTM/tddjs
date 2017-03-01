var Example = require('./example.js');

describe('The answer to the Ultimate Question of Life, the Universe and Everything', () => {
  
  it('Should be 42', function() {
    // Arrange
    var question =  new Example();
    // Act
    var actual = question.answer();
    // Assert
    expect(actual).toBe(42);
  });
}); 