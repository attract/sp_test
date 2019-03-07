$(function(){
    $(document).on('click','.filter_dropdown .link',function(){
        $('.dropdown').hide();
        $(this).closest('div').find('.dropdown').slideDown(100);
    })
    $(document).on('click',function(event) {
        if (!$(event.target).closest(".filter_dropdown").length) {
            $('.dropdown').hide();
        }
    });
})