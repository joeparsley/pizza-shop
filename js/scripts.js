// BACK END LOGIC

// PIZZA CONSTUCTOR
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

// PIZZA PROTOTYPE TO ADD SIZE TO PIZZ object
Pizza.prototype.addPizzaSize = function(size) {
  this.size = size;
}

// PIZZA PROTOTYPE TO ADD VALUES TOGETHER
Pizza.prototype.addToppings = function() {

}

// FRONT END LOGIC
$(document).ready(function(){
// initialize new pizza object
var newPizza = new Pizza();

// Submit click function for all pizzas
$("#pie-builder").submit(function(event) {
  event.preventDefault();
  var pizzaSize = parseFloat($("#size-input:checked").val());
  var addSize = newPizza.addPizzaSize(pizzaSize);
console.log(pizzaSize);
console.log(newPizza);
  });

});
