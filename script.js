$(document).ready(function(){
    $("a").click(function(){
$(this).addClass('clicked');
$("a").dblclick(function(){
    $(this).removeClass('clicked')
    });
    });

   $("button[type='submit']").click(function(){
       alert('not found');
   });

   $(".author img").click(function(){
   
   $(this).animate({
    height: "100px"
  }, 1000)
    
    
});

$(".hero-post img").click(function(){
    $(this).fadeOut(500, function(){
        $(this).attr('src', './img/imgchange.png')
    });
});


});