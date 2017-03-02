import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';
import app from './app.js';
import nock from 'nock';

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
let driver;

describe('Default page', () => {

  beforeEach( async () => {
    // Arrange
    app.startWebserver();      
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    nock('https://api.ipify.org').get('/?format=json').reply(200, {"ip": "127.0.0.1"});        
    await driver.get('http://localhost:3000');
  });

  it('Should contain Hello World', async () => {
    // Arrange
    // Act
    var actual;
    await driver.findElement(webdriver.By.id('test')).then(function(element) {
      element.getText().then(function(text) {
        actual = text;
      });
    });
    // Assert
    expect(actual).toBe('Hello World from 127.0.0.1!');
  });  

  afterEach( async () =>{
    // Clean Up
    app.closeWebserver();       
    await driver.quit();
  });

}); 