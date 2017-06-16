// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';
  var customersElement = document.querySelector('.customers');
  var promise = $.get('https://randomuser.me/api/?results=12&inc=name,email,location,cell,picture,dob');
  // var title = document.createElement('h1');
  // title.textContent = 'INTERNAL COMPANY DIRECTORY';
  var container = document.querySelector('.customers');
  // container.appendChild(title);

  promise.then(function (data) {

    for (var i = 0; i < data.results.length; i++) {
      var person = data.results[i];
      var customerElement = document.createElement('div');
      customerElement.className = "employee";
      var imageElement = document.createElement('img');
      imageElement.className = "people";
      var nameElement = document.createElement('div');
      nameElement.className = "name";
      var emailElement = document.createElement('div');
      emailElement.className = "email";
      var addressElement = document.createElement('div');
      addressElement.className = "address";
      var cityElement = document.createElement('div');
      cityElement.className = "city";
      var phoneElement = document.createElement('div');
      phoneElement.className = "phone";
      var birthdayElement = document.createElement('div');
      birthdayElement.className = "birthday";

      customersElement.appendChild(customerElement);
      customerElement.appendChild(imageElement);
      customerElement.appendChild(nameElement);
      customerElement.appendChild(emailElement);
      customerElement.appendChild(addressElement);
      customerElement.appendChild(cityElement);
      customerElement.appendChild(phoneElement);
      customerElement.appendChild(birthdayElement);

      var name = person.name.first + " " + person.name.last;
      var date = new Date(person.dob);
      var month = date.getMonth() + 1;
      var day = date.getDay();
      var year = date.getFullYear();
      var dob = month + '/' + day + '/' + year;
      var callMe = person.cell;
      var electricMail = person.email;
      var houseNum = person.location.street;
      var town = person.location.city;
      var state = person.location.state;
      var zip = person.location.postcode;
      var residence = town + "," + " " + state + " " + zip;

      imageElement.src = person.picture.large;
      nameElement.innerText = name;
      emailElement.innerText = electricMail;
      addressElement.innerText = houseNum;
      cityElement.innerText = residence;
      phoneElement.innerText = callMe; 
      birthdayElement.innerText = dob;

    }

  },
    function (data) {

    });

})();


