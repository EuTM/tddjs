var Text = require('./textgenerator.js');

describe('Text Generator', () => {
  it('Should return Hello World', () => {
    // Arrange
    var text =  new Text();
    // Act
    var actual = text.generate();
    // Assert
    expect(actual).toBe('Hello World');
  });
}); 