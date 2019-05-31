$(document).ready(function(){
  $('#play').click(function(){
    $('.slider').cycle('resume');
  });
  $('#pause').click(function(){
    $('.slider').cycle('pause');
  });
  $('.slider').cycle({
    fx:'zoom',
    sync: false,
    delay: -1000,
    next: '#next',
    prev: '#prev',
    pager:'#pager'
  })
});
