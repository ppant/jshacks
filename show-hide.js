<script type="text/javascript">
jQuery(document).ready(function() {
  $('.webiso_ui_remind_history_active').show();
  $('.webiso_ui_remind_history_sent').hide();
  $('.webiso_ui_remind_history_deleted').hide();
$('#active_reminder_check').click(function () {
    if ($('#active_reminder_check').attr('checked')) {
        $('.webiso_ui_remind_history_active').show();
    }
    else {
        $('.webiso_ui_remind_history_active').hide();
    }
});
$('#deleted_reminder_check').click(function () {
    if ($('#deleted_reminder_check').attr('checked')) {
        $('.webiso_ui_remind_history_deleted').show();
    }
    else {
        $('.webiso_ui_remind_history_deleted').hide();
    }
});
$('#sent_reminder_check').click(function () {
    if ($('#sent_reminder_check').attr('checked')) {
        $('.webiso_ui_remind_history_sent').show();
    }
    else {
        $('.webiso_ui_remind_history_sent').hide();
    }
});
});
</script>