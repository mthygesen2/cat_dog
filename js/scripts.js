$(function(){
  $("button#cat").click(function() {
    $("ul#catsays").prepend("<li>meow!</li>");
    $("ul#dogsays").prepend("<li>Hi cat!</li>");
    $("ul#catsays, ul#dogsays").children("li").click(function() {
      $(this).remove();
    });
  });


  $("button#dog").click(function() {
    $("ul#dogsays").prepend("<li>woof-woof!</li>");
    $("ul#catsays").prepend("<li>Leave me alone!</li>");
    $("ul#dogsays, ul#catsays").children("li").click(function() {
      $(this).remove();
  });
});



});
