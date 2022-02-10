$(document).ready(function(){
    $('nav > ul > li > a').on('click', function(e){
        e.preventDefault();
        $('nav > ul > li > a').removeClass('selected-menu');
        $(e.target).addClass('selected-menu');
    });    
});
