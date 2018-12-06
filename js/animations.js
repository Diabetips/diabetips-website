// Function which adds the 'animated' class to any '.animatable' in view
var doAnimations = function() {

    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if ($animatables.size === 0) {
        $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
        var $animatable = $(this);
        if (($animatable.offset().top + $animatable.height() - 20) < offset) {
            $animatable.removeClass('animatable').addClass('animated');
        }
    });
};

// Hook doAnimations on scroll, and trigger a scroll
$(document).on('scroll', doAnimations);

$(document).ready(function() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    console.log($('.target-mouse').css('background-size'));
    $(document).mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * -pageX;
        var newvalueY = height * -pageY;
        $('.target-mouse').css("background-position", "calc("+newvalueX+"px + 50%)"+" calc("+newvalueY+"px + 50%)");
        console.log(e.pageX, e.pageY);
    });
});

$(document).trigger('scroll', document);