// devices.js
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

function generateDevices () {
  var devices = []
  for (var id = 0; id < 50; id++) {
    var uuid = faker.random.uuid()
    var code = faker.random.alphaNumeric(6).toLocaleUpperCase()
    var type = gatewayTypes[Math.round(Math.random() * 2)]
    var image = images[Math.round(Math.random() * 4)]
    var regDate = faker.date.past()
     var hasMaster = faker.random.boolean()
     var pinNumber = faker.random.number(15)
     var maxVolt = faker.random.number(10,12)
     var minVolt = faker.random.number(2,4)
     var volt = faker.random.number(2,12)
     var samplRate = faker.random.number(2,4)
     var sendFreq = faker.random.number(2,4)
     var buffer = faker.random.number(2,4)
     var thresh = faker.random.number(2,4)
     var ctrlId = faker.random.uuid()
     var volt = faker.random.number(2,12)
    devices.push({
      "id": uuid,
      "customerId": "", 
      "code": code, 
      "image" : `https://source.unsplash.com/${image}/100x100`,
      "maximum":	maxVolt,
      "minimum":	minVolt,
      "voltage":	volt,
      "samplingRate":	samplRate,
      "sendFrequency":	sendFreq,
      "bufferSize":	buffer,
      "threshhold":	thresh,
      "controllerId":	ctrlId,
      "pinNumber":	pinNumber,
      "hasMaster":	hasMaster,
      "masterId":	"",
      "customerId":	"",
      "dateCreated":	regDate
    })
  }
  return { "devices": devices }
}

module.exports = generateDevices
 