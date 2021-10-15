let chatShow = false;
function show_hide(){

    if(chatShow) {
        $('.chat_main').show();
    } else {
        $('.chat_main').hide();
    }

    chatShow = !chatShow;
}

// ppt menu
function show_hide_cam(){

    if(chatShow) {
        $('.ppt').show();
    } else {
        $('.ppt').hide();
    }

    chatShow = !chatShow;
}