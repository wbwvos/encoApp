angular.module('starter.services', [])
.factory('Dashboard', function(){
	var dashboard = [{
    id: 0,
    name: 'Koffiezetapparaat',
	datum: '24-03-2016',
	prijs: '9,69'
  }, {
    id: 1,
    name: 'Receptie Familie',
	datum: '23-03-2016',
	prijs: '24,00'
  }, {
    id: 2,
    name: 'Bruiloft Goossens',
	datum: '22-03-2016',
	prijs: '10,00'
  }, {
    id: 3,
    name: 'Etentje',
	datum: '21-03-2016',
	prijs: '44,00'
  }, {
    id: 4,
    name: 'Jubileum',
	datum: '20-03-2016',
	prijs: '7,00'
  }]; 
	return {
		all: function() {
		  return dashboard;
		}
	}
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
