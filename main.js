$(function () {

  $(".tabbar").each(function(){
    const $bar = $(this);
    const $links = $bar.find("a");
    const $panels = $bar.nextAll(".tabpanel-group").first()
                      .find(".tabpanel");

    $links.on("click", function(e){
      e.preventDefault();
      const target = $(this).data("target");

      $links.removeClass("on");
      $(this).addClass("on");

      $panels.removeClass("on");
      $("#" + target).addClass("on");
    });

    $links.first().trigger("click");
  });



  $(".slider").each(function(){
    const $slider = $(this);
    const $slides = $slider.find(".slide");
    const $dots = $slider.find(".dot");
    let idx = 0;
    let timer = null;

    function go(n){
      idx = (n + $slides.length) % $slides.length;

      $slides.removeClass("active").fadeOut(200);
      $slides.eq(idx).addClass("active").fadeIn(200);

      $dots.removeClass("active");
      $dots.eq(idx).addClass("active");
    }

    $dots.on("click", function(){
      const n = $(this).data("idx");
      go(n);
    });

    function start(){
      timer = setInterval(function(){ go(idx + 1); }, 3500);
    }
    function stop(){
      if (timer) clearInterval(timer);
    }

    $slider.on("mouseenter", stop)
           .on("mouseleave", start);

    $slides.hide().eq(0).show().addClass("active");
    $dots.eq(0).addClass("active");
    start();
  });

  $(document).on("click", "a.null", function(e){
    e.preventDefault();
  });

});
