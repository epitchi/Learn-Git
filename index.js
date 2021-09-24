// var Dog = require('./Dog');
// var dog = new Dog('Tom');
// dog.sayHi();
var Cat = require('./Cat');
var Mouse = require('./Mouse')
var Dog = require('./Dog')

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog('Beo');
try{
  cat.eat(dog);
} catch(error){
  console.log('Error while cat eating a dog');
}
console.log(cat);
