#!/usr/bin/env node
const faker = require(".");
faker.locale = "de";

console.log(faker.definitions.address.building_number)

function telefonNummer() {
  return "0".concat(
    faker.phone
      .phoneNumber()
      .slice(4)
      .split("-")
      .join(" ")
  );
}

const firstname = faker.name.firstName();
const lastname = faker.name.lastName();
const adress = faker.address.streetAddress().split(" ");
const street = adress[0];
const buildingNumber = adress[1];
const zipCode = faker.address.zipCode();
const telefon = Math.random() > 0.1 ? telefonNummer() : "\\N";
const fax = Math.random() > 0.95 ? telefonNummer() : "\\N";
const email = faker.internet.email();

console.log(faker.address.streetAddress());

console.log(
  `,${firstname},${lastname},${street},${buildingNumber},${zipCode},${telefon},${fax},${email}`
);
