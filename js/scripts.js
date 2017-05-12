// BACK END LOGIC

// PIZZA CONSTUCTOR
function Pizza() {
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


  var pizzaToppings = $("input:checkbox(name=type):checked").each(function(){
    newPizza.toppings.push($(this).val());
  });


console.log(newPizza);
console.log(pizzaToppings);
  });

});
