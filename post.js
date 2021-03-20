function saveEmail() {
    var email = $("#email").val()
    localStorage.setItem("email", email)
   
}
function getPostById(postID) {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/' + postID,
        type: "GET",
        success: function (data) {


            var template = $(`<div class="container">
            <div class="name text-center mb-3">
                <h1 class="heading">${data.title}</h1>
            </div>
            <p class="text-justify lead m-3">${data.body}</p>
        </div>`)
            template.appendTo("#newArticle");
        }
    })




    $(document).ready(function () {
        var url = new URL(window.location.href)
        var postID = url.searchParams.get('id')
        getPostById(postID)


        $(".submit").click(saveEmail()) 
      


        // $(function() {
        //     $("#submit").click(function(e) {
        //         e.preventDefault()
        //     var email = $("#email").val()
        //     window.localStorage.setItem("email", email)
        //     })
        // })


    });
















}


