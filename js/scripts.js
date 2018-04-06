//Business Logic
var toppings = [Pepperoni, Sausage, Meatball, Ham, Bacon, Barbeque chicken, Garlic chicken, Onions, Bellpeppers, Olives, Pineapple, Anchovies, Artichoke, Tomatoes, Spring onions];
var toppingPrice = 1;
function Pizza (toppings, price){
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.calculate = function (){
  return (8 + (this.toppings.length *1));
}


//User Logic
$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();
    $("#results").show();
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppings = $(this).val();
      $('#topping').append(toppings + "<br>");
    });
    $('#pizza').hide();
  });
});
