var Ip = require('./getmyip.js');
var nock = require('nock');

describe('Get my ip', () => {
  it('Should return the ip 1', async () => {
    // Arrange
    nock('https://api.ipify.org').get('/?format=json').reply(200, {"ip": "127.0.0.1"});    
    var ip =  new Ip();
    // Act
    var actual = await ip.get();
    // Assert
    expect(actual).toBe('127.0.0.1');
  });

  it('Should return the ip 2', async () => {
    // Arrange
    nock('https://api.ipify.org').get('/?format=json').reply(200, {"ip": "127.0.0.2"});    
    var ip =  new Ip();
    // Act
    var actual = await ip.get();
    // Assert
    expect(actual).toBe('127.0.0.2');
  });
}); 