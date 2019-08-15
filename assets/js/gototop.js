/*Scroll to top when arrow up clicked BEGIN*/
$(function () {
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $('#back2Top').fadeIn();
            }
            else {
                $("#back2Top").fadeOut();
            }
       });
		$("#back2Top").click(function () {
            if ($('html').scrollTop()) {
                $('html').animate({ scrollTop: 0 }, "slow");
                return false;
            }
            $('body').animate({ scrollTop: 0 }, "slow");
            return false;
        });
    });
});

 

