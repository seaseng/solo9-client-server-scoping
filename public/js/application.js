$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
      var awesomeness = $(this).data().heading; //get text
      $('#awesomeness_holder').text(awesomeness);
  });

  $('.skill_teller').on('click', function(e) {
      // e.preventDefault();
      var path = window.location.pathname;
      var path_arguments = path.split('/');
      var skill = path_arguments.pop();
      $('#skill_holder').text(skill + '!');
      $('#skill_holder').addClass('capitalize');

  });

  $('.meal_teller').on('click', function(e) {
    // e.preventDefault();
    // get a random meal
    meal = meals[Math.floor(Math.random()*meals.length)];
    // console.log(meals[Math.floor(Math.random()*meals.length)]);
    $('#meal_holder').text(meal);

  });

  // What other events do you need to bind to make the other pages work?
});
