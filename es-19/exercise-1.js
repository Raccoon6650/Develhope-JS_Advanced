const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

//person1 e person2 sono stati assegnati l'uno all'altro quindi qualunque modifica avrà effetto su entrambi gli oggetti