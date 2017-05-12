// BACK END LOGIC

// PIZZA CONSTUCTOR
function Pizza(pizzaTotalPrice) {
  this.pizzaTotalPrice = pizzaTotalPrice;
  this.toppings = [];
}

// PIZZA PROTOTYPE TO ADD VALUES TOGETHER
Pizza.prototype.addToppings = function(array) {
var result = 0;
for (var i = 0; i < array.length; i++) {
  result += array[i];
  }
 this.pizzaTotalPrice = result;
}



// FRONT END LOGIC
$(document).ready(function(){
// initialize new pizza object
var newPizza = new Pizza();

// Submit click function for all User input Options
$("#pie-builder").submit(function(event) {
  event.preventDefault();
// Takes the value of all checkboxes that are checked and puts them in the pizza object
  var pizzaToppings = $("input:checkbox(name=type):checked").each(function(){
    newPizza.toppings.push(parseFloat($(this).val()));
  });
// Loops through each element in this.toppings array and adds them TOGETHER
  var pizzaTotal = newPizza.addToppings(newPizza.toppings);
// Displays the total coast of the users pizzaTotal
$(".user-pizza-total").text(newPizza.pizzaTotalPrice);

console.log(newPizza);
console.log(pizzaToppings);
console.log(pizzaTotal);
  });
// Show menu click funstion
$("#orderNow").click(function(event){
  event.preventDefault();
  $("#welcome").hide();
  $("#pie-builder").fadeIn(3000);

});

});
