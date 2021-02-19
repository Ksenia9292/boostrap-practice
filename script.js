$(document).ready(function () {
$(".dropdown").hover(function(){
    $(".dropdown-menu").toggle();
});

$(".form-control").hide()
$(".fa-search").click(function(){
    $(".form-control").show("slow")
 
})

// $("#myCarousel").carousel();

//   var currentImage = $(".active");
//   var nextImage=currentImage.next();
//   if(nextImage.length){
//       currentImage.removeClass(".active").css("z-index", -10);
      



// $(".carousel-control-next").on("click", function(){
//     $(".carousel-item img").attr("src", "https://lh3.googleusercontent.com/proxy/h-SWhVQYEYPoX2ZgJaDcw2KdbAdO2-a_-qGO6R3kEwdBhc8NZ596wXL9hWVGLVtl9B1Or7prsD686hyE1bkeXMEyQHHGoCtdJUbvVtsP0CVW2ATt8FWE9wPfDK-QTaw4vSWeSfc8ke8Jdi_WkuOmvjQ");
// });











    var preventLoad = false

    // $(document).on('scroll', function () {
    //     if ($(document).height() - ($(document).height() * 0.5) < $(document).scrollTop() && !preventLoad) {
    //         preventLoad = true
    //         getPosts()
    //     }
    // })
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
                    item.appendTo("#articles");
                })
                preventLoad = false
               
            }
        });
    }


});

