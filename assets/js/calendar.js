$( document ).ready(function() {
    $("iframe").width($('#calendar').width());
    if ($('#calendar').width()<600) {
        $("iframe").height($('#calendar').width())
    };
    $(window).on('resize', function(){
        $("iframe").width($('#calendar').width());
        if ($('#calendar').width()<600) {
            $("iframe").height($('#calendar').width())
        };
    });
});