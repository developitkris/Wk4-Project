//Business Logic
/*var toppings = [Pepperoni, Sausage, Meatball, Ham, Bacon, Barbeque chicken, Garlic chicken, Onions, Bellpeppers, Olives, Pineapple, Anchovies, Artichoke, Tomatoes, Spring onions];
*/

function Pizza (toppings){
  this.toppings = toppings;
}

var pizzaBase = 5;
var toppingPrice = 2;
Pizza.prototype.calculatePrice = function (){
 return ((this.toppings.length *2) +pizzaBase);
}


//User Logic
$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();

    $("#results").show();
    $("input:checkbox[name=topping]:checked").each(function(){
      var chosenTopping = [];
      chosenTopping.push($(this).val());
      $("span#results p#confirmation").append(chosenTopping + " ");
    });

    var newPizza = new Pizza(chosenTopping);
    var orderPrice = newPizza.calculatePrice();
    $("span#results p#receipt").append("$" + orderPrice + ".00");

    var reset = $("form#pizza").submit(function(event){
      event.preventDefault();
      if (reset == true){
        location.reload();
      }
    });
  });
});
