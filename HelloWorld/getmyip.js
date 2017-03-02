'use strict';
var request = require('request-promise');

module.exports = function () {
  this.get = function () {
    return request({uri: 'https://api.ipify.org?format=json', json: true})
    .then(function (result) {
      return result.ip;
    });
  };
};