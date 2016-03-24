//jQuery code for show/hide 
jQuery(document).ready(function() {
   $('.active').show();
   $('.sent').hide();
  $('.deleted').hide();
$('#active_check').click(function () {
    if ($('#active_check').attr('checked')) {
        $('.active').show();
    }
    else {
        $('.active').hide();
    }
});
$('#deleted_check').click(function () {
    if ($('#deleted_check').attr('checked')) {
        $('.deleted').show();
    }
    else {
        $('.deleted').hide();
    }
});
$('#sent_check').click(function () {
    if ($('#sent_check').attr('checked')) {
        $('.sent').show();
    }
    else {
        $('.sent').hide();
    }
});
});
