const props = {
  1: 1,
  2: 2
};
//console.log(props.length)
//undefined

const cow = {
  color: 'Black & White',
  breed: 'Holstein',
  sayMoo: function() {
    console.log('Moo moo');
  },
  paintPink: function() {
    this.color = 'pink';
  }

};
const frenchCow = {
  sayMoo: function() {
    console.log('Meuh meuh');
  }
}
const newnewCow = {
  color: 'Black & White',
  breed: 'Holstein',
  sound: 'I\'m a new cow',
  sayMoo: function() {
    console.log(this.sound);
  },
}
const newCow = {
  color: 'Black & White',
  breed: 'Holstein',
  sound: 'Moo moo',
  sayMoo: function() {
    console.log(this.sound);
  },
  friend: newnewCow
};

const dog = {
  color: 'Black & White',
  breed: 'Dalmatian',
  sound: 'Woof woof bark bark',
  length: Object.keys(this).length,
  makeSound: function() {
    console.log(this.sound);
  },
  tellBreed: function() {
    console.log(this.breed);
  },
  mutation: function(newBreed) {
    this.breed = newBreed;
  },
  addProperty: function(key, value) {
    this[key] = value;
  },
  listKeys: function() {
    console.log(Object.keys(this));
  },
  countKeys: function() {
    return Object.keys(this).length;
  }()

}
dog.listKeys();
dog.countKeys;
console.log(dog);
//console.log(cow.breed, cow.sayMoo);
//Holstein function() {
// ...
// }
cow.sayMoo(); // Moo moo
frenchCow.sayMoo(); // Meuh meuh
newCow.sayMoo(); // Moo moo
//cow.paintPink();
console.log(cow.color);
console.log(newCow.friend.sayMoo());
dog.mutation('Mastiff');
console.log(dog.tellBreed()); //Mastiff

dog.addProperty('loyal', 'always');
dog.addProperty('bestFriend', 'humans');

dog.listKeys();
dog.countKeys;
console.log(dog);