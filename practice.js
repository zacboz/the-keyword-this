//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
//Keyword 'this' stands for a shortcut to refer back to the object in context.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
// 1. explicit: is when the context is specifically passed as first arguement within a function using call(), apply(), bind() methods.
// 2. implicit: is when the context is parent object and function is called as property of parent object
// 3. default or window: the default and global scope of context. Ex: if the first arguement or null or not an object refers to global object.
// 4. new: when creating a new object using the this as context in previous function

  // 3) What is the difference between call and apply?

      //Answer
// The difference between call() and apply is that apply() takes an array as the second arguement, and call() does not.

  // 4) What does .bind do?

      //Answer
// Bind() takes the context as one parameter in a function and uses that function as a reference or pointer to a new function.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property.
  // *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: "zacboz",
  email: "zacboz@yolo",
  getUsername: function() {
    return this.username;
  }
};
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();
//Next Problem


// Write the function definitions which will make the following function invocations function properly.
function Car(make, model, year, move, moveCar) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    return this.move += 10;
  }
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every
// object that is being returned from the Car function. You'll also need to use the 'this' keyword
// properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above,
// use the proper syntax that will allow for you to call the getYear function with the prius
//then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
//getYear.call(prius);
//getYear.call(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here
//object username.
//In the example above, what is the 'this keyword' bound to when getUsername runs?
  //Answer Here
//the object myUser;
//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
