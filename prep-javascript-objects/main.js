const person = {
  firstName: 'Jessica',
  lastName: 'Meyer',
  hobby: 'playing piano'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Registed Nurse';
console.log('The person\'s current job is:', person.job);

person['previousJob'] = 'Server';
console.log('The person\'s previous job is:', person['previousJob']);

console.log(person);
