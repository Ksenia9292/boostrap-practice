
function getPostById(postID) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: "GET",
        success: function (data) {
         
            var template = $("<article class=\"blog-post mb-3 shadow\">\n" +
                "                    <div class=\"row\">\n" +
                "                        <div class=\"col-sm-4\">\n" +
                "                            <img class=\"img-fluid\" src=\"img/image4.jpg\" alt=\"\">\n" +
                "                        </div>\n" +
                "                        <div class=\"col-sm-8\">\n" +
                "                            <h3 class=\"m-0 mt-2\">" + data.title + "</h3>\n" +
                "                            <p class=\"m-0 nt-2\">" + data.body + "</p>\n" +
                "                            <div class=\"badge\">\n" +
                "                                   <a href=\"#\">About me</a>\n" +
                "                                   <a href=\"#\">Travelling</a>\n" +
                "\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "\n" +
                "                </article>")


            template.appendTo("#newArticle");

            preventLoad = false
        }
    })

}


$(document).ready(function () {
    var url = new URL(window.location.href)
    var postID = url.searchParams.get('id')
    getPostById(postID)

})