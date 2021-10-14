let chatShow = false;
function show_hide(){

    if(chatShow) {
        $('.chat_main').show();
    } else {
        $('.chat_main').hide();
    }

    chatShow = !chatShow;
}
