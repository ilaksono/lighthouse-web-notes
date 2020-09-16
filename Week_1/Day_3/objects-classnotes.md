 # Objects
 ## September 16, 2020

 Array is an object, not primitive data type

 Difference between object and array in application.
 * unordered list
 * functions can be declared in objects
 * can create classes, prototypes from objects
 * arrays are for 1 thing
 * objects are for properties of individual things that could be in a class type

 Question:

 Why do we use variables in code?
 A: To reuse content.
 A: To know and communicate a value/placeholder/actions in a variable.

 When create a new variable, and assigning it an existing object, changing the new variable's properties is still accessing the same object in computer memory. It is just using a different name for the object, but same object.

 Need to create a new object [...arr]


  # METHODS
 Number.IsNaN() methods is a function that belong to the Number constructor, which is an object.
 ```
 const list = [1,2,3];
 list.length
 
 const properties = {
   1: 'a',
   2: 'b',
 };

 cannot do properties.length


In the process of creating an object, the object is technically empty when you try to access it with this.

example:
dog = {
  length: Object.keys(this).length
  whatAmI: this
};

console.log(dog.length) will log 0, even though there are 2 keys declared in object. But the length property is executed while the dog is being initialized, which means it is not yet created.

Similarly, whatAmI will return {}, an empty object - because the dog is still being initialized.

The properties/methods need to be called after the object is initialized.