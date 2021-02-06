$(document).ready(function () {
    $("a").click(function () {
        $(this).toggleClass('clicked');
    });

    $("button[type='submit']").click(function () {
        alert('not found');
    });

    $(".author img").click(function () {
        $(this).animate({
            height: "100px"
        }, 1000)
    });

    $(".hero-post img").click(function () {
        $(this).attr('src', './img/imgchange.png')
    });

    $(window).on('scroll', function () {

        if (window.innerHeight - (window.innerHeight * 0.3) < $(document).scrollTop()){
            console.log(true)
        }
    })

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: "GET",
        success: function (data) {
            var array = []
            data.forEach(function (item) {
                var template = "  <article class=\"blog-post mb-3 shadow\">\n" +
                    "                    <div class=\"row\">\n" +
                    "                        <div class=\"col-sm-4\">\n" +
                    "                            <img class=\"img-fluid\" src=\"img/image4.jpg\" alt=\"\">\n" +
                    "                        </div>\n" +
                    "                        <div class=\"col-sm-8\">\n" +
                    "                            <h3 class=\"m-0 mt-2\">"+ item.title +"</h3>\n" +
                    "                            <p class=\"m-0 nt-2\">"+ item.body +"</p>\n" +
                    "                            <div class=\"badge\">\n" +
                    "                                <a href=\"#\">Technology</a>\n" +
                    "                                <a href=\"#\">Programming</a>\n" +
                    "\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "\n" +
                    "                </article>"
                var jqueryWrapper = $(template)
                array.push(jqueryWrapper)
            })
            array.forEach(function (item) {
                item.appendTo( "#articles" );
            })
        }
    });
});

