//Business Logic
/*var toppings = [Pepperoni, Sausage, Meatball, Ham, Bacon, Barbeque chicken, Garlic chicken, Onions, Bellpeppers, Olives, Pineapple, Anchovies, Artichoke, Tomatoes, Spring onions];
*/

function Pizza (toppings){
  this.toppings = toppings;
}

var pizzaBase = 8;
var toppingPrice = 1;
Pizza.prototype.calculatePrice = function (pizzaOrder){
 return ((this.toppings.length +1) +pizzaBase);
}


//User Logic
$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();

    $("#results").show();
    $("input:checkbox[name=topping]:checked").each(function(){
      var chosentopping = [];
      chosenTopping.push($(this).val());
      $('#topping').append(toppings + "<br>");
    });
    $('#pizza').hide();
    pizzaOrder = new Pizza(chosenTopping);
    var total = pizzaOrder.calculatePrice();
    return total;
  });
});
