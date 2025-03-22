$(function() {
	$('.one, .two, .three, .four, .five').hide(); 
	$('.IfYou').mouseover(function(){
		$('.one').fadeIn(500, function(){
			$('.two').fadeIn(500, function(){
				$('.three').fadeIn(500, function(){        // постепенно появляющиеся блоки
					$('.four').fadeIn(500, function(){
						$('.five').fadeIn(500);
					});
				});
			});
		});
	});
});
$(document).ready(function () {
  $("nav a").on("click", function (event) {
    event.preventDefault();

    var targetClass = $(this).data("target");          //Авто скроллинг по клику
    var target = $(targetClass);

    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        600
      );
    }
  });
});
$(function() {
	function notRealSite(element) {
        $(element).click(function() {
            $('.notReal').show(100);
            return false;
        });
    }
    $('.notReal_close').click(function() {         //Окошко "Page is not real"
        $('.notReal').hide(100);
    });
    notRealSite('.logo');
    notRealSite('.social a');
    notRealSite('.top a');
    notRealSite('.clients a');
    notRealSite('.but a');
    notRealSite('.or');
});