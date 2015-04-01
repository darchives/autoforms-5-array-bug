// Set up collection with schema
// =============================

Contacts = new Mongo.Collection("reproduce-problem-plz");
Contacts.attachSchema(
  new SimpleSchema({
    phoneNumbers: {
      type: [Object],
      label: "Phone",
      optional: true,
    },
    "phoneNumbers.$.label": {
      type: String,
      label: "Label",
      optional: true,
    },
    "phoneNumbers.$.number": {
      type: String,
      label: "Number",
      optional: true,
    }
  })
);

// Add a tiny bit of data
// ======================

if (Meteor.isServer) {
  if (Contacts.find().count() === 0) {
    Contacts.insert({
      phoneNumbers: [{
        label: "number1",
        number: "123"
      },{
        label: "number2",
        number: "1234"
      },]
    });
  }
}


// Helpers for the view
// ====================

if (Meteor.isClient) {
  Template.registerHelper('doc', function() {
      return Contacts.findOne();
  });
}
