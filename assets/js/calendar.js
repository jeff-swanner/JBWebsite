$( document ).ready(function() {
    if ($('#calendar').width()<440) {
        $('#calendar2').show();
    } else {
        $('#calendar1').show();
    };
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