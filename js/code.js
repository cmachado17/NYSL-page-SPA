function mostrarHome(e) {

    $('.show').addClass('none').removeClass("show");
    $("#" + e.value).removeClass("none").addClass("show");
}

function mostrarMes(e) {
    if (e.value == "septiembre") {
        if ($('#septiembre').hasClass('none')) {
            $('#septiembre').addClass('show').removeClass('none');
        } else {
            $('#septiembre').addClass('none').removeClass('show');
        }
    } else if (e.value == "octubre") {
        if ($('#octubre').hasClass('none')) {
            $('#octubre').addClass('show').removeClass('none');
        } else {
            $('#octubre').addClass('none').removeClass('show');
        }
    }
}
$(window).on('resize', function () {
    if (window.innerHeight < window.innerWidth) {
        $('#septiembre').addClass('none').removeClass('show');
        $('#octubre').addClass('none').removeClass('show');
        $('#mostrarSep').addClass('show').removeClass('none');
        $('#mostrarOct').addClass('show').removeClass('none');
    } else if (window.innerHeight > window.innerWidth) {
        $('#septiembre').addClass('show').removeClass('none');
        $('#octubre').addClass('show').removeClass('none');
        $('#mostrarSep').addClass('none').removeClass('show');
        $('#mostrarOct').addClass('none').removeClass('show');
    }
});
