// start header
let coloContainers =$(".items")
coloContainers.eq(0).css("backgroundImage","url('img/ManWeb_landing.png')")
coloContainers.eq(1).css("backgroundImage","url('img/g.jpg')")
coloContainers.eq(2).css("backgroundImage","url('img/gh.jpg')")
coloContainers.eq(3).css("backgroundImage","url('img/wy.jpg')")
coloContainers.click(function(){
    let col=$(this).css("backgroundImage")
    $(".header").css("backgroundImage",col);
  });

 

// dark mode
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


//scroll up
$(document).ready(function(){
  var offset = 550;
  var duration = 300;
  $(window).scroll(function(){
      if($(this).scrollTop() > offset){
          $('.to-top').fadeIn(duration);
      }else{
          $('.to-top').fadeOut();
      }
  });
  $('.to-top').click(function(){
      $('html, body').animate({scrollTop: 0}, duration);
})
});


//scrolling
$(document).ready(function(){
  // $('body').niceScroll({
  //     cursorcolor: '#5855BC',
  //     cursorborder: '1px solid #5855BC'
  // });

  $('.gh').niceScroll({
    cursorcolor: '#5855BC',
    cursorborder: '1px solid #5855BC'
});

 
});

// scrolldwn
$('.header .mouse a').click(function () {
  $('html, body').animate({
      scrollTop: $('.section').offset().top
  }, 1000);
})




// active link
$(document).on('click', 'ul li', function(){
  $(this).addClass('active').siblings().removeClass('active')
})



$(document).on('click', '#buton button', function(){
  $(this).addClass('active').siblings().removeClass('active')
})






// categury page 
$(document).ready(function(){

  var list = $(".hy .card");
  var numToShow = 6;
  var button = $("#next");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
   button.show();
  }
  list.slice(0, numToShow).show();
  
  button.click(function(){
     var showing = list.filter(':visible').length;
     list.slice(showing - 1, showing + numToShow).fadeIn();
     var nowShowing = list.filter(':visible').length;
     if (nowShowing >= numInList) {
       button.hide();
     }
  });
  
  });






imagesLoaded(document.querySelectorAll('img'), () => {

  document.body.classList.remove('loading');

  const el = document.getElementById('navbar');
 


});