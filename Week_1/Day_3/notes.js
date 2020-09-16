const superObject = {
  0: 'a',
  1: 'b',
  2: 'c'
};
const joesArray = [true, true, 'JOE123'];
const joesObject = {
  glasses: true,
  student: true,
  student_id: 'JOE123'
};

const andrewsObject = {
  glasses: false,
  student: true,
  student_id: 'ANDIIII'
};

andrewsObject.glasses = true;

const francisProps = {

};

const studentList = [joesObject, andrewsObject];
andrewsObject.glasses
andrewsObject['glasses']

const keyToCheck = 'glasses';

joesObject[keyToCheck]

const fridge = {};

const myFriend1 = {
  name: 'Bob',
  with_friend: true
}

fridge.pickles = {
  name: 'pickles',
  quantity: '400ml',
  homemade: {
    is_homemade: true,
    with_friend: myFriend1
  }
};

console.log(fridge);
console.log(fridge.pickles.homemade.with_friend.name)
console.log(typeof superObject);
console.log(superObject[0]);
const pickleJar = fridge.pickles;
let pickleJarQuantity = fridge.pickles.quantity;
pickleJarQuantity = '200ml';

console.log('pickleJar', pickleJar);
console.log('pickles', fridge.pickles);

const array = [1,2,3];

const array2 = array;

const array3 = [...array]
array2.splice(1,1,9);

console.log(array, array2, array3);
