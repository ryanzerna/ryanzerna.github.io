
jQuery(function($){
  $(document).ready(function(){

    $(document).foundation();

    if(!Cookies.get('video')) {
      Cookies.set('video', 'true', { expires: 1, path: '' });
      $('#videoModal').foundation('open');
      setTimeout(function() {
        $('#videoModal').foundation('close');
      }, 27500);
    }
  });
});
