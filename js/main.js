var myFullpage = new fullpage('#fullpage', {
    menu: '#menu',
    anchors: ['section1', 'section2', 'section3','section4','section5'],
    sectionsColor: ['#000', '#000', '#000','#000','#000'],
    autoScrolling: true,//스크롤바를 스크롤 하면 한페이지씩 넘어감 
    keyboardScrolling:false,
    verticalCentered: false,
    scrollBar: true,
    navigation:true,  
});


  $("nav>ul>li>a").click(function(){
    $("nav>ul>li>a").removeClass("on");
    $(this).addClass("on");
});
$('.thumb').isotope({
    // options
    itemSelector:'.all',
    stagger:30,
    masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.all'
      }
  });
  $(".btn_all").click(function(){
    $('.thumb').isotope({ filter: '.all' });
  });
  $(".btn_anal").click(function(){
    $('.thumb').isotope({ filter: '.anal' });
  });
  $(".btn_digi").click(function(){
    $('.thumb').isotope({ filter: '.digi' });
  });
 
  $(".tel").click(function(){
    $(".num").css({"opacity":1});
  });
  $(".email").click(function(){
    $(".add").css({"opacity":1});
  });
  document.querySelector(".nextBtn").addEventListener("click",function(e){
    e.preventDefault();
    fullpage_api.moveSectionDown();
});
$(".tel").click(function(){
  $(".num").toggleClass("on")
});
$(".email").click(function(){
  $(".add").toggleClass("on")
});
 
 