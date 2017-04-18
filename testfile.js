var inherits = require('util').inherits;

//bird child class
function Bird(name){
    Animal.call(this,name);
    //additional construction code

}
inherits(Bird,Animal);
//addiotional memeber functions
Bird.prototype.fly = function(destination){
    console.log(this.name,' is flying to ',destination)
};
var bird = new Bird('sparrow');
bird.walk('krishnarampur');