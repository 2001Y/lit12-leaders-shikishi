$(function(){
  function animation(){
    $('.fadeInUp').each(function(){
      //ターゲットの位置
      var target = $(this).offset().top;
      //スクロール量
      var scroll = $(window).scrollTop();
      //ウィンドウの高さ
      var windowHeight = $(window).height();
      //ターゲットまでスクロールするとフェードイン
      if (scroll > target - windowHeight){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  }
  animation();
  $(window).scroll(function (){
    animation();
  });
});