
$(function() {

  // $(".create-form").on("submit", function(event) {
  
  //   event.preventDefault();

  //   var newBurger = {
  //     name: $("#ca").val() || '',
  //     newBurger: $("[name=cheeseburger]:checked").val() || '',
    
  //   };
  //   $.ajax("/api/burger" ,{
  //     type: "POST",
  //     data: newBurger
  //   }).then(
  //     function() {
  //       console.log("created new burger");
       
  //       location.reload();
  //     }
  //   );
  // });
  $(".create-form").on("submit", function(event) {
    var id = $(this).data("burger");
    var burger = $(this).data("newBurger");
    console.log(id)
    var burger = {
      newBurger: burger,
    function() {
   
      location.reload();
    }}
    
    $.ajax("/api/burgers/" + burger, {
    }).then(
      function() {
      
        location.reload();
      }
    );
  });

  $(".Devoured").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    console.log(id)
    var devoured = {
      devour: devoured,
    function() {
   
      location.reload();
    }}
    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(
      function() {
      
        location.reload();
      }
    );
  });

});
