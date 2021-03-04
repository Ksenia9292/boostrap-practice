$(document).ready(function () {
    $(".dropdown").hover(function () {
        $(".dropdown-menu").toggle();
    });


    $(".fa-search").click(function () {
        $(".form-control").show("slow")
        $('#search_close').show("slow")
    })

    $('#search_close').click(function () {
        $(this).hide("slow")
        $(".form-control").hide("slow")
    })


    $("#my_carousel").carousel();


    var preventLoad = false


    $(".btn-info").click(function () {
        preventLoad = true
        getPosts()
    })

    function getPosts() {
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
                        "                            <h3 class=\"m-0 mt-2\">" + item.title + "</h3>\n" +
                        "                            <p class=\"m-0 nt-2\">" + item.body + "</p>\n" +
                        "                            <div class=\"badge\">\n" +
                        "                                <a href=\"/blog.html?id=" + item.id + "\">About me</a>\n" +
                        "                                <a href=\"#\">Travelling</a>\n" +
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
                    item.appendTo("#articles");
                })
                preventLoad = false

            }
        });
    }
    $(".navbar_brand").click(function () {
        window.location.href = "http://127.0.0.1:5500/index.html"
    });

});

