$(document).ready(function(){
    $(".buttons").click(function(){
        $(this).addClass("active").siblings().removeClass("active");

        var filter= $(this).attr("data-filter")
        if (filter == "all") {
            $(".image ").show()
        }else {
            $(".image ").not('.' + filter).hide()
            $(".image ").filter('.'+ filter).show()
        }
    });

    $(".gallery").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled: true
        }

    })
})