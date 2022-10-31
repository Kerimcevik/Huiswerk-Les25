$(document).ready(function() {
  // Lijst sorteerbaar maken
  $(function() {
    $('.todo-lijst').sortable();
  });
  // items toevoegen aan lijst, mits er iets staat in het veld
  $('.knop').click(function() {
    if ($('.todo').val()) {
      var todo = $('.todo').val();
      $('.todo-lijst').append('<li>' + todo +'<i class="fa fa-check"></i><i class="fa fa-trash"></i> </li>');
      $('.todo').val('');
    }else {
      alert('Voer eerst wat in het veld!');
    }
  });

  //Lijst item verwijderen
  $('.todo-lijst').on('click', '.fa-trash' ,function() {
      $(this).parent('li').fadeOut(200);
  });

  //Lijst item voltooien d.m.v toggle, zodat deze weer terug kan naar origineel
  $('.todo-lijst').on('click', '.fa-check' ,function() {
      $(this).parent('li').toggleClass('checked');
  });
});
