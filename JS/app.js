(function() {


  function addNewList() {
    $('#add').on('click', function() {

      var newList = $('input').val();


      if (newList === '' || null) {

        alert('Please Fill The Required Field To Add A New List')
      } else {

        $('#myList').append('<p class="well"><button class="btn btn-danger delete"><i class="fa fa-trash" aria-hidden="true"></i> </button>' + newList + '</p>');

      }

      $('input').val('');


    })
  };

  addNewList();


  $('input').on('keypress', function(e) {

    if (e.keyCode === 13) {

      $('#add').click();
    }

  });


  $('#myList').on('click', '.delete', function() {

    $(this).parent().fadeOut(function() {

      $(this).remove();

    });

  })




}());
