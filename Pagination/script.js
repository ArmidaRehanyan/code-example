jQuery(document).ready(function () {
    let show_per_page = 4;
    let number_of_items = $('#pagingBox').children().size();
    let number_of_pages = Math.ceil(number_of_items/show_per_page);

    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);

    let navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';
    let current_link = 0;
    while(number_of_pages > current_link){
        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
        current_link++;
    }
    navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';

    $('#page_navigation').html(navigation_html);

    $('#page_navigation .page_link:first').addClass('active_page');

    $('#pagingBox').children().css('display', 'none');

    $('#pagingBox').children().slice(0, show_per_page).css('display', 'block');

});

function previous(){

    new_page = parseInt($('#current_page').val()) - 1;

    if($('.active_page').prev('.page_link').length==true){
        go_to_page(new_page);
    }

}

function next(){
    new_page = parseInt($('#current_page').val()) + 1;

    if($('.active_page').next('.page_link').length==true){
        go_to_page(new_page);
    }

}
function go_to_page(page_num){
    let show_per_page = parseInt($('#show_per_page').val());

    start_from = page_num * show_per_page;

    end_on = start_from + show_per_page;

    $('#pagingBox').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

    $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');

    $('#current_page').val(page_num);
}
