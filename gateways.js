// gateways.js
const { phone } = require('faker');
var faker = require('faker');

// sets locale to de
faker.locale = "de";
const images = ['IuLgi9PWETU', 'fIq0tET6llw', 'xcBWeU4ybqs', 'YW3F-C5e8SE', 'H90Af2TFqng'];
gatewayTypes = [
  "Network Gateway",
  "Raspberry PI",
  "Zotac Industry PC"
];

masterTypes = [
  "Arduino Atmega 2560",
  "ST Cotroller ",
  "Netvu Camera"
];

function generateGateways () {
  var gateways = []
  for (var id = 0; id < 50; id++) {
    var uuid = faker.random.uuid()
    var code = faker.random.alphaNumeric(6).toLocaleUpperCase()
    var type = gatewayTypes[Math.round(Math.random() * 2)]
    var image = images[Math.round(Math.random() * 4)]
    var regDate = faker.date.past()
    gateways.push({
        "id": uuid,
        "customerId": "", 
        "code": code, 
        "type":  type,
        "image" : `https://source.unsplash.com/${image}/100x100`,
        "masters": [],
	    "datecreated": regDate
    })
  }
  return { "gateways": gateways }
}

module.exports = generateGateways
 