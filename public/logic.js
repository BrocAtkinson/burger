
$(function() {

  $(".create-form").on("submit", function(event) {
  
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim() || '',
      newBurger: $("[name=cheeseburger]:checked").val().trim()|| '',
    };
    $.ajax("/api/burger" ,{
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
       
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
