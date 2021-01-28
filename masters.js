// gateways.js
const { phone } = require('faker');
var faker = require('faker');

// sets locale to de
faker.locale = "de";
const images = ['IuLgi9PWETU', 'fIq0tET6llw', 'xcBWeU4ybqs', 'YW3F-C5e8SE', 'H90Af2TFqng'];

masterTypes = [
  "Arduino Atmega 2560",
  "ST Controller ",
  "Netvu Camera"
];

function generateMasters () {
  var masters = []
  for (var id = 0; id < 50; id++) {
    var uuid = faker.random.uuid()
    var code = faker.random.alphaNumeric(6).toLocaleUpperCase()
    var type = masterTypes[Math.round(Math.random() * 2)]
    var image = images[Math.round(Math.random() * 4)]
    var regDate = faker.date.past()
    var status = faker.random.number(9)
    var swInfo = faker.system.semver()
    var hwInfo = faker.system.semver()
    var hasGateway = faker.random.boolean()
    var hwInfo = faker.system.semver()
    masters.push({
      "id": uuid,
      "type":	type,
      "code":	code,
      "dateCreated":	regDate,
      "status":	status,
      "softwareInfo":	swInfo,
      "hardwareInfo":	hwInfo,
      "hasGateway":	hasGateway,
      "gatewayId":	"",
      "customerId":	"",
      "devices":	[],
      "image" : `https://source.unsplash.com/${image}/100x100`,
      "masters": "",
	    "datecreated": regDate
    })
  }
  return { "masters": masters }
}

module.exports = generateMasters
 