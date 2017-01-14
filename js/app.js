
jQuery(function($){
  $(document).ready(function(){

    $(document).foundation();

    $('#videoModal').foundation('open');
    setTimeout(function() {
      $('#videoModal').foundation('close');
    }, 27500);
    
  });
});
