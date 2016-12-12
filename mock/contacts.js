var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var port = 4000;
var resource = '/api/contacts';
var contacts = [];
var id = contacts.length;

var app = module.exports = express();

app.use(bodyParser.json(), cors());

app.resource = function(path, obj) {
  this.get(path, obj.index);
  this.post(path, obj.add);
  this.put(path + '/:id', obj.edit);
  this.delete(path + '/:id', obj.destroy);
};

var createContact = function(id, data) {
  return {
    id: id,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email
  };
};

var Contact = {
  index: function(req, res) {
    res.send(contacts);
  },
  add: function(req, res) {
    var contact = createContact(id++, req.body);
    contacts.push(contact);

    res.status(201).send({
      id: (id - 1)
    });
  },
  edit: function(req, res) {
    var id = req.params.id;

    for (var index = 0, length = contacts.length; index < length; ++index ) {
      if (contacts[index].id === id) {
        contacts[index] = createContact(req.params.id, req.body);
      }
    }

    res.send(204);
  },
  destroy: function(req, res) {
    var id = req.params.id;
    var targetIndex;

    for (var index = 0, length = contacts.length; index < length; ++index ) {
      if (contacts[index].id === id) {
        targetIndex = index;
      }
    }

    contacts.splice(targetIndex, 1);
    res.send(200);
  }
};

app.resource(resource, Contact);
app.listen(port);
console.log('Express started on port ' + port);
