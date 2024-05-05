$(document).ready(function(){

    $(".work-section a").on("click",function(event){ 

        event.preventDefault();
        const link = $(this).attr("href");
        $(".collection-area").load(link);
        $(".collection-area").hide().slideDown(1000)
    }); 

});