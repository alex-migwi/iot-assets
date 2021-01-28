// employees.js
const { phone } = require('faker');
var faker = require('faker');

// sets locale to de
faker.locale = "de";
const images = ['IuLgi9PWETU', 'fIq0tET6llw', 'xcBWeU4ybqs', 'YW3F-C5e8SE', 'H90Af2TFqng'];

function generateCustomers () {
  var customers = []
  for (var id = 0; id < 50; id++) {
    var uuid = faker.random.uuid()
    var firstName = faker.name.firstName()
    var middleName = faker.name.lastName()
    var surName = faker.name.lastName()
    var email = faker.internet.email()
    var phone = faker.phone.phoneNumber()
    var regDate = faker.date.past()
    var customerType = faker.random.word()
    var image = images[Math.round(Math.random() * 4)]
    customers.push({
      "id": uuid,
      "firstName": firstName,
      "middleName": middleName,
      "surName" : surName,
      "email": email,
      "phone": phone,
      "image" : `https://source.unsplash.com/${image}/100x100`,
      "customerType": customerType,
	    "registrationDate": regDate
    })
  }
  return { "customers": customers }
}
module.exports = generateCustomers
 